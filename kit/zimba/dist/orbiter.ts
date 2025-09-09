// deno-lint-ignore-file
// @ts-nocheck - Generated code
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/orbiter.mts
var Orbiter = class {
  static {
    __name(this, "Orbiter");
  }
  orbiterElement;
  boundaryElement;
  options;
  state;
  rafId = null;
  resizeObserver = null;
  // Bound event handlers to prevent memory leaks
  handleMouseMove;
  handleMouseLeave;
  handleTouchMove;
  handleTouchEnd;
  // Flags for cleanup
  isDestroyed = false;
  isInitialized = false;
  constructor(orbiterElement, boundaryElement, options = {}) {
    this.orbiterElement = orbiterElement;
    this.boundaryElement = boundaryElement;
    this.options = this._applyDefaults(options);
    this.state = {
      current: { x: 0, y: 0 },
      target: { x: 0, y: 0 },
      constraints: { maxX: 0, maxY: 0, centerX: 0, centerY: 0 },
      isAnimating: false,
      isTracking: false,
      animationId: null,
      lastUpdateTime: 0
    };
    this.handleMouseMove = this._handleMouseMove.bind(this);
    this.handleMouseLeave = this._handleMouseLeave.bind(this);
    this.handleTouchMove = this._handleTouchMove.bind(this);
    this.handleTouchEnd = this._handleTouchEnd.bind(this);
    this._validateConfiguration();
    this._calculateConstraints();
    this._attachEventListeners();
    this._setupResizeObserver();
    this._updateTransform();
    this.isInitialized = true;
  }
  _applyDefaults(options) {
    return {
      factor: options.factor ?? 1,
      smoothing: {
        enabled: options.smoothing?.enabled ?? true,
        speed: options.smoothing?.speed ?? 0.1
      },
      touch: {
        enabled: options.touch?.enabled ?? true,
        useFirstTouch: options.touch?.useFirstTouch ?? true
      },
      constraintMode: options.constraintMode ?? "clamp",
      elastic: {
        tension: options.elastic?.tension ?? 625e-6,
        snapBackDuration: options.elastic?.snapBackDuration ?? 256
      },
      onLeave: options.onLeave ?? "reset",
      resetAnimation: {
        duration: options.resetAnimation?.duration ?? 256,
        easing: options.resetAnimation?.easing ?? "easeInOut"
      }
    };
  }
  _validateConfiguration() {
    if (!this.orbiterElement || !this.boundaryElement) {
      throw new Error("Orbiter requires valid orbiter and boundary elements");
    }
    if (this.options.smoothing.speed < 0 || this.options.smoothing.speed > 1) {
      throw new Error("Smoothing speed must be between 0 and 1");
    }
    if (this.options.elastic.tension < 0 || this.options.elastic.tension > 1) {
      throw new Error("Elastic tension must be between 0 and 1");
    }
  }
  /**
   * Calculate movement constraints with caching optimization
   */
  _calculateConstraints() {
    if (this.isDestroyed) return;
    const boundaryRect = this.boundaryElement.getBoundingClientRect();
    const orbiterRect = this.orbiterElement.getBoundingClientRect();
    const newConstraints = {
      maxX: Math.max(0, (boundaryRect.width - orbiterRect.width) / 2),
      maxY: Math.max(0, (boundaryRect.height - orbiterRect.height) / 2),
      centerX: boundaryRect.width / 2,
      centerY: boundaryRect.height / 2
    };
    const hasChanged = Math.abs(this.state.constraints.maxX - newConstraints.maxX) > 1 || Math.abs(this.state.constraints.maxY - newConstraints.maxY) > 1 || Math.abs(this.state.constraints.centerX - newConstraints.centerX) > 1 || Math.abs(this.state.constraints.centerY - newConstraints.centerY) > 1;
    if (hasChanged) {
      this.state.constraints = newConstraints;
    }
  }
  /**
   * Attach event listeners with proper options for performance
   */
  _attachEventListeners() {
    if (this.isDestroyed) return;
    this.boundaryElement.addEventListener("mousemove", this.handleMouseMove, {
      passive: true
    });
    this.boundaryElement.addEventListener("mouseleave", this.handleMouseLeave, {
      passive: true
    });
    if (this.options.touch.enabled) {
      this.boundaryElement.addEventListener("touchmove", this.handleTouchMove, {
        passive: true
      });
      this.boundaryElement.addEventListener("touchend", this.handleTouchEnd, {
        passive: true
      });
      this.boundaryElement.addEventListener(
        "touchcancel",
        this.handleTouchEnd,
        { passive: true }
      );
    }
  }
  /**
   * Remove all event listeners for cleanup
   */
  _removeEventListeners() {
    this.boundaryElement.removeEventListener("mousemove", this.handleMouseMove);
    this.boundaryElement.removeEventListener(
      "mouseleave",
      this.handleMouseLeave
    );
    if (this.options.touch.enabled) {
      this.boundaryElement.removeEventListener(
        "touchmove",
        this.handleTouchMove
      );
      this.boundaryElement.removeEventListener("touchend", this.handleTouchEnd);
      this.boundaryElement.removeEventListener(
        "touchcancel",
        this.handleTouchEnd
      );
    }
  }
  /**
   * Set up ResizeObserver with throttling
   */
  _setupResizeObserver() {
    if (!globalThis.ResizeObserver || this.isDestroyed) return;
    let resizeTimeout;
    this.resizeObserver = new ResizeObserver(() => {
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }
      resizeTimeout = setTimeout(() => {
        if (!this.isDestroyed) {
          this._calculateConstraints();
        }
        resizeTimeout = void 0;
      }, 16);
    });
    this.resizeObserver.observe(this.boundaryElement);
    this.resizeObserver.observe(this.orbiterElement);
  }
  /**
   * Calculate target position with micro-optimizations
   */
  _calculateTargetPosition(clientX, clientY) {
    const boundaryRect = this.boundaryElement.getBoundingClientRect();
    const relX = clientX - boundaryRect.left;
    const relY = clientY - boundaryRect.top;
    const rawX = (relX - this.state.constraints.centerX) * this.options.factor;
    const rawY = (relY - this.state.constraints.centerY) * this.options.factor;
    return this._applyConstraints(rawX, rawY);
  }
  /**
   * Apply movement constraints with optimized calculations
   */
  _applyConstraints(x, y) {
    const { maxX, maxY } = this.state.constraints;
    switch (this.options.constraintMode) {
      case "clamp":
        return {
          x: Math.max(-maxX, Math.min(x, maxX)),
          y: Math.max(-maxY, Math.min(y, maxY))
        };
      case "elastic": {
        const tension = this.options.elastic.tension;
        return {
          x: x > maxX ? maxX + (x - maxX) * tension : x < -maxX ? -maxX + (x + maxX) * tension : x,
          y: y > maxY ? maxY + (y - maxY) * tension : y < -maxY ? -maxY + (y + maxY) * tension : y
        };
      }
      case "none":
      default:
        return { x, y };
    }
  }
  /**
   * Update CSS transform properties with batched DOM writes
   */
  _updateTransform() {
    if (this.isDestroyed) return;
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }
    this.rafId = requestAnimationFrame(() => {
      if (this.isDestroyed) return;
      const { x, y } = this.state.current;
      this.orbiterElement.style.setProperty("--translate-x", `${x}px`);
      this.orbiterElement.style.setProperty("--translate-y", `${y}px`);
      this.orbiterElement.style.setProperty("--translate-z", "0px");
      this.rafId = null;
    });
  }
  /**
   * Start the animation loop with better cleanup
   */
  _startAnimationLoop() {
    if (this.state.animationId || this.isDestroyed) return;
    const animate = /* @__PURE__ */ __name((timestamp) => {
      if (!this.state.isAnimating || this.isDestroyed) {
        this.state.animationId = null;
        return;
      }
      this.state.lastUpdateTime = timestamp;
      if (this.options.smoothing.enabled) {
        const speed = this.options.smoothing.speed;
        const deltaX = this.state.target.x - this.state.current.x;
        const deltaY = this.state.target.y - this.state.current.y;
        this.state.current.x += deltaX * speed;
        this.state.current.y += deltaY * speed;
        const distanceSquared = deltaX * deltaX + deltaY * deltaY;
        if (distanceSquared < 0.01 && !this.state.isTracking) {
          this.state.current.x = this.state.target.x;
          this.state.current.y = this.state.target.y;
          this.state.isAnimating = false;
        }
      } else {
        this.state.current.x = this.state.target.x;
        this.state.current.y = this.state.target.y;
        if (!this.state.isTracking) {
          this.state.isAnimating = false;
        }
      }
      this._updateTransform();
      if (this.state.isAnimating && !this.isDestroyed) {
        this.state.animationId = requestAnimationFrame(animate);
      } else {
        this.state.animationId = null;
      }
    }, "animate");
    this.state.isAnimating = true;
    this.state.lastUpdateTime = performance.now();
    this.state.animationId = requestAnimationFrame(animate);
  }
  /**
   * Stop animation loop with proper cleanup
   */
  _stopAnimationLoop() {
    this.state.isAnimating = false;
    if (this.state.animationId) {
      cancelAnimationFrame(this.state.animationId);
      this.state.animationId = null;
    }
  }
  /**
   * Animate back to center position with easing and cleanup
   */
  _animateToCenter() {
    if (this.isDestroyed) return;
    this._stopAnimationLoop();
    const startTime = performance.now();
    const startX = this.state.current.x;
    const startY = this.state.current.y;
    const { duration, easing } = this.options.resetAnimation;
    const getEasingValue = /* @__PURE__ */ __name((t) => {
      switch (easing) {
        case "easeOut":
          return 1 - Math.pow(1 - t, 3);
        case "easeInOut":
          return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        case "linear":
          return t;
        default:
          return 1 - Math.pow(1 - t, 2);
      }
    }, "getEasingValue");
    let resetAnimationId;
    const animate = /* @__PURE__ */ __name((timestamp) => {
      if (this.isDestroyed) return;
      const elapsed = timestamp - startTime;
      const t = Math.min(elapsed / duration, 1);
      const eased = getEasingValue(t);
      this.state.current.x = startX * (1 - eased);
      this.state.current.y = startY * (1 - eased);
      this.state.target.x = this.state.current.x;
      this.state.target.y = this.state.current.y;
      this._updateTransform();
      if (t < 1 && !this.isDestroyed) {
        resetAnimationId = requestAnimationFrame(animate);
      } else {
        this.state.isAnimating = false;
      }
    }, "animate");
    this.state.isAnimating = true;
    resetAnimationId = requestAnimationFrame(animate);
  }
  // Event handlers with early returns for performance
  _handleMouseMove(event) {
    if (this.isDestroyed) return;
    this.state.isTracking = true;
    this.state.target = this._calculateTargetPosition(
      event.clientX,
      event.clientY
    );
    this._startAnimationLoop();
  }
  _handleMouseLeave() {
    if (this.isDestroyed) return;
    this.state.isTracking = false;
    switch (this.options.onLeave) {
      case "reset":
        this._animateToCenter();
        break;
      case "freeze":
        this._stopAnimationLoop();
        break;
      case "continue":
        if (!this.options.smoothing.enabled) {
          this._stopAnimationLoop();
        }
        break;
    }
  }
  _handleTouchMove(event) {
    if (this.isDestroyed || !this.options.touch.enabled || event.touches.length === 0) return;
    const touch = this.options.touch.useFirstTouch ? event.touches[0] : event.touches[event.touches.length - 1];
    this.state.isTracking = true;
    this.state.target = this._calculateTargetPosition(
      touch.clientX,
      touch.clientY
    );
    this._startAnimationLoop();
  }
  _handleTouchEnd() {
    if (this.isDestroyed) return;
    this._handleMouseLeave();
  }
  // Public methods with proper state checking
  /**
   * Update configuration options
   */
  configure(options) {
    if (this.isDestroyed) return;
    const oldTouchEnabled = this.options.touch.enabled;
    Object.assign(this.options, options);
    if (oldTouchEnabled !== this.options.touch.enabled) {
      this._removeEventListeners();
      this._attachEventListeners();
    }
    this._calculateConstraints();
  }
  /**
   * Get current position
   */
  getPosition() {
    return { ...this.state.current };
  }
  /**
   * Set position directly
   */
  setPosition(x, y) {
    if (this.isDestroyed) return;
    this.state.current.x = x;
    this.state.current.y = y;
    this.state.target.x = x;
    this.state.target.y = y;
    this._updateTransform();
  }
  /**
   * Reset to center position
   */
  reset() {
    if (this.isDestroyed) return;
    this._animateToCenter();
  }
  /**
   * Pause all animations and tracking
   */
  pause() {
    if (this.isDestroyed) return;
    this.state.isTracking = false;
    this._stopAnimationLoop();
  }
  /**
   * Resume animations and tracking
   */
  resume() {
    if (this.isDestroyed) return;
  }
  /**
   * Comprehensive cleanup to prevent memory leaks
   */
  destroy() {
    if (this.isDestroyed) return;
    this._stopAnimationLoop();
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
    this._removeEventListeners();
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }
    this.state.animationId = null;
    this.state.isAnimating = false;
    this.state.isTracking = false;
    this.isDestroyed = true;
  }
  /**
   * Check if instance is destroyed
   */
  // public isDestroyed(): boolean {
  //   return this.isDestroyed;
  // }
};
export {
  Orbiter
};
