/**
 * Orbiter - Makes elements smoothly follow cursor/touch input within boundaries
 * Optimized for performance with RAF throttling and efficient calculations
 */

interface Options {
  /** Movement sensitivity multiplier (higher = more movement) */
  factor: number;

  /** Smoothing configuration */
  smoothing: {
    /** Enable smooth interpolation to target position */
    enabled: boolean;
    /** Interpolation factor (0-1, higher = faster movement) */
    speed: number;
  };

  /** Touch interaction support */
  touch: {
    /** Enable touch tracking */
    enabled: boolean;
    /** Use first touch point for multi-touch scenarios */
    useFirstTouch: boolean;
  };

  /** Boundary constraint mode */
  constraintMode: "clamp" | "elastic" | "none";

  /** Elastic constraint configuration (when constraintMode is "elastic") */
  elastic: {
    /** Resistance factor for out-of-bounds movement */
    tension: number;
    /** Snap back animation duration in ms */
    snapBackDuration: number;
  };

  /** Reset behavior when cursor leaves boundary */
  onLeave: "reset" | "freeze" | "continue";

  /** Reset animation configuration */
  resetAnimation: {
    /** Animation duration in ms */
    duration: number;
    /** Easing function */
    easing: "ease" | "easeOut" | "easeInOut" | "linear";
  };
}

interface OrbiterState {
  /** Current position */
  current: { x: number; y: number };

  /** Target position (for smooth movement) */
  target: { x: number; y: number };

  /** Cached boundary calculations */
  constraints: {
    maxX: number;
    maxY: number;
    centerX: number;
    centerY: number;
  };

  /** Animation and interaction state */
  isAnimating: boolean;
  isTracking: boolean;
  animationId: number | null;
  lastUpdateTime: number;
}

export class Orbiter {
  private orbiterElement: HTMLElement;
  private boundaryElement: HTMLElement;
  private options: Options;
  private state: OrbiterState;
  private rafId: number | null = null;
  private resizeObserver: ResizeObserver | null = null;

  // Bound event handlers to prevent memory leaks
  private handleMouseMove: (event: MouseEvent) => void;
  private handleMouseLeave: () => void;
  private handleTouchMove: (event: TouchEvent) => void;
  private handleTouchEnd: () => void;

  // Flags for cleanup
  private isDestroyed: boolean = false;
  private isInitialized: boolean = false;

