/**
 * Orbiter - Makes elements smoothly follow cursor/touch input within boundaries
 * Optimized for performance with RAF throttling and efficient calculations
 */

interface OrbiterOptions {
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
  private options: OrbiterOptions;
  private state: OrbiterState;
  private rafId: number | null = null;
  private resizeObserver: ResizeObserver | null = null;

  /**
   * Creates a new Orbiter instance
   * @param orbiterElement - The element that will follow the cursor
   * @param boundaryElement - The container element that defines the tracking area
   * @param options - Configuration options
   */
  constructor(
    orbiterElement: HTMLElement,
    boundaryElement: HTMLElement,
    options: Partial<OrbiterOptions> = {},
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

    this._validateConfiguration();
    this._calculateConstraints();
    this._bindEventHandlers();
    this._attachEventListeners();
    this._setupResizeObserver();
    this._updateTransform();
  }

  /**
   * Apply default options and merge with user provided options
   * @private
   */
  private _applyDefaults(options: Partial<OrbiterOptions>): OrbiterOptions {
    return {
      factor: options.factor ?? 1,
      smoothing: {
        enabled: options.smoothing?.enabled ?? true,
        speed: options.smoothing?.speed ?? 0.12,
      },
      touch: {
        enabled: options.touch?.enabled ?? true,
        useFirstTouch: options.touch?.useFirstTouch ?? true,
      },
      constraintMode: options.constraintMode ?? "clamp",
      elastic: {
        tension: options.elastic?.tension ?? 0.2,
        snapBackDuration: options.elastic?.snapBackDuration ?? 300,
      },
      onLeave: options.onLeave ?? "reset",
      resetAnimation: {
        duration: options.resetAnimation?.duration ?? 400,
        easing: options.resetAnimation?.easing ?? "easeOut",
      },
    };
  }

  /**
   * Validate configuration and throw errors for invalid setups
   * @private
   */
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
   * Calculate movement constraints based on current element dimensions
   * @private
   */
  private _calculateConstraints(): void {
    const boundaryRect = this.boundaryElement.getBoundingClientRect();
    const orbiterRect = this.orbiterElement.getBoundingClientRect();

    this.state.constraints = {
      maxX: Math.max(0, (boundaryRect.width - orbiterRect.width) / 2),
      maxY: Math.max(0, (boundaryRect.height - orbiterRect.height) / 2),
      centerX: boundaryRect.width / 2,
      centerY: boundaryRect.height / 2,
    };
  }

  /**
   * Bind all event handlers to maintain proper context
   * @private
   */
  private _bindEventHandlers(): void {
    this._handleMouseMove = this._handleMouseMove.bind(this);
    this._handleMouseLeave = this._handleMouseLeave.bind(this);
    this._handleTouchMove = this._handleTouchMove.bind(this);
    this._handleTouchEnd = this._handleTouchEnd.bind(this);
  }

  /**
   * Attach event listeners to boundary element
   * @private
   */
  private _attachEventListeners(): void {
    // Mouse events
    this.boundaryElement.addEventListener("mousemove", this._handleMouseMove);
    this.boundaryElement.addEventListener("mouseleave", this._handleMouseLeave);

    // Touch events
    if (this.options.touch.enabled) {
      this.boundaryElement.addEventListener(
        "touchmove",
        this._handleTouchMove,
        {
          passive: true,
        },
      );
      this.boundaryElement.addEventListener("touchend", this._handleTouchEnd);
      this.boundaryElement.addEventListener(
        "touchcancel",
        this._handleTouchEnd,
      );
    }
  }

  /**
   * Set up ResizeObserver to recalculate constraints when elements resize
   * @private
   */
  private _setupResizeObserver(): void {
    if (!window.ResizeObserver) return;

    this.resizeObserver = new ResizeObserver(() => {
      this._calculateConstraints();
    });

    this.resizeObserver.observe(this.boundaryElement);
    this.resizeObserver.observe(this.orbiterElement);
  }

  /**
   * Calculate target position based on cursor/touch coordinates
   * @private
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
   * Apply movement constraints based on configured mode
   * @private
   */
  private _applyConstraints(x: number, y: number): { x: number; y: number } {
    const { maxX, maxY } = this.state.constraints;

    switch (this.options.constraintMode) {
      case "clamp":
        return {
          x: Math.max(-maxX, Math.min(x, maxX)),
          y: Math.max(-maxY, Math.min(y, maxY)),
        };

      case "elastic":
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

      case "none":
      default:
        return { x, y };
    }
  }

  /**
   * Update CSS transform properties with current position
   * Uses RAF for smooth rendering
   * @private
   */
  private _updateTransform(): void {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }

    this.rafId = requestAnimationFrame(() => {
      this.orbiterElement.style.setProperty(
        "--translate-x",
        `${this.state.current.x}px`,
      );
      this.orbiterElement.style.setProperty(
        "--translate-y",
        `${this.state.current.y}px`,
      );
      this.orbiterElement.style.setProperty("--translate-z", "0px");
      this.rafId = null;
    });
  }

  /**
   * Start the animation loop for smooth movement
   * @private
   */
  private _startAnimationLoop(): void {
    if (this.state.animationId) return;

    const animate = (timestamp: number) => {
      if (!this.state.isAnimating) {
        this.state.animationId = null;
        return;
      }

      const dt = timestamp - this.state.lastUpdateTime;
      this.state.lastUpdateTime = timestamp;

      if (this.options.smoothing.enabled) {
        // Smooth interpolation to target
        const speed = this.options.smoothing.speed;
        this.state.current.x += (this.state.target.x - this.state.current.x) *
          speed;
        this.state.current.y += (this.state.target.y - this.state.current.y) *
          speed;

        // Stop animation when close enough to target
        const distance = Math.sqrt(
          Math.pow(this.state.target.x - this.state.current.x, 2) +
            Math.pow(this.state.target.y - this.state.current.y, 2),
        );

        if (distance < 0.1 && !this.state.isTracking) {
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

      if (this.state.isAnimating) {
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
   * Animate back to center position with easing
   * @private
   */
  private _animateToCenter(): void {
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

    const animate = (timestamp: number) => {
      const elapsed = timestamp - startTime;
      const t = Math.min(elapsed / duration, 1);
      const eased = getEasingValue(t);

      this.state.current.x = startX * (1 - eased);
      this.state.current.y = startY * (1 - eased);
      this.state.target.x = this.state.current.x;
      this.state.target.y = this.state.current.y;

      this._updateTransform();

      if (t < 1) {
        requestAnimationFrame(animate);
      } else {
        this.state.isAnimating = false;
      }
    };

    this.state.isAnimating = true;
    requestAnimationFrame(animate);
  }

  // Event handlers
  private _handleMouseMove(event: MouseEvent): void {
    this.state.isTracking = true;
    this.state.target = this._calculateTargetPosition(
      event.clientX,
      event.clientY,
    );
    this._startAnimationLoop();
  }

  private _handleMouseLeave(): void {
    this.state.isTracking = false;

    switch (this.options.onLeave) {
      case "reset":
        this._animateToCenter();
        break;
      case "freeze":
        // Do nothing, keep current position
        break;
      case "continue":
        // Let smoothing continue to target if enabled
        if (!this.options.smoothing.enabled) {
          this.state.isAnimating = false;
        }
        break;
    }
  }

  private _handleTouchMove(event: TouchEvent): void {
    if (!this.options.touch.enabled || event.touches.length === 0) return;

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
    this._handleMouseLeave();
  }
}
