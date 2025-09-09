// deno-lint-ignore-file
// @ts-nocheck - Generated code
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/drifter.mts
var Drifter = class {
  static {
    __name(this, "Drifter");
  }
  drifterElement;
  boundaryElement;
  options;
  state;
  eventTarget;
  activePointers = /* @__PURE__ */ new Map();
  pinchState = null;
  inertiaFrameId = null;
  animationFrameId = null;
  /**
   * Creates a new Drifter instance
   * @param drifterElement - The element to make drifter
   * @param boundaryElement - Container element (required for bounded mode, ignored for free mode)
   * @param options - Configuration options
   */
  constructor(drifterElement, boundaryElement, options = {}) {
    this.drifterElement = drifterElement;
    this.boundaryElement = boundaryElement;
    this.options = this._applyDefaults(options);
    this._validateConfiguration();
    this.eventTarget = this._resolveEventTarget();
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
        lastTime: 0
      },
      zoom: this.options.zoom.initial
    };
    this._bindEventHandlers();
    this._attachEventListeners();
    this._updateTransform();
  }
  /**
   * Apply default options and merge with user provided options
   * @private
   */
  _applyDefaults(options) {
    return {
      dragSpeed: options.dragSpeed ?? 1.25,
      inertia: {
        damping: options.inertia?.damping ?? 0.92,
        threshold: options.inertia?.threshold ?? 1
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
        zoomTo: options.zoom?.zoomTo ?? "cursor"
      }
    };
  }
  /**
   * Validate configuration and throw errors for invalid setups
   * @private
   */
  _validateConfiguration() {
    if (!this.drifterElement) {
      throw new Error(
        `Drifter requires a valid HTMLElement, but received: ${this.drifterElement === null ? "null" : typeof this.drifterElement}`
      );
    }
    if (this.options.mode === "bounded" && !this.boundaryElement) {
      throw new Error(
        "Bounded mode requires a valid boundary element, but none was provided"
      );
    }
    if (this.options.mode === "free" && this.options.dragTarget === "self") {
      this.boundaryElement = null;
    }
    console.debug("eventTarget", this.eventTarget);
  }
  /**
   * Resolve the event target element based on configuration
   * @private
   */
  _resolveEventTarget() {
    return this.options.dragTarget === "self" ? this.drifterElement : this.boundaryElement;
  }
  /**
   * Bind all event handlers to maintain proper context
   * @private
   */
  _bindEventHandlers() {
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
  _attachEventListeners() {
    this.eventTarget.addEventListener("pointerdown", this._handlePointerDown);
    this.eventTarget.addEventListener("pointermove", this._handlePointerMove);
    this.eventTarget.addEventListener("pointerup", this._handlePointerUp);
    this.eventTarget.addEventListener(
      "pointercancel",
      this._handlePointerCancel
    );
    this.eventTarget.addEventListener("pointerleave", this._handlePointerLeave);
    globalThis.addEventListener("blur", this._handleWindowBlur);
    globalThis.addEventListener("visibilitychange", this._handleWindowBlur);
    if (this.options.zoom.enabled) {
      this.eventTarget.addEventListener("wheel", this._handleWheel, {
        passive: false
      });
    }
  }
  /**
   * Update CSS custom properties for transform
   * Uses RAF for smooth rendering
   * @private
   */
  _updateTransform() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    this.animationFrameId = requestAnimationFrame(() => {
      this.drifterElement.style.setProperty(
        "--translate-x",
        `${this.state.movement.offsetX}px`
      );
      this.drifterElement.style.setProperty(
        "--translate-y",
        `${this.state.movement.offsetY}px`
      );
      this.drifterElement.style.setProperty("--translate-z", "0px");
      this.drifterElement.style.setProperty("--scale", `${this.state.zoom}`);
      this.animationFrameId = null;
    });
  }
  _getPointerDistance(pointer1, pointer2) {
    const dx = pointer1.x - pointer2.x;
    const dy = pointer1.y - pointer2.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
  _getPointerCenter(pointer1, pointer2) {
    let boundaryRect;
    if (this.boundaryElement) {
      boundaryRect = this.boundaryElement.getBoundingClientRect();
    } else {
      boundaryRect = this.drifterElement.getBoundingClientRect();
    }
    return {
      x: (pointer1.x + pointer2.x) / 2 - boundaryRect.left,
      y: (pointer1.y + pointer2.y) / 2 - boundaryRect.top
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
  _calculateConstraints(x, y, elastic = false) {
    if (this.options.mode === "free" || !this.boundaryElement) {
      return { x, y };
    }
    const targetWidth = this.drifterElement.clientWidth * this.state.zoom;
    const targetHeight = this.drifterElement.clientHeight * this.state.zoom;
    const boundaryStyles = getComputedStyle(this.boundaryElement);
    const padding = {
      left: parseFloat(boundaryStyles.paddingLeft),
      right: parseFloat(boundaryStyles.paddingRight),
      top: parseFloat(boundaryStyles.paddingTop),
      bottom: parseFloat(boundaryStyles.paddingBottom)
    };
    const boundaryWidth = this.boundaryElement.clientWidth - padding.left - padding.right;
    const boundaryHeight = this.boundaryElement.clientHeight - padding.top - padding.bottom;
    const halfTargetW = targetWidth / 2;
    const halfTargetH = targetHeight / 2;
    const halfBoundaryW = boundaryWidth / 2;
    const halfBoundaryH = boundaryHeight / 2;
    let minX, maxX, minY, maxY;
    if (this.options.boundedTo === "center") {
      maxX = (targetWidth - boundaryWidth) / 2 + halfBoundaryW;
      minX = -maxX;
      maxY = (targetHeight - boundaryHeight) / 2 + halfBoundaryH;
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
    this.state.constraints = { minX, maxX, minY, maxY };
    const tension = 0.35;
    function applyElastic(val, min, max) {
      if (val < min) return elastic ? min + (val - min) * tension : min;
      if (val > max) return elastic ? max + (val - max) * tension : max;
      return val;
    }
    __name(applyElastic, "applyElastic");
    return {
      x: applyElastic(x, minX, maxX),
      y: applyElastic(y, minY, maxY)
    };
  }
  /**
   * Start inertia animation after drag ends
   * @private
   */
  _startInertia() {
    if (this.state.isDragging || this.state.isPinching) return;
    const { damping, threshold } = this.options.inertia;
    const maxInitialVelocity = 2e3;
    this.state.movement.velocityX = Math.max(
      -maxInitialVelocity,
      Math.min(maxInitialVelocity, this.state.movement.velocityX)
    );
    this.state.movement.velocityY = Math.max(
      -maxInitialVelocity,
      Math.min(maxInitialVelocity, this.state.movement.velocityY)
    );
    let lastTime = performance.now();
    const step = /* @__PURE__ */ __name((now) => {
      if (!this.inertiaFrameId) return;
      const dt = (now - lastTime) / 1e3;
      lastTime = now;
      this.state.movement.velocityX *= Math.pow(damping, dt * 60);
      this.state.movement.velocityY *= Math.pow(damping, dt * 60);
      const speed = Math.sqrt(
        this.state.movement.velocityX ** 2 + this.state.movement.velocityY ** 2
      );
      if (speed < threshold) {
        this._stopInertia();
        return;
      }
      const moveX = this.state.movement.velocityX * dt;
      const moveY = this.state.movement.velocityY * dt;
      const newPos = this._calculateConstraints(
        this.state.movement.offsetX + moveX,
        this.state.movement.offsetY + moveY,
        false
      );
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
    }, "step");
    this.inertiaFrameId = requestAnimationFrame(step);
  }
  /**
   * Stop inertia animation and reset velocity
   * @private
   */
  _stopInertia() {
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
  _bounceBackToBounds() {
    if (this.options.mode === "free") return;
    const { offsetX: startX, offsetY: startY } = this.state.movement;
    const target = this._calculateConstraints(startX, startY, false);
    if (Math.abs(target.x - startX) < 1 && Math.abs(target.y - startY) < 1) {
      return;
    }
    const startTime = performance.now();
    const duration = 250;
    const animate = /* @__PURE__ */ __name((now) => {
      const t = Math.min(1, (now - startTime) / duration);
      const eased = t * (2 - t);
      this.state.movement.offsetX = startX + (target.x - startX) * eased;
      this.state.movement.offsetY = startY + (target.y - startY) * eased;
      this._updateTransform();
      if (t < 1) requestAnimationFrame(animate);
    }, "animate");
    requestAnimationFrame(animate);
  }
  // Event handler implementations
  _handlePointerDown(event) {
    if (!(event.target instanceof HTMLElement)) return;
    if (![this.boundaryElement, this.drifterElement].includes(event.target)) {
      return;
    }
    this.activePointers.set(event.pointerId, {
      x: event.clientX,
      y: event.clientY,
      timestamp: Date.now()
    });
    if (this.activePointers.size === 1) {
      this._beginDrag(event.clientX, event.clientY, event.pointerId);
    } else if (this.activePointers.size === 2 && this.options.zoom.enabled) {
      this._beginPinch();
    }
  }
  _handlePointerMove(event) {
    if (this.activePointers.has(event.pointerId)) {
      this.activePointers.set(event.pointerId, {
        x: event.clientX,
        y: event.clientY,
        timestamp: Date.now()
      });
    }
    if (this.state.isDragging && this.state.primaryPointerId === event.pointerId) {
      this._processDragMovement(event.clientX, event.clientY);
    }
    if (this.state.isPinching && this.activePointers.size === 2) {
      this._processPinchMovement();
    }
  }
  _handlePointerUp(event) {
    this.activePointers.delete(event.pointerId);
    if (this.state.isPinching && this.activePointers.size < 2) {
      this._endPinch();
    } else if (this.state.isDragging) {
      this._endDrag(event.pointerId);
    }
  }
  _handlePointerCancel(event) {
    this.activePointers.delete(event.pointerId);
    if (this.state.isPinching) this._endPinch();
    if (this.state.isDragging) this._endDrag(event.pointerId);
  }
  _handlePointerLeave(event) {
    this.activePointers.delete(event.pointerId);
    if (this.state.isDragging && this.state.primaryPointerId === event.pointerId) {
      this._endDrag(event.pointerId);
    }
    if (this.state.isPinching && this.activePointers.size < 2) {
      this._endPinch();
    }
  }
  _handleWindowBlur() {
    if (this.state.isDragging) this._endDrag(this.state.primaryPointerId);
    if (this.state.isPinching) this._endPinch();
    this.activePointers.clear();
  }
  /**
   * Handle wheel events for zoom functionality
   * Maintains focal point under cursor/center during zoom
   * @private
   */
  _handleWheel(event) {
    if (!this.options.zoom.enabled) return;
    event.preventDefault();
    const delta = -event.deltaY / 1e3;
    const zoomFactor = 1 + delta;
    const newZoom = Math.max(
      this.options.zoom.min,
      Math.min(this.options.zoom.max, this.state.zoom * zoomFactor)
    );
    if (Math.abs(newZoom - this.state.zoom) < 1e-3) return;
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
  _performZoom(newZoom, clientX, clientY, smooth = true) {
    const targetRect = this.eventTarget.getBoundingClientRect();
    let focalX, focalY;
    if (this.options.zoom.zoomTo === "cursor") {
      focalX = clientX - targetRect.left;
      focalY = clientY - targetRect.top;
    } else {
      focalX = this.eventTarget.clientWidth / 2;
      focalY = this.eventTarget.clientHeight / 2;
    }
    const contentPointX = (focalX - this.eventTarget.clientWidth / 2 - this.state.movement.offsetX) / this.state.zoom;
    const contentPointY = (focalY - this.eventTarget.clientHeight / 2 - this.state.movement.offsetY) / this.state.zoom;
    const newOffsetX = focalX - this.eventTarget.clientWidth / 2 - contentPointX * newZoom;
    const newOffsetY = focalY - this.eventTarget.clientHeight / 2 - contentPointY * newZoom;
    if (smooth) {
      const smoothingFactor = this.options.zoom.smoothing;
      this.state.zoom += (newZoom - this.state.zoom) * smoothingFactor;
      this.state.movement.offsetX += (newOffsetX - this.state.movement.offsetX) * smoothingFactor;
      this.state.movement.offsetY += (newOffsetY - this.state.movement.offsetY) * smoothingFactor;
    } else {
      this.state.zoom = newZoom;
      this.state.movement.offsetX = newOffsetX;
      this.state.movement.offsetY = newOffsetY;
    }
    this._updateTransform();
  }
  _beginDrag(x, y, pointerId) {
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
  _beginPinch() {
    if (!this.options.zoom.enabled) return;
    const pointers = Array.from(this.activePointers.values());
    if (pointers.length !== 2) return;
    this._stopInertia();
    this.state.isPinching = true;
    this.state.isDragging = false;
    const [pointer1, pointer2] = pointers;
    const initialCenter = this._getPointerCenter(pointer1, pointer2);
    const contentPointX = (initialCenter.x - this.eventTarget.clientWidth / 2 - this.state.movement.offsetX) / this.state.zoom;
    const contentPointY = (initialCenter.y - this.eventTarget.clientHeight / 2 - this.state.movement.offsetY) / this.state.zoom;
    this.pinchState = {
      initialDistance: this._getPointerDistance(pointer1, pointer2),
      initialZoom: this.state.zoom,
      initialCenter,
      initialOffset: {
        x: this.state.movement.offsetX,
        y: this.state.movement.offsetY
      },
      contentPoint: { x: contentPointX, y: contentPointY }
    };
    this.activePointers.forEach((_, pointerId) => {
      this.eventTarget.setPointerCapture(pointerId);
    });
  }
  _processDragMovement(clientX, clientY) {
    const now = performance.now();
    const deltaX = (clientX - this.state.movement.startX) * this.options.dragSpeed;
    const deltaY = (clientY - this.state.movement.startY) * this.options.dragSpeed;
    const prevX = this.state.movement.offsetX;
    const prevY = this.state.movement.offsetY;
    const newPos = this._calculateConstraints(
      this.state.movement.offsetX + deltaX,
      this.state.movement.offsetY + deltaY,
      true
    );
    this.state.movement.offsetX = newPos.x;
    this.state.movement.offsetY = newPos.y;
    const dt = now - this.state.movement.lastTime;
    if (dt > 5 && dt < 100) {
      const actualDeltaX = this.state.movement.offsetX - prevX;
      const actualDeltaY = this.state.movement.offsetY - prevY;
      this.state.movement.velocityX = actualDeltaX / dt * 1e3;
      this.state.movement.velocityY = actualDeltaY / dt * 1e3;
    }
    this.state.movement.startX = clientX;
    this.state.movement.startY = clientY;
    this.state.movement.lastTime = now;
    this._updateTransform();
  }
  _processPinchMovement() {
    if (!this.pinchState || this.activePointers.size !== 2) return;
    const pointers = Array.from(this.activePointers.values());
    const [pointer1, pointer2] = pointers;
    const currentDistance = this._getPointerDistance(pointer1, pointer2);
    const scale = currentDistance / this.pinchState.initialDistance;
    const newZoom = Math.max(
      this.options.zoom.min,
      Math.min(this.options.zoom.max, this.pinchState.initialZoom * scale)
    );
    const currentCenter = this._getPointerCenter(pointer1, pointer2);
    const newOffsetX = currentCenter.x - this.eventTarget.clientWidth / 2 - this.pinchState.contentPoint.x * newZoom;
    const newOffsetY = currentCenter.y - this.eventTarget.clientHeight / 2 - this.pinchState.contentPoint.y * newZoom;
    this.state.zoom = newZoom;
    this.state.movement.offsetX = newOffsetX;
    this.state.movement.offsetY = newOffsetY;
    this._updateTransform();
  }
  _endDrag(pointerId) {
    if (this.state.primaryPointerId !== pointerId) return;
    this.state.isDragging = false;
    this.state.primaryPointerId = -1;
    const speed = Math.sqrt(
      this.state.movement.velocityX ** 2 + this.state.movement.velocityY ** 2
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
  _endPinch() {
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
  destroy() {
    this.eventTarget.removeEventListener(
      "pointerdown",
      this._handlePointerDown
    );
    this.eventTarget.removeEventListener(
      "pointermove",
      this._handlePointerMove
    );
    this.eventTarget.removeEventListener("pointerup", this._handlePointerUp);
    this.eventTarget.removeEventListener(
      "pointercancel",
      this._handlePointerCancel
    );
    this.eventTarget.removeEventListener(
      "pointerleave",
      this._handlePointerLeave
    );
    globalThis.removeEventListener("blur", this._handleWindowBlur);
    globalThis.removeEventListener("visibilitychange", this._handleWindowBlur);
    this._stopInertia();
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    this.activePointers.clear();
  }
};
export {
  Drifter
};
