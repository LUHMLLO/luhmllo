/**
 * Drifter interaction handler with pan, zoom, and inertia support
 * Simplified architecture with cleaner mode/boundary handling
 */

interface Options {
  /** Movement speed multiplier for drag operations */
  dragSpeed: number;

  /** Inertia behavior configuration */
  inertia: {
    /** Velocity decay rate (0-1, higher = less damping) */
    damping: number;
    /** Minimum velocity threshold to stop inertia */
    threshold: number;
  };

  /** Whether it will follow the cursor or requires user to drag around */
  // behaviour: "drag" | "follow";

  /** Interaction mode - determines boundary behavior */
  mode: "bounded" | "free";

  /** For bounded mode: how to apply constraints */
  boundedTo: "center" | "inside";

  /** Who to attach listeners to */
  dragTarget: "self" | "boundary";

  /** Zoom/pinch configuration */
  zoom: {
    enabled: boolean;
    initial: number;
    max: number;
    min: number;
    /** Smoothing factor for wheel zoom (0-1) */
    smoothing: number;
    /** Zoom focal point behavior */
    zoomTo: "cursor" | "center";
  };
}

interface State {
  /** Primary pointer ID for drag operations */
  primaryPointerId: number;

  /** Current boundary constraints (calculated dynamically) */
  constraints: {
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;
  };

  /** Interaction state flags */
  isDragging: boolean;
  isPinching: boolean;

  /** Movement and velocity tracking */
  movement: {
    offsetX: number;
    offsetY: number;
    startX: number;
    startY: number;
    velocityX: number;
    velocityY: number;
    lastTime: number;
  };

  /** Current zoom level */
  zoom: number;
}

interface PointerData {
  x: number;
  y: number;
  timestamp: number;
}

interface PinchState {
  initialDistance: number;
  initialZoom: number;
  initialCenter: { x: number; y: number };
  initialOffset: { x: number; y: number };
  contentPoint: { x: number; y: number };
}

export class Drifter {
  private drifterElement: HTMLElement;
  private boundaryElement: HTMLElement | null;
  private options: Options;
  private state: State;
  private eventTarget: HTMLElement;
  private activePointers = new Map<number, PointerData>();
  private pinchState: PinchState | null = null;
  private inertiaFrameId: number | null = null;
  private animationFrameId: number | null = null;

  /**
   * Creates a new Drifter instance
   * @param drifterElement - The element to make drifter
   * @param boundaryElement - Container element (required for bounded mode, ignored for free mode)
   * @param options - Configuration options
   */
  constructor(
    drifterElement: HTMLElement,
    boundaryElement: HTMLElement | null,
    options: Partial<Options> = {},
  ) {
    this.drifterElement = drifterElement;
    this.boundaryElement = boundaryElement;

    // Apply defaults and validate
    this.options = this._applyDefaults(options);
    this._validateConfiguration();

    // Calculate and cache the event target once
    this.eventTarget = this._resolveEventTarget();

    // Initialize state
    this.state = {
      primaryPointerId: -1,
      constraints: { minX: 0, maxX: 0, minY: 0, maxY: 0 },
      isDragging: false,
      isPinching: false,
      movement: {
        offsetX: 0,
        offsetY: 0,
        startX: 0,
        startY: 0,
        velocityX: 0,
        velocityY: 0,
        lastTime: 0,
      },
      zoom: this.options.zoom.initial,
    };

    this._bindEventHandlers();
    this._attachEventListeners();
    this._updateTransform();
  }

  /**
   * Apply default options and merge with user provided options
   * @private
   */
  private _applyDefaults(options: Partial<Options>): Options {
    return {
      dragSpeed: options.dragSpeed ?? 1.25,
      inertia: {
        damping: options.inertia?.damping ?? 0.92,
        threshold: options.inertia?.threshold ?? 1.0,
      },
      // behaviour: options.behaviour ?? "drag",
      mode: options.mode ?? "bounded",
      boundedTo: options.boundedTo ?? "center",
      dragTarget: options.dragTarget ?? "self",
      zoom: {
        enabled: options.zoom?.enabled ?? true,
        initial: options.zoom?.initial ?? 1,
        min: options.zoom?.min ?? 0.5,
        max: options.zoom?.max ?? 1.5,
        smoothing: options.zoom?.smoothing ?? 0.75,
        zoomTo: options.zoom?.zoomTo ?? "cursor",
      },
    };
  }