  constructor(
    orbiterElement: HTMLElement,
    boundaryElement: HTMLElement,
    options: Partial<Options> = {},
  ) {
    this.orbiterElement = orbiterElement;
    this.boundaryElement = boundaryElement;
    this.options = this._applyDefaults(options);

    // Initialize state
    this.state = {
      current: { x: 0, y: 0 },
      target: { x: 0, y: 0 },
      constraints: { maxX: 0, maxY: 0, centerX: 0, centerY: 0 },
      isAnimating: false,
      isTracking: false,
      animationId: null,
      lastUpdateTime: 0,
    };

    // Bind event handlers once to prevent memory leaks
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

  private _applyDefaults(options: Partial<Options>): Options {
    return {
      factor: options.factor ?? 1,
      smoothing: {
        enabled: options.smoothing?.enabled ?? true,
        speed: options.smoothing?.speed ?? 0.10,
      },
      touch: {
        enabled: options.touch?.enabled ?? true,
        useFirstTouch: options.touch?.useFirstTouch ?? true,
      },
      constraintMode: options.constraintMode ?? "clamp",
      elastic: {
        tension: options.elastic?.tension ?? 0.000625,
        snapBackDuration: options.elastic?.snapBackDuration ?? 256,
      },
      onLeave: options.onLeave ?? "reset",
      resetAnimation: {
        duration: options.resetAnimation?.duration ?? 256,
        easing: options.resetAnimation?.easing ?? "easeInOut",
      },
    };
  }

  private _validateConfiguration(): void {
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
  private _calculateConstraints(): void {
    if (this.isDestroyed) return;

    const boundaryRect = this.boundaryElement.getBoundingClientRect();
    const orbiterRect = this.orbiterElement.getBoundingClientRect();

    // Cache constraints to avoid repeated calculations
    const newConstraints = {
      maxX: Math.max(0, (boundaryRect.width - orbiterRect.width) / 2),
      maxY: Math.max(0, (boundaryRect.height - orbiterRect.height) / 2),
      centerX: boundaryRect.width / 2,
      centerY: boundaryRect.height / 2,
    };

    // Only update if changed significantly (avoid micro-updates)
    const hasChanged =
      Math.abs(this.state.constraints.maxX - newConstraints.maxX) > 1 ||
      Math.abs(this.state.constraints.maxY - newConstraints.maxY) > 1 ||
      Math.abs(this.state.constraints.centerX - newConstraints.centerX) > 1 ||
      Math.abs(this.state.constraints.centerY - newConstraints.centerY) > 1;

    if (hasChanged) {
      this.state.constraints = newConstraints;
    }
  }

  /**
   * Attach event listeners with proper options for performance
   */
  private _attachEventListeners(): void {
    if (this.isDestroyed) return;

    // Mouse events with passive option where applicable
    this.boundaryElement.addEventListener("mousemove", this.handleMouseMove, {
      passive: true,
    });
    this.boundaryElement.addEventListener("mouseleave", this.handleMouseLeave, {
      passive: true,
    });

    // Touch events
    if (this.options.touch.enabled) {
      this.boundaryElement.addEventListener("touchmove", this.handleTouchMove, {
        passive: true,
      });
      this.boundaryElement.addEventListener("touchend", this.handleTouchEnd, {
        passive: true,
      });
      this.boundaryElement.addEventListener(
        "touchcancel",
        this.handleTouchEnd,
        { passive: true },
      );
    }
  }

  /**
   * Remove all event listeners for cleanup
   */
  private _removeEventListeners(): void {
    this.boundaryElement.removeEventListener("mousemove", this.handleMouseMove);
    this.boundaryElement.removeEventListener(
      "mouseleave",
      this.handleMouseLeave,
    );

    if (this.options.touch.enabled) {
      this.boundaryElement.removeEventListener(
        "touchmove",
        this.handleTouchMove,
      );
      this.boundaryElement.removeEventListener("touchend", this.handleTouchEnd);
      this.boundaryElement.removeEventListener(
        "touchcancel",
        this.handleTouchEnd,
      );
    }
  }

  /**
   * Set up ResizeObserver with throttling
   */
  private _setupResizeObserver(): void {
    if (!globalThis.ResizeObserver || this.isDestroyed) return;

    let resizeTimeout: number | undefined;

    this.resizeObserver = new ResizeObserver(() => {
      // Throttle resize calculations to avoid excessive updates
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }

      resizeTimeout = setTimeout(() => {
        if (!this.isDestroyed) {
          this._calculateConstraints();
        }
        resizeTimeout = undefined;
      }, 16); // ~60fps throttling
    });

    this.resizeObserver.observe(this.boundaryElement);
    this.resizeObserver.observe(this.orbiterElement);
  }

  /**
   * Calculate target position with micro-optimizations
   */
  private _calculateTargetPosition(
    clientX: number,
    clientY: number,
  ): { x: number; y: number } {
    const boundaryRect = this.boundaryElement.getBoundingClientRect();

    // Cursor position relative to boundary
    const relX = clientX - boundaryRect.left;
    const relY = clientY - boundaryRect.top;

    // Calculate raw translation from center
    const rawX = (relX - this.state.constraints.centerX) * this.options.factor;
    const rawY = (relY - this.state.constraints.centerY) * this.options.factor;

    // Apply constraints based on mode
    return this._applyConstraints(rawX, rawY);
  }

  /**
   * Apply movement constraints with optimized calculations
   */
  private _applyConstraints(x: number, y: number): { x: number; y: number } {
    const { maxX, maxY } = this.state.constraints;

    switch (this.options.constraintMode) {
      case "clamp":
        return {
          x: Math.max(-maxX, Math.min(x, maxX)),
          y: Math.max(-maxY, Math.min(y, maxY)),
        };

      case "elastic": {
        const tension = this.options.elastic.tension;
        return {
          x: x > maxX
            ? maxX + (x - maxX) * tension
            : x < -maxX
            ? -maxX + (x + maxX) * tension
            : x,
          y: y > maxY
            ? maxY + (y - maxY) * tension
            : y < -maxY
            ? -maxY + (y + maxY) * tension
            : y,
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
  private _updateTransform(): void {
    if (this.isDestroyed) return;

    // Cancel any pending transform update
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }

    this.rafId = requestAnimationFrame(() => {
      if (this.isDestroyed) return;

      // Batch DOM writes for better performance
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
  private _startAnimationLoop(): void {
    if (this.state.animationId || this.isDestroyed) return;

    const animate = (timestamp: number) => {
      if (!this.state.isAnimating || this.isDestroyed) {
        this.state.animationId = null;
        return;
      }

      this.state.lastUpdateTime = timestamp;

      if (this.options.smoothing.enabled) {
        // Smooth interpolation to target
        const speed = this.options.smoothing.speed;
        const deltaX = this.state.target.x - this.state.current.x;
        const deltaY = this.state.target.y - this.state.current.y;

        this.state.current.x += deltaX * speed;
        this.state.current.y += deltaY * speed;

        // Stop animation when close enough to target (optimized distance check)
        const distanceSquared = deltaX * deltaX + deltaY * deltaY;

        if (distanceSquared < 0.01 && !this.state.isTracking) { // 0.1^2 = 0.01
          this.state.current.x = this.state.target.x;
          this.state.current.y = this.state.target.y;
          this.state.isAnimating = false;
        }
      } else {
        // Direct movement
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
    };

    this.state.isAnimating = true;
    this.state.lastUpdateTime = performance.now();
    this.state.animationId = requestAnimationFrame(animate);
  }

  /**
   * Stop animation loop with proper cleanup
   */
  private _stopAnimationLoop(): void {
    this.state.isAnimating = false;

    if (this.state.animationId) {
      cancelAnimationFrame(this.state.animationId);
      this.state.animationId = null;
    }
  }

  /**
   * Animate back to center position with easing and cleanup
   */
  private _animateToCenter(): void {
    if (this.isDestroyed) return;

    // Stop any existing animation
    this._stopAnimationLoop();

    const startTime = performance.now();
    const startX = this.state.current.x;
    const startY = this.state.current.y;
    const { duration, easing } = this.options.resetAnimation;

    const getEasingValue = (t: number): number => {
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
    };

    let resetAnimationId: number;

    const animate = (timestamp: number) => {
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
    };

    this.state.isAnimating = true;
    resetAnimationId = requestAnimationFrame(animate);
  }

  // Event handlers with early returns for performance
  private _handleMouseMove(event: MouseEvent): void {
    if (this.isDestroyed) return;

    this.state.isTracking = true;
    this.state.target = this._calculateTargetPosition(
      event.clientX,
      event.clientY,
    );
    this._startAnimationLoop();
  }

  private _handleMouseLeave(): void {
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
        // Let smoothing continue to target if enabled
        if (!this.options.smoothing.enabled) {
          this._stopAnimationLoop();
        }
        break;
    }
  }

  private _handleTouchMove(event: TouchEvent): void {
    if (
      this.isDestroyed || !this.options.touch.enabled ||
      event.touches.length === 0
    ) return;

    const touch = this.options.touch.useFirstTouch
      ? event.touches[0]
      : event.touches[event.touches.length - 1];

    this.state.isTracking = true;
    this.state.target = this._calculateTargetPosition(
      touch.clientX,
      touch.clientY,
    );
    this._startAnimationLoop();
  }

  private _handleTouchEnd(): void {
    if (this.isDestroyed) return;
    this._handleMouseLeave();
  }

  // Public methods with proper state checking

  /**
   * Update configuration options
   */
  public configure(options: Partial<Options>): void {
    if (this.isDestroyed) return;

    const oldTouchEnabled = this.options.touch.enabled;
    Object.assign(this.options, options);

    // Re-attach event listeners if touch setting changed
    if (oldTouchEnabled !== this.options.touch.enabled) {
      this._removeEventListeners();
      this._attachEventListeners();
    }

    this._calculateConstraints();
  }

  /**
   * Get current position
   */
  public getPosition(): { x: number; y: number } {
    return { ...this.state.current };
  }

  /**
   * Set position directly
   */
  public setPosition(x: number, y: number): void {
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
  public reset(): void {
    if (this.isDestroyed) return;
    this._animateToCenter();
  }

  /**
   * Pause all animations and tracking
   */
  public pause(): void {
    if (this.isDestroyed) return;

    this.state.isTracking = false;
    this._stopAnimationLoop();
  }

  /**
   * Resume animations and tracking
   */
  public resume(): void {
    if (this.isDestroyed) return;
    // Tracking will resume on next mouse/touch event
  }

  /**
   * Comprehensive cleanup to prevent memory leaks
   */
  public destroy(): void {
    if (this.isDestroyed) return;

    // Stop all animations immediately
    this._stopAnimationLoop();

    // Cancel any pending transform updates
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }

    // Remove all event listeners
    this._removeEventListeners();

    // Disconnect ResizeObserver
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }

    // Clear all state
    this.state.animationId = null;
    this.state.isAnimating = false;
    this.state.isTracking = false;

    // Mark as destroyed
    this.isDestroyed = true;
  }

  /**
   * Check if instance is destroyed
   */
  // public isDestroyed(): boolean {
  //   return this.isDestroyed;
  // }
}
