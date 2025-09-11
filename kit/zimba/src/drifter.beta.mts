/**
 * Enhanced Drifter interaction handler with improved precision and performance
 * Features: sub-pixel precision, optimized memory usage, better event handling
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

  /** Performance optimizations */
  performance: {
    /** Use transform3d for hardware acceleration */
    useHardwareAcceleration: boolean;
    /** Throttle resize calculations (ms) */
    resizeDebounceMs: number;
  };
}

interface State {
  /** Primary pointer ID for drag operations */
  primaryPointerId: number;

  /** Cached boundary constraints (updated on resize) */
  constraints: {
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;
    lastUpdate: number;
  };

  /** Interaction state flags */
  isDragging: boolean;
  isPinching: boolean;

  /** High-precision movement tracking */
  movement: {
    offsetX: number;
    offsetY: number;
    startX: number;
    startY: number;
    velocityX: number;
    velocityY: number;
    lastTime: number;
    /** Accumulated sub-pixel precision */
    accumulatedX: number;
    accumulatedY: number;
  };

  /** Current zoom level */
  zoom: number;

  /** Cached element dimensions */
  cache: {
    drifterRect: DOMRect | null;
    boundaryRect: DOMRect | null;
    lastCacheTime: number;
  };
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
  contentPoint: { x: number; y: number };
}

export class Drifter {
  private readonly drifterElement: HTMLElement;
  private readonly boundaryElement: HTMLElement | null;
  private readonly options: Options;
  private readonly eventTarget: HTMLElement;

  private state: State;
  private activePointers = new Map<number, PointerData>();
  private pinchState: PinchState | null = null;
  private inertiaFrameId: number | null = null;
  private animationFrameId: number | null = null;
  private resizeObserver: ResizeObserver | null = null;

  // Pre-bound event handlers to avoid repeated binding
  private readonly boundHandlers: {
    pointerDown: (e: PointerEvent) => void;
    pointerMove: (e: PointerEvent) => void;
    pointerUp: (e: PointerEvent) => void;
    pointerCancel: (e: PointerEvent) => void;
    wheel: (e: WheelEvent) => void;
    windowBlur: () => void;
  };

  // Cached calculations to avoid repeated work
  private cachedTransform = { x: 0, y: 0, scale: 1 };

  constructor(
    drifterElement: HTMLElement,
    boundaryElement: HTMLElement | null,
    options: Partial<Options> = {},
  ) {
    this.drifterElement = drifterElement;
    this.boundaryElement = boundaryElement;
    this.options = this._applyDefaults(options);
    this._validateConfiguration();
    this.eventTarget = this._resolveEventTarget();

    // Initialize state with optimized structure
    this.state = {
      primaryPointerId: -1,
      constraints: {
        minX: 0,
        maxX: 0,
        minY: 0,
        maxY: 0,
        lastUpdate: 0,
      },
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
        accumulatedX: 0,
        accumulatedY: 0,
      },
      zoom: this.options.zoom.initial,
      cache: {
        drifterRect: null,
        boundaryRect: null,
        lastCacheTime: 0,
      },
    };

    // Pre-bind all handlers once
    this.boundHandlers = {
      pointerDown: this._handlePointerDown.bind(this),
      pointerMove: this._handlePointerMove.bind(this),
      pointerUp: this._handlePointerUp.bind(this),
      pointerCancel: this._handlePointerCancel.bind(this),
      wheel: this._handleWheel.bind(this),
      windowBlur: this._handleWindowBlur.bind(this),
    };