  /**
   * Validate configuration and throw errors for invalid setups
   * @private
   */
  private _validateConfiguration(): void {
    if (!this.drifterElement) {
      throw new Error(
        `Drifter requires a valid HTMLElement, but received: ${
          this.drifterElement === null ? "null" : typeof this.drifterElement
        }`,
      );
    }

    if (this.options.mode === "bounded" && !this.boundaryElement) {
      throw new Error(
        "Bounded mode requires a valid boundary element, but none was provided",
      );
    }

    // For free mode, we don't need a boundary element
    if (this.options.mode === "free" && this.options.dragTarget === "self") {
      this.boundaryElement = null;
    }

    console.debug("eventTarget", this.eventTarget);
  }

  /**
   * Resolve the event target element based on configuration
   * @private
   */
  private _resolveEventTarget(): HTMLElement {
    return this.options.dragTarget === "self"
      ? this.drifterElement
      : this.boundaryElement!;
  }

  /**
   * Bind all event handlers to maintain proper context
   * @private
   */
  private _bindEventHandlers(): void {
    this._handlePointerDown = this._handlePointerDown.bind(this);
    this._handlePointerMove = this._handlePointerMove.bind(this);
    this._handlePointerUp = this._handlePointerUp.bind(this);
    this._handlePointerCancel = this._handlePointerCancel.bind(this);
    this._handlePointerLeave = this._handlePointerLeave.bind(this);
    this._handleWindowBlur = this._handleWindowBlur.bind(this);
    this._handleWheel = this._handleWheel.bind(this);
  }

  /**
   * Attach event listeners to appropriate elements
   * @private
   */
  private _attachEventListeners(): void {
    this.eventTarget.addEventListener("pointerdown", this._handlePointerDown);
    this.eventTarget.addEventListener("pointermove", this._handlePointerMove);
    this.eventTarget.addEventListener("pointerup", this._handlePointerUp);
    this.eventTarget.addEventListener(
      "pointercancel",
      this._handlePointerCancel,
    );
    this.eventTarget.addEventListener("pointerleave", this._handlePointerLeave);

    // Global events
    globalThis.addEventListener("blur", this._handleWindowBlur);
    globalThis.addEventListener("visibilitychange", this._handleWindowBlur);

    // Wheel events for zoom
    if (this.options.zoom.enabled) {
      this.eventTarget.addEventListener("wheel", this._handleWheel, {
        passive: false,
      });
    }
  }

  private _detachEventListeners(): void {
    this.eventTarget.removeEventListener(
      "pointerdown",
      this._handlePointerDown,
    );
    this.eventTarget.removeEventListener(
      "pointermove",
      this._handlePointerMove,
    );
    this.eventTarget.removeEventListener("pointerup", this._handlePointerUp);
    this.eventTarget.removeEventListener(
      "pointercancel",
      this._handlePointerCancel,
    );
    this.eventTarget.removeEventListener(
      "pointerleave",
      this._handlePointerLeave,
    );

    globalThis.removeEventListener("blur", this._handleWindowBlur);
    globalThis.removeEventListener("visibilitychange", this._handleWindowBlur);

    this._stopInertia();
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }

    // Clear pointer tracking
    this.activePointers.clear();
  }

  /**
   * Update CSS custom properties for transform
   * Uses RAF for smooth rendering
   * @private
   */
  private _updateTransform(): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }

    this.animationFrameId = requestAnimationFrame(() => {
      this.drifterElement.style.setProperty(
        "--translate-x",
        `${this.state.movement.offsetX}px`,
      );
      this.drifterElement.style.setProperty(
        "--translate-y",
        `${this.state.movement.offsetY}px`,
      );
      this.drifterElement.style.setProperty("--translate-z", "0px");
      this.drifterElement.style.setProperty("--scale", `${this.state.zoom}`);
      this.animationFrameId = null;
    });
  }

  _getPointerDistance(pointer1: PointerData, pointer2: PointerData) {
    const dx = pointer1.x - pointer2.x;
    const dy = pointer1.y - pointer2.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  _getPointerCenter(
    pointer1: PointerData,
    pointer2: PointerData,
  ): { x: number; y: number } {
    let boundaryRect;
    if (this.boundaryElement) {
      boundaryRect = this.boundaryElement.getBoundingClientRect();
    } else {
      boundaryRect = this.drifterElement.getBoundingClientRect();
    }
    return {
      x: (pointer1.x + pointer2.x) / 2 - boundaryRect.left,
      y: (pointer1.y + pointer2.y) / 2 - boundaryRect.top,
    };
  }

  /**
   * Calculate and apply boundary constraints based on mode and boundedTo settings
   * Handles cases where target is larger or smaller than boundary
   * @param x - Target X position
   * @param y - Target Y position
   * @param elastic - Whether to apply elastic overshoot
   * @returns Constrained position
   * @private
   */
  private _calculateConstraints(
    x: number,
    y: number,
    elastic: boolean = false,
  ): { x: number; y: number } {
    // Guard against invalid inputs
    // if (!isFinite(x)) x = this.errorState.lastValidPosition.x || 0;
    // if (!isFinite(y)) y = this.errorState.lastValidPosition.y || 0;

    // Free mode has no constraints
    if (this.options.mode === "free" || !this.boundaryElement) {
      return { x, y };
    }

    // const drifterRect = this.drifterElement.getBoundingClientRect();
    // const boundaryRect = this.boundaryElement.getBoundingClientRect();

    // Get actual dimensions accounting for zoom
    const targetWidth = this.drifterElement.clientWidth * this.state.zoom;
    const targetHeight = this.drifterElement.clientHeight * this.state.zoom;

    const boundaryStyles = getComputedStyle(this.boundaryElement);
    const padding = {
      left: parseFloat(boundaryStyles.paddingLeft),
      right: parseFloat(boundaryStyles.paddingRight),
      top: parseFloat(boundaryStyles.paddingTop),
      bottom: parseFloat(boundaryStyles.paddingBottom),
    };

    const boundaryWidth = this.boundaryElement.clientWidth - padding.left -
      padding.right;
    const boundaryHeight = this.boundaryElement.clientHeight - padding.top -
      padding.bottom;

    const halfTargetW = targetWidth / 2;
    const halfTargetH = targetHeight / 2;
    const halfBoundaryW = boundaryWidth / 2;
    const halfBoundaryH = boundaryHeight / 2;

    let minX: number, maxX: number, minY: number, maxY: number;

    if (this.options.boundedTo === "center") {
      // CENTER MODE: Each corner of the target can reach the center of the boundary
      maxX = (targetWidth - boundaryWidth) / 2 + halfBoundaryW;
      minX = -maxX;

      maxY = (targetHeight - boundaryHeight) / 2 + halfBoundaryH;
      minY = -maxY;
    } else {
      // INSIDE MODE: Keep entire target within boundary bounds when possible
      maxX = halfBoundaryW - halfTargetW;
      minX = -maxX;
      maxY = halfBoundaryH - halfTargetH;
      minY = -maxY;

      // Handle case where target is larger than boundary
      if (targetWidth > boundaryWidth) {
        minX = halfBoundaryW - halfTargetW;
        maxX = -minX;
      }

      if (targetHeight > boundaryHeight) {
        minY = halfBoundaryH - halfTargetH;
        maxY = -minY;
      }
    }

    // Update state constraints for other methods
    this.state.constraints = { minX, maxX, minY, maxY };

    // Apply elastic overshoot if enabled
    const tension = 0.35;

    function applyElastic(val: number, min: number, max: number): number {
      if (val < min) return elastic ? min + (val - min) * tension : min;
      if (val > max) return elastic ? max + (val - max) * tension : max;
      return val;
    }

    return {
      x: applyElastic(x, minX, maxX),
      y: applyElastic(y, minY, maxY),
    };
  }

  /**
   * Start inertia animation after drag ends
   * @private
   */
  private _startInertia(): void {
    if (this.state.isDragging || this.state.isPinching) return;

    const { damping, threshold } = this.options.inertia;
    const maxInitialVelocity = 2000;

    // Cap velocity to prevent extreme movements
    this.state.movement.velocityX = Math.max(
      -maxInitialVelocity,
      Math.min(maxInitialVelocity, this.state.movement.velocityX),
    );
    this.state.movement.velocityY = Math.max(
      -maxInitialVelocity,
      Math.min(maxInitialVelocity, this.state.movement.velocityY),
    );

    let lastTime = performance.now();

    const step = (now: number) => {
      if (!this.inertiaFrameId) return;

      const dt = (now - lastTime) / 1000;
      lastTime = now;

      // Frame-rate independent damping
      this.state.movement.velocityX *= Math.pow(damping, dt * 60);
      this.state.movement.velocityY *= Math.pow(damping, dt * 60);

      const speed = Math.sqrt(
        this.state.movement.velocityX ** 2 + this.state.movement.velocityY ** 2,
      );

      if (speed < threshold) {
        this._stopInertia();
        return;
      }

      // Calculate movement for this frame
      const moveX = this.state.movement.velocityX * dt;
      const moveY = this.state.movement.velocityY * dt;

      const newPos = this._calculateConstraints(
        this.state.movement.offsetX + moveX,
        this.state.movement.offsetY + moveY,
        false,
      );

      // Apply boundary bounce for bounded mode
      if (this.options.mode === "bounded") {
        if (newPos.x !== this.state.movement.offsetX + moveX) {
          this.state.movement.velocityX *= -0.3;
        }
        if (newPos.y !== this.state.movement.offsetY + moveY) {
          this.state.movement.velocityY *= -0.3;
        }
      }

      this.state.movement.offsetX = newPos.x;
      this.state.movement.offsetY = newPos.y;
      this._updateTransform();

      this.inertiaFrameId = requestAnimationFrame(step);
    };

    this.inertiaFrameId = requestAnimationFrame(step);
  }

  /**
   * Stop inertia animation and reset velocity
   * @private
   */
  private _stopInertia(): void {
    if (this.inertiaFrameId) {
      cancelAnimationFrame(this.inertiaFrameId);
      this.inertiaFrameId = null;
    }
    this.state.movement.velocityX = 0;
    this.state.movement.velocityY = 0;
  }

  /**
   * Animate element back to valid bounds
   * @private
   */
  private _bounceBackToBounds(): void {
    if (this.options.mode === "free") return;

    const { offsetX: startX, offsetY: startY } = this.state.movement;
    const target = this._calculateConstraints(startX, startY, false);

    // Skip animation if already in bounds
    if (Math.abs(target.x - startX) < 1 && Math.abs(target.y - startY) < 1) {
      return;
    }

    const startTime = performance.now();
    const duration = 250;

    const animate = (now: number) => {
      const t = Math.min(1, (now - startTime) / duration);
      const eased = t * (2 - t); // easeOutQuad

      this.state.movement.offsetX = startX + (target.x - startX) * eased;
      this.state.movement.offsetY = startY + (target.y - startY) * eased;
      this._updateTransform();

      if (t < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }

  // Event handler implementations
  private _handlePointerDown(event: PointerEvent): void {
    if (!(event.target instanceof HTMLElement)) return;
    if (![this.boundaryElement, this.drifterElement].includes(event.target)) {
      return;
    }

    this.activePointers.set(event.pointerId, {
      x: event.clientX,
      y: event.clientY,
      timestamp: Date.now(),
    });

    if (this.activePointers.size === 1) {
      this._beginDrag(event.clientX, event.clientY, event.pointerId);
    } else if (this.activePointers.size === 2 && this.options.zoom.enabled) {
      this._beginPinch();
    }

    event.preventDefault();
  }

  private _handlePointerMove(event: PointerEvent): void {
    if (this.activePointers.has(event.pointerId)) {
      this.activePointers.set(event.pointerId, {
        x: event.clientX,
        y: event.clientY,
        timestamp: Date.now(),
      });
    }

    if (
      this.state.isDragging && this.state.primaryPointerId === event.pointerId
    ) {
      this._processDragMovement(event.clientX, event.clientY);
    }

    if (this.state.isPinching && this.activePointers.size === 2) {
      this._processPinchMovement();
    }
  }

  private _handlePointerUp(event: PointerEvent): void {
    this.activePointers.delete(event.pointerId);

    if (this.state.isPinching && this.activePointers.size < 2) {
      this._endPinch();
    } else if (this.state.isDragging) {
      this._endDrag(event.pointerId);
    }
  }

  private _handlePointerCancel(event: PointerEvent): void {
    this.activePointers.delete(event.pointerId);
    if (this.state.isPinching) this._endPinch();
    if (this.state.isDragging) this._endDrag(event.pointerId);
  }

  private _handlePointerLeave(event: PointerEvent): void {
    this.activePointers.delete(event.pointerId);
    if (
      this.state.isDragging && this.state.primaryPointerId === event.pointerId
    ) {
      this._endDrag(event.pointerId);
    }
    if (this.state.isPinching && this.activePointers.size < 2) {
      this._endPinch();
    }
  }

  private _handleWindowBlur(): void {
    if (this.state.isDragging) this._endDrag(this.state.primaryPointerId);
    if (this.state.isPinching) this._endPinch();
    this.activePointers.clear();
  }

  /**
   * Handle wheel events for zoom functionality
   * Maintains focal point under cursor/center during zoom
   * @private
   */
  private _handleWheel(event: WheelEvent): void {
    if (!this.options.zoom.enabled) return;

    event.preventDefault();

    // Normalize wheel delta across browsers/devices
    const delta = -event.deltaY / 1000;
    const zoomFactor = 1 + delta;

    // Calculate new zoom level within bounds
    const newZoom = Math.max(
      this.options.zoom.min,
      Math.min(this.options.zoom.max, this.state.zoom * zoomFactor),
    );

    // Only proceed if zoom actually changed
    if (Math.abs(newZoom - this.state.zoom) < 0.001) return;

    this._performZoom(newZoom, event.clientX, event.clientY);
  }

  /**
   * Perform zoom operation while maintaining focal point
   * @param newZoom - Target zoom level
   * @param clientX - X coordinate of zoom focal point (screen space)
   * @param clientY - Y coordinate of zoom focal point (screen space)
   * @param smooth - Whether to apply smoothing (for wheel events)
   * @private
   */
  private _performZoom(
    newZoom: number,
    clientX: number,
    clientY: number,
    smooth: boolean = true,
  ): void {
    const targetRect = this.eventTarget.getBoundingClientRect();

    let focalX: number, focalY: number;

    // Determine zoom focal point
    if (this.options.zoom.zoomTo === "cursor") {
      focalX = clientX - targetRect.left;
      focalY = clientY - targetRect.top;
    } else {
      // Center of the boundary/drifter element
      focalX = this.eventTarget.clientWidth / 2;
      focalY = this.eventTarget.clientHeight / 2;
    }

    // Calculate the point on the content under the focal point
    // This point should remain stationary relative to the focal point
    const contentPointX = (focalX - this.eventTarget.clientWidth / 2 -
      this.state.movement.offsetX) /
      this.state.zoom;
    const contentPointY = (focalY - this.eventTarget.clientHeight / 2 -
      this.state.movement.offsetY) /
      this.state.zoom;

    // Calculate new position to keep content point under focal point
    const newOffsetX = focalX - this.eventTarget.clientWidth / 2 -
      contentPointX * newZoom;
    const newOffsetY = focalY - this.eventTarget.clientHeight / 2 -
      contentPointY * newZoom;

    if (smooth) {
      // Apply smoothing for wheel zoom
      const smoothingFactor = this.options.zoom.smoothing;
      this.state.zoom += (newZoom - this.state.zoom) * smoothingFactor;
      this.state.movement.offsetX +=
        (newOffsetX - this.state.movement.offsetX) * smoothingFactor;
      this.state.movement.offsetY +=
        (newOffsetY - this.state.movement.offsetY) * smoothingFactor;
    } else {
      // Direct application for pinch gestures
      this.state.zoom = newZoom;
      this.state.movement.offsetX = newOffsetX;
      this.state.movement.offsetY = newOffsetY;
    }

    this._updateTransform();
  }
  private _beginDrag(x: number, y: number, pointerId: number): void {
    this._stopInertia();
    this.state.isDragging = true;
    this.state.movement.startX = x;
    this.state.movement.startY = y;
    this.state.primaryPointerId = pointerId;
    this.state.movement.velocityX = 0;
    this.state.movement.velocityY = 0;
    this.state.movement.lastTime = performance.now();

    this.eventTarget.setPointerCapture(pointerId);
  }

  private _beginPinch(): void {
    if (!this.options.zoom.enabled) return;

    const pointers = Array.from(this.activePointers.values());
    if (pointers.length !== 2) return;

    this._stopInertia();
    this.state.isPinching = true;
    this.state.isDragging = false; // Stop any ongoing drag

    const [pointer1, pointer2] = pointers;
    const initialCenter = this._getPointerCenter(pointer1, pointer2);

    // Calculate the content point under the initial pinch center
    // This point should remain stationary relative to the pinch center
    const contentPointX = (initialCenter.x - this.eventTarget.clientWidth / 2 -
      this.state.movement.offsetX) / this.state.zoom;
    const contentPointY = (initialCenter.y - this.eventTarget.clientHeight / 2 -
      this.state.movement.offsetY) / this.state.zoom;

    this.pinchState = {
      initialDistance: this._getPointerDistance(pointer1, pointer2),
      initialZoom: this.state.zoom,
      initialCenter,
      initialOffset: {
        x: this.state.movement.offsetX,
        y: this.state.movement.offsetY,
      },
      contentPoint: { x: contentPointX, y: contentPointY },
    };

    this.activePointers.forEach((_, pointerId) => {
      this.eventTarget.setPointerCapture(pointerId);
    });
  }

  private _processDragMovement(clientX: number, clientY: number): void {
    const now = performance.now();
    const deltaX = (clientX - this.state.movement.startX) *
      this.options.dragSpeed;
    const deltaY = (clientY - this.state.movement.startY) *
      this.options.dragSpeed;

    const prevX = this.state.movement.offsetX;
    const prevY = this.state.movement.offsetY;

    const newPos = this._calculateConstraints(
      this.state.movement.offsetX + deltaX,
      this.state.movement.offsetY + deltaY,
      true,
    );

    this.state.movement.offsetX = newPos.x;
    this.state.movement.offsetY = newPos.y;

    // Calculate velocity from actual movement
    const dt = now - this.state.movement.lastTime;
    if (dt > 5 && dt < 100) {
      const actualDeltaX = this.state.movement.offsetX - prevX;
      const actualDeltaY = this.state.movement.offsetY - prevY;
      this.state.movement.velocityX = (actualDeltaX / dt) * 1000;
      this.state.movement.velocityY = (actualDeltaY / dt) * 1000;
    }

    this.state.movement.startX = clientX;
    this.state.movement.startY = clientY;
    this.state.movement.lastTime = now;

    this._updateTransform();
  }

  private _processPinchMovement(): void {
    if (!this.pinchState || this.activePointers.size !== 2) return;

    const pointers = Array.from(this.activePointers.values());
    const [pointer1, pointer2] = pointers;

    // Calculate current distance and zoom scale
    const currentDistance = this._getPointerDistance(pointer1, pointer2);
    const scale = currentDistance / this.pinchState.initialDistance;

    // Calculate new zoom level within constraints
    const newZoom = Math.max(
      this.options.zoom.min,
      Math.min(this.options.zoom.max, this.pinchState.initialZoom * scale),
    );

    // Get current center of pinch gesture
    const currentCenter = this._getPointerCenter(pointer1, pointer2);

    // Calculate new position to keep the content point stationary under the pinch center
    const newOffsetX = currentCenter.x - this.eventTarget.clientWidth / 2 -
      this.pinchState.contentPoint.x * newZoom;
    const newOffsetY = currentCenter.y - this.eventTarget.clientHeight / 2 -
      this.pinchState.contentPoint.y * newZoom;

    // Apply changes directly - no smoothing during active pinch for responsiveness
    this.state.zoom = newZoom;
    this.state.movement.offsetX = newOffsetX;
    this.state.movement.offsetY = newOffsetY;

    this._updateTransform();
  }

  private _endDrag(pointerId: number): void {
    if (this.state.primaryPointerId !== pointerId) return;

    this.state.isDragging = false;
    this.state.primaryPointerId = -1;

    const speed = Math.sqrt(
      this.state.movement.velocityX ** 2 + this.state.movement.velocityY ** 2,
    );

    if (speed > this.options.inertia.threshold) {
      this._startInertia();
    } else if (this.options.mode === "bounded") {
      this._bounceBackToBounds();
    }

    if (this.eventTarget.hasPointerCapture(pointerId)) {
      this.eventTarget.releasePointerCapture(pointerId);
    }
  }

  private _endPinch(): void {
    this.state.isPinching = false;
    this.pinchState = null;

    // Release pointer capture
    this.activePointers.forEach((_, pointerId) => {
      if (this.eventTarget.hasPointerCapture(pointerId)) {
        this.eventTarget.releasePointerCapture(pointerId);
      }
    });

    // Apply boundary constraints after pinch ends
    if (this.options.mode === "bounded") {
      this._bounceBackToBounds();
    }
  }
}