    this._setupResizeObserver();
    this._attachEventListeners();
    this._updateConstraintsCache();
    this._updateTransform();
  }

  private _applyDefaults(options: Partial<Options>): Options {
    return {
      dragSpeed: options.dragSpeed ?? 1.25,
      inertia: {
        damping: options.inertia?.damping ?? 0.92,
        threshold: options.inertia?.threshold ?? 1.0,
      },
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
      performance: {
        useHardwareAcceleration: options.performance?.useHardwareAcceleration ??
          true,
        resizeDebounceMs: options.performance?.resizeDebounceMs ?? 100,
      },
    };
  }

  private _validateConfiguration(): void {
    if (!this.drifterElement?.nodeType) {
      throw new Error(`Invalid drifter element: ${this.drifterElement}`);
    }

    if (this.options.mode === "bounded" && !this.boundaryElement?.nodeType) {
      throw new Error("Bounded mode requires a valid boundary element");
    }
  }

  private _resolveEventTarget(): HTMLElement {
    return this.options.dragTarget === "self"
      ? this.drifterElement
      : this.boundaryElement!;
  }

  /**
   * Setup ResizeObserver for efficient dimension tracking
   */
  private _setupResizeObserver(): void {
    if (typeof ResizeObserver === "undefined") return;

    this.resizeObserver = new ResizeObserver(() => {
      this._debounceConstraintsUpdate();
    });

    this.resizeObserver.observe(this.drifterElement);
    if (this.boundaryElement) {
      this.resizeObserver.observe(this.boundaryElement);
    }
  }

  private _debounceConstraintsUpdate(): void {
    const now = performance.now();
    if (
      now - this.state.constraints.lastUpdate <
        this.options.performance.resizeDebounceMs
    ) {
      return;
    }
    this._updateConstraintsCache();
  }

  /**
   * Cache element dimensions and constraints for better performance
   */
  private _updateConstraintsCache(): void {
    const now = performance.now();

    // Update cached rects
    this.state.cache.drifterRect = this.drifterElement.getBoundingClientRect();
    this.state.cache.boundaryRect =
      this.boundaryElement?.getBoundingClientRect() || null;
    this.state.cache.lastCacheTime = now;
    this.state.constraints.lastUpdate = now;

    // Pre-calculate constraints if in bounded mode
    if (this.options.mode === "bounded" && this.boundaryElement) {
      this._calculateAndCacheConstraints();
    }
  }

  /**
   * Pre-calculate and cache boundary constraints
   */
  private _calculateAndCacheConstraints(): void {
    if (!this.boundaryElement) return;

    const targetWidth = this.drifterElement.clientWidth * this.state.zoom;
    const targetHeight = this.drifterElement.clientHeight * this.state.zoom;

    const boundaryStyles = getComputedStyle(this.boundaryElement);
    const padding = {
      left: parseFloat(boundaryStyles.paddingLeft) || 0,
      right: parseFloat(boundaryStyles.paddingRight) || 0,
      top: parseFloat(boundaryStyles.paddingTop) || 0,
      bottom: parseFloat(boundaryStyles.paddingBottom) || 0,
    };

    const boundaryWidth = this.boundaryElement.clientWidth - padding.left -
      padding.right;
    const boundaryHeight = this.boundaryElement.clientHeight - padding.top -
      padding.bottom;

    const halfTargetW = targetWidth * 0.5;
    const halfTargetH = targetHeight * 0.5;
    const halfBoundaryW = boundaryWidth * 0.5;
    const halfBoundaryH = boundaryHeight * 0.5;

    let minX: number, maxX: number, minY: number, maxY: number;

    if (this.options.boundedTo === "center") {
      maxX = (targetWidth - boundaryWidth) * 0.5 + halfBoundaryW;
      minX = -maxX;
      maxY = (targetHeight - boundaryHeight) * 0.5 + halfBoundaryH;
      minY = -maxY;
    } else {
      maxX = halfBoundaryW - halfTargetW;
      minX = -maxX;
      maxY = halfBoundaryH - halfTargetH;
      minY = -maxY;

      if (targetWidth > boundaryWidth) {
        minX = halfBoundaryW - halfTargetW;
        maxX = -minX;
      }
      if (targetHeight > boundaryHeight) {
        minY = halfBoundaryH - halfTargetH;
        maxY = -minY;
      }
    }

    this.state.constraints = {
      minX,
      maxX,
      minY,
      maxY,
      lastUpdate: performance.now(),
    };
  }

  /**
   * High-precision constraint calculation with elastic overshoot
   */
  private _calculateConstraints(
    x: number,
    y: number,
    elastic: boolean = false,
  ): { x: number; y: number } {
    if (this.options.mode === "free" || !this.boundaryElement) {
      return { x, y };
    }

    // Use cached constraints if available and recent
    const now = performance.now();
    if (now - this.state.constraints.lastUpdate > 1000) {
      this._updateConstraintsCache();
    }

    const { minX, maxX, minY, maxY } = this.state.constraints;
    const tension = 0.35;

    const applyElastic = (val: number, min: number, max: number): number => {
      if (val < min) return elastic ? min + (val - min) * tension : min;
      if (val > max) return elastic ? max + (val - max) * tension : max;
      return val;
    };

    return {
      x: applyElastic(x, minX, maxX),
      y: applyElastic(y, minY, maxY),
    };
  }

  /**
   * Optimized transform update with caching and hardware acceleration
   */
  private _updateTransform(): void {
    if (this.animationFrameId) return;

    this.animationFrameId = requestAnimationFrame(() => {
      const { offsetX, offsetY } = this.state.movement;
      const { zoom } = this.state;

      // Only update if values actually changed
      if (
        Math.abs(this.cachedTransform.x - offsetX) < 0.001 &&
        Math.abs(this.cachedTransform.y - offsetY) < 0.001 &&
        Math.abs(this.cachedTransform.scale - zoom) < 0.001
      ) {
        this.animationFrameId = null;
        return;
      }

      // Round to avoid sub-pixel rendering issues
      const roundedX = Math.round(offsetX * 100) / 100;
      const roundedY = Math.round(offsetY * 100) / 100;
      const roundedScale = Math.round(zoom * 10000) / 10000;

      if (this.options.performance.useHardwareAcceleration) {
        this.drifterElement.style.transform =
          `translate3d(${roundedX}px, ${roundedY}px, 0) scale(${roundedScale})`;
      } else {
        this.drifterElement.style.transform =
          `translate(${roundedX}px, ${roundedY}px) scale(${roundedScale})`;
      }

      // Cache the applied values
      this.cachedTransform = { x: offsetX, y: offsetY, scale: zoom };
      this.animationFrameId = null;
    });
  }

  /**
   * Optimized pointer distance calculation
   */
  private _getPointerDistance(p1: PointerData, p2: PointerData): number {
    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  /**
   * Optimized pointer center calculation with cached boundary rect
   */
  private _getPointerCenter(
    p1: PointerData,
    p2: PointerData,
  ): { x: number; y: number } {
    const boundaryRect = this.state.cache.boundaryRect ||
      this.boundaryElement?.getBoundingClientRect() ||
      this.state.cache.drifterRect ||
      this.drifterElement.getBoundingClientRect();

    return {
      x: (p1.x + p2.x) * 0.5 - boundaryRect.left,
      y: (p1.y + p2.y) * 0.5 - boundaryRect.top,
    };
  }

  /**
   * Enhanced inertia with frame-rate independent animation
   */
  private _startInertia(): void {
    if (this.state.isDragging || this.state.isPinching) return;

    const { damping, threshold } = this.options.inertia;
    const maxInitialVelocity = 2000;

    // Clamp velocities
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

      const dt = Math.min((now - lastTime) / 1000, 1 / 30); // Cap at 30fps equivalent
      lastTime = now;

      // Frame-rate independent damping
      const dampingFactor = Math.pow(damping, dt * 60);
      this.state.movement.velocityX *= dampingFactor;
      this.state.movement.velocityY *= dampingFactor;

      const speed = Math.sqrt(
        this.state.movement.velocityX ** 2 + this.state.movement.velocityY ** 2,
      );

      if (speed < threshold) {
        this._stopInertia();
        return;
      }

      // High-precision movement with sub-pixel accumulation
      const moveX = this.state.movement.velocityX * dt;
      const moveY = this.state.movement.velocityY * dt;

      this.state.movement.accumulatedX += moveX;
      this.state.movement.accumulatedY += moveY;

      const pixelMoveX = Math.round(this.state.movement.accumulatedX);
      const pixelMoveY = Math.round(this.state.movement.accumulatedY);

      if (pixelMoveX !== 0 || pixelMoveY !== 0) {
        this.state.movement.accumulatedX -= pixelMoveX;
        this.state.movement.accumulatedY -= pixelMoveY;

        const newPos = this._calculateConstraints(
          this.state.movement.offsetX + pixelMoveX,
          this.state.movement.offsetY + pixelMoveY,
          false,
        );

        // Boundary bounce for bounded mode
        if (this.options.mode === "bounded") {
          if (newPos.x !== this.state.movement.offsetX + pixelMoveX) {
            this.state.movement.velocityX *= -0.3;
          }
          if (newPos.y !== this.state.movement.offsetY + pixelMoveY) {
            this.state.movement.velocityY *= -0.3;
          }
        }

        this.state.movement.offsetX = newPos.x;
        this.state.movement.offsetY = newPos.y;
        this._updateTransform();
      }

      this.inertiaFrameId = requestAnimationFrame(step);
    };

    this.inertiaFrameId = requestAnimationFrame(step);
  }

  private _stopInertia(): void {
    if (this.inertiaFrameId) {
      cancelAnimationFrame(this.inertiaFrameId);
      this.inertiaFrameId = null;
    }
    this.state.movement.velocityX = 0;
    this.state.movement.velocityY = 0;
    this.state.movement.accumulatedX = 0;
    this.state.movement.accumulatedY = 0;
  }

  private _bounceBackToBounds(): void {
    if (this.options.mode === "free") return;

    const { offsetX: startX, offsetY: startY } = this.state.movement;
    const target = this._calculateConstraints(startX, startY, false);

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

  private _attachEventListeners(): void {
    const { passive } = { passive: false };

    this.eventTarget.addEventListener(
      "pointerdown",
      this.boundHandlers.pointerDown,
    );
    this.eventTarget.addEventListener(
      "pointermove",
      this.boundHandlers.pointerMove,
    );
    this.eventTarget.addEventListener(
      "pointerup",
      this.boundHandlers.pointerUp,
    );
    this.eventTarget.addEventListener(
      "pointercancel",
      this.boundHandlers.pointerCancel,
    );

    globalThis.addEventListener("blur", this.boundHandlers.windowBlur);
    globalThis.addEventListener(
      "visibilitychange",
      this.boundHandlers.windowBlur,
    );

    if (this.options.zoom.enabled) {
      this.eventTarget.addEventListener(
        "wheel",
        this.boundHandlers.wheel,
        passive,
      );
    }
  }

  // Event Handlers (optimized for performance)

  private _handlePointerDown(event: PointerEvent): void {
    // More precise target checking
    if (!this.eventTarget.contains(event.target as Node)) return;

    this.activePointers.set(event.pointerId, {
      x: event.clientX,
      y: event.clientY,
      timestamp: performance.now(),
    });

    if (this.activePointers.size === 1) {
      this._beginDrag(event.clientX, event.clientY, event.pointerId);
    } else if (this.activePointers.size === 2 && this.options.zoom.enabled) {
      this._beginPinch();
    }
  }

  private _handlePointerMove(event: PointerEvent): void {
    if (!this.activePointers.has(event.pointerId)) return;

    this.activePointers.set(event.pointerId, {
      x: event.clientX,
      y: event.clientY,
      timestamp: performance.now(),
    });

    if (
      this.state.isDragging && this.state.primaryPointerId === event.pointerId
    ) {
      this._processDragMovement(event.clientX, event.clientY);
    } else if (this.state.isPinching && this.activePointers.size === 2) {
      this._processPinchMovement();
    }
  }

  private _handlePointerUp(event: PointerEvent): void {
    this.activePointers.delete(event.pointerId);

    if (this.state.isPinching && this.activePointers.size < 2) {
      this._endPinch();
    } else if (
      this.state.isDragging && this.state.primaryPointerId === event.pointerId
    ) {
      this._endDrag(event.pointerId);
    }
  }

  private _handlePointerCancel(event: PointerEvent): void {
    this._handlePointerUp(event);
  }

  private _handleWindowBlur(): void {
    if (this.state.isDragging) this._endDrag(this.state.primaryPointerId);
    if (this.state.isPinching) this._endPinch();
    this.activePointers.clear();
  }

  private _handleWheel(event: WheelEvent): void {
    if (!this.options.zoom.enabled) return;

    event.preventDefault();

    const delta = -event.deltaY / 1000;
    const zoomFactor = 1 + delta;
    const newZoom = Math.max(
      this.options.zoom.min,
      Math.min(this.options.zoom.max, this.state.zoom * zoomFactor),
    );

    if (Math.abs(newZoom - this.state.zoom) < 0.001) return;

    this._performZoom(newZoom, event.clientX, event.clientY);
  }

  private _performZoom(
    newZoom: number,
    clientX: number,
    clientY: number,
    smooth = true,
  ): void {
    const targetRect = this.eventTarget.getBoundingClientRect();

    let focalX: number, focalY: number;
    if (this.options.zoom.zoomTo === "cursor") {
      focalX = clientX - targetRect.left;
      focalY = clientY - targetRect.top;
    } else {
      focalX = this.eventTarget.clientWidth * 0.5;
      focalY = this.eventTarget.clientHeight * 0.5;
    }

    const contentPointX = (focalX - this.eventTarget.clientWidth * 0.5 -
      this.state.movement.offsetX) / this.state.zoom;
    const contentPointY = (focalY - this.eventTarget.clientHeight * 0.5 -
      this.state.movement.offsetY) / this.state.zoom;

    const newOffsetX = focalX - this.eventTarget.clientWidth * 0.5 -
      contentPointX * newZoom;
    const newOffsetY = focalY - this.eventTarget.clientHeight * 0.5 -
      contentPointY * newZoom;

    if (smooth) {
      const smoothingFactor = this.options.zoom.smoothing;
      this.state.zoom += (newZoom - this.state.zoom) * smoothingFactor;
      this.state.movement.offsetX +=
        (newOffsetX - this.state.movement.offsetX) * smoothingFactor;
      this.state.movement.offsetY +=
        (newOffsetY - this.state.movement.offsetY) * smoothingFactor;
    } else {
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
    this.state.isDragging = false;

    const [pointer1, pointer2] = pointers;
    const initialCenter = this._getPointerCenter(pointer1, pointer2);

    const contentPointX =
      (initialCenter.x - this.eventTarget.clientWidth * 0.5 -
        this.state.movement.offsetX) / this.state.zoom;
    const contentPointY =
      (initialCenter.y - this.eventTarget.clientHeight * 0.5 -
        this.state.movement.offsetY) / this.state.zoom;

    this.pinchState = {
      initialDistance: this._getPointerDistance(pointer1, pointer2),
      initialZoom: this.state.zoom,
      initialCenter,
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

    // Enhanced velocity calculation with smoothing
    const dt = now - this.state.movement.lastTime;
    if (dt > 5 && dt < 100) {
      const actualDeltaX = this.state.movement.offsetX - prevX;
      const actualDeltaY = this.state.movement.offsetY - prevY;
      const newVelX = (actualDeltaX / dt) * 1000;
      const newVelY = (actualDeltaY / dt) * 1000;

      // Smooth velocity for better inertia
      const smoothing = 0.7;
      this.state.movement.velocityX =
        this.state.movement.velocityX * (1 - smoothing) + newVelX * smoothing;
      this.state.movement.velocityY =
        this.state.movement.velocityY * (1 - smoothing) + newVelY * smoothing;
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

    const currentDistance = this._getPointerDistance(pointer1, pointer2);
    const scale = currentDistance / this.pinchState.initialDistance;
    const newZoom = Math.max(
      this.options.zoom.min,
      Math.min(this.options.zoom.max, this.pinchState.initialZoom * scale),
    );

    const currentCenter = this._getPointerCenter(pointer1, pointer2);
    const newOffsetX = currentCenter.x - this.eventTarget.clientWidth / 2 -
      this.pinchState.contentPoint.x * newZoom;
    const newOffsetY = currentCenter.y - this.eventTarget.clientHeight / 2 -
      this.pinchState.contentPoint.y * newZoom;

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

    this.activePointers.forEach((_, pointerId) => {
      if (this.eventTarget.hasPointerCapture(pointerId)) {
        this.eventTarget.releasePointerCapture(pointerId);
      }
    });

    if (this.options.mode === "bounded") {
      this._bounceBackToBounds();
    }
  }

  /**
   * Enhanced destroy method with complete cleanup
   */
  public destroy(): void {
    // Stop all animations
    this._stopInertia();
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }

    // Remove event listeners
    this.eventTarget.removeEventListener(
      "pointerdown",
      this.boundHandlers.pointerDown,
    );
    this.eventTarget.removeEventListener(
      "pointermove",
      this.boundHandlers.pointerMove,
    );
    this.eventTarget.removeEventListener(
      "pointerup",
      this.boundHandlers.pointerUp,
    );
    this.eventTarget.removeEventListener(
      "pointercancel",
      this.boundHandlers.pointerCancel,
    );

    globalThis.removeEventListener("blur", this.boundHandlers.windowBlur);
    globalThis.removeEventListener(
      "visibilitychange",
      this.boundHandlers.windowBlur,
    );

    if (this.options.zoom.enabled) {
      this.eventTarget.removeEventListener("wheel", this.boundHandlers.wheel);
    }

    // Disconnect ResizeObserver
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }

    // Release pointer captures and clear maps
    this.activePointers.forEach((_, pointerId) => {
      if (this.eventTarget.hasPointerCapture(pointerId)) {
        this.eventTarget.releasePointerCapture(pointerId);
      }
    });
    this.activePointers.clear();

    // Clear state
    this.pinchState = null;

    // Reset transform
    this.drifterElement.style.transform = "";
  }

  // Public API methods for external control

  /**
   * Get current position and zoom state
   */
  public getState(): Readonly<{ x: number; y: number; zoom: number }> {
    return {
      x: this.state.movement.offsetX,
      y: this.state.movement.offsetY,
      zoom: this.state.zoom,
    };
  }

  /**
   * Set position and zoom programmatically
   */
  public setState(
    x?: number,
    y?: number,
    zoom?: number,
    animate: boolean = true,
  ): void {
    const targetX = x ?? this.state.movement.offsetX;
    const targetY = y ?? this.state.movement.offsetY;
    const targetZoom = zoom
      ? Math.max(
        this.options.zoom.min,
        Math.min(this.options.zoom.max, zoom),
      )
      : this.state.zoom;

    if (animate) {
      const startX = this.state.movement.offsetX;
      const startY = this.state.movement.offsetY;
      const startZoom = this.state.zoom;
      const startTime = performance.now();
      const duration = 300;

      const animateToTarget = (now: number) => {
        const t = Math.min(1, (now - startTime) / duration);
        const eased = t * (2 - t); // easeOutQuad

        this.state.movement.offsetX = startX + (targetX - startX) * eased;
        this.state.movement.offsetY = startY + (targetY - startY) * eased;
        this.state.zoom = startZoom + (targetZoom - startZoom) * eased;

        this._updateTransform();

        if (t < 1) requestAnimationFrame(animateToTarget);
      };

      requestAnimationFrame(animateToTarget);
    } else {
      this.state.movement.offsetX = targetX;
      this.state.movement.offsetY = targetY;
      this.state.zoom = targetZoom;
      this._updateTransform();
    }
  }

  /**
   * Reset to initial position and zoom
   */
  public reset(animate: boolean = true): void {
    this.setState(0, 0, this.options.zoom.initial, animate);
  }

  /**
   * Update options dynamically
   */
  public updateOptions(newOptions: Partial<Options>): void {
    Object.assign(this.options, newOptions);
    this._updateConstraintsCache();
  }
}
