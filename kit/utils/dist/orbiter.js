// deno-lint-ignore-file
var b = Object.defineProperty;
var p = (o, t, e) => t in o ? b(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e;
var r = (o, t, e) => p(o, typeof t != "symbol" ? t + "" : t, e);

// src/orbiter.mts
var l = class {
  /**
   * Creates a new Orbiter instance
   * @param orbiterElement - The element that will follow the cursor
   * @param boundaryElement - The container element that defines the tracking area
   * @param options - Configuration options
   */
  constructor(t, e, s = {}) {
    r(this, "orbiterElement");
    r(this, "boundaryElement");
    r(this, "options");
    r(this, "state");
    r(this, "rafId", null);
    r(this, "resizeObserver", null);
    this.orbiterElement = t, this.boundaryElement = e, this.options = this.h(s), this.state = {
      current: { x: 0, y: 0 },
      target: { x: 0, y: 0 },
      constraints: { maxX: 0, maxY: 0, centerX: 0, centerY: 0 },
      isAnimating: !1,
      isTracking: !1,
      animationId: null,
      lastUpdateTime: 0
    }, this.u(), this.a(), this.c(), this.m(), this.l(), this.s();
  }
  /**
   * Apply default options and merge with user provided options
   * @private
   */
  h(t) {
    return {
      factor: t.factor ?? 1,
      smoothing: {
        enabled: t.smoothing?.enabled ?? !0,
        speed: t.smoothing?.speed ?? 0.12
      },
      touch: {
        enabled: t.touch?.enabled ?? !0,
        useFirstTouch: t.touch?.useFirstTouch ?? !0
      },
      constraintMode: t.constraintMode ?? "clamp",
      elastic: {
        tension: t.elastic?.tension ?? 0.2,
        snapBackDuration: t.elastic?.snapBackDuration ?? 300
      },
      onLeave: t.onLeave ?? "reset",
      resetAnimation: {
        duration: t.resetAnimation?.duration ?? 400,
        easing: t.resetAnimation?.easing ?? "easeOut"
      }
    };
  }
  /**
   * Validate configuration and throw errors for invalid setups
   * @private
   */
  u() {
    if (!this.orbiterElement || !this.boundaryElement)
      throw new Error("Orbiter requires valid orbiter and boundary elements");
    if (this.options.smoothing.speed < 0 || this.options.smoothing.speed > 1)
      throw new Error("Smoothing speed must be between 0 and 1");
    if (this.options.elastic.tension < 0 || this.options.elastic.tension > 1)
      throw new Error("Elastic tension must be between 0 and 1");
  }
  /**
   * Calculate movement constraints based on current element dimensions
   * @private
   */
  a() {
    let t = this.boundaryElement.getBoundingClientRect(), e = this.orbiterElement.getBoundingClientRect();
    this.state.constraints = {
      maxX: Math.max(0, (t.width - e.width) / 2),
      maxY: Math.max(0, (t.height - e.height) / 2),
      centerX: t.width / 2,
      centerY: t.height / 2
    };
  }
  /**
   * Bind all event handlers to maintain proper context
   * @private
   */
  c() {
    this.i = this.i.bind(this), this.t = this.t.bind(this), this.n = this.n.bind(this), this.e = this.e.bind(this);
  }
  /**
   * Attach event listeners to boundary element
   * @private
   */
  m() {
    this.boundaryElement.addEventListener("mousemove", this.i), this.boundaryElement.addEventListener("mouseleave", this.t), this.options.touch.enabled && (this.boundaryElement.addEventListener(
      "touchmove",
      this.n,
      {
        passive: !0
      }
    ), this.boundaryElement.addEventListener("touchend", this.e), this.boundaryElement.addEventListener(
      "touchcancel",
      this.e
    ));
  }
  /**
   * Set up ResizeObserver to recalculate constraints when elements resize
   * @private
   */
  l() {
    globalThis.ResizeObserver && (this.resizeObserver = new ResizeObserver(() => {
      this.a();
    }), this.resizeObserver.observe(this.boundaryElement), this.resizeObserver.observe(this.orbiterElement));
  }
  /**
   * Calculate target position based on cursor/touch coordinates
   * @private
   */
  r(t, e) {
    let s = this.boundaryElement.getBoundingClientRect(), i = t - s.left, a = e - s.top, u = (i - this.state.constraints.centerX) * this.options.factor, h = (a - this.state.constraints.centerY) * this.options.factor;
    return this.d(u, h);
  }
  /**
   * Apply movement constraints based on configured mode
   * @private
   */
  d(t, e) {
    let { maxX: s, maxY: i } = this.state.constraints;
    switch (this.options.constraintMode) {
      case "clamp":
        return {
          x: Math.max(-s, Math.min(t, s)),
          y: Math.max(-i, Math.min(e, i))
        };
      case "elastic": {
        let a = this.options.elastic.tension;
        return {
          x: t > s ? s + (t - s) * a : t < -s ? -s + (t + s) * a : t,
          y: e > i ? i + (e - i) * a : e < -i ? -i + (e + i) * a : e
        };
      }
      case "none":
      default:
        return { x: t, y: e };
    }
  }
  /**
   * Update CSS transform properties with current position
   * Uses RAF for smooth rendering
   * @private
   */
  s() {
    this.rafId && cancelAnimationFrame(this.rafId), this.rafId = requestAnimationFrame(() => {
      this.orbiterElement.style.setProperty(
        "--translate-x",
        `${this.state.current.x}px`
      ), this.orbiterElement.style.setProperty(
        "--translate-y",
        `${this.state.current.y}px`
      ), this.orbiterElement.style.setProperty("--translate-z", "0px"), this.rafId = null;
    });
  }
  /**
   * Start the animation loop for smooth movement
   * @private
   */
  o() {
    if (this.state.animationId) return;
    let t = (e) => {
      if (!this.state.isAnimating) {
        this.state.animationId = null;
        return;
      }
      if (this.state.lastUpdateTime = e, this.options.smoothing.enabled) {
        let s = this.options.smoothing.speed;
        this.state.current.x += (this.state.target.x - this.state.current.x) * s, this.state.current.y += (this.state.target.y - this.state.current.y) * s, Math.sqrt(
          Math.pow(this.state.target.x - this.state.current.x, 2) + Math.pow(this.state.target.y - this.state.current.y, 2)
        ) < 0.1 && !this.state.isTracking && (this.state.isAnimating = !1);
      } else
        this.state.current.x = this.state.target.x, this.state.current.y = this.state.target.y, this.state.isTracking || (this.state.isAnimating = !1);
      this.s(), this.state.isAnimating ? this.state.animationId = requestAnimationFrame(t) : this.state.animationId = null;
    };
    this.state.isAnimating = !0, this.state.lastUpdateTime = performance.now(), this.state.animationId = requestAnimationFrame(t);
  }
  /**
   * Animate back to center position with easing
   * @private
   */
  b() {
    let t = performance.now(), e = this.state.current.x, s = this.state.current.y, { duration: i, easing: a } = this.options.resetAnimation, u = (n) => {
      switch (a) {
        case "easeOut":
          return 1 - Math.pow(1 - n, 3);
        case "easeInOut":
          return n < 0.5 ? 2 * n * n : 1 - Math.pow(-2 * n + 2, 3) / 2;
        case "linear":
          return n;
        default:
          return 1 - Math.pow(1 - n, 2);
      }
    }, h = (n) => {
      let d = n - t, c = Math.min(d / i, 1), m = u(c);
      this.state.current.x = e * (1 - m), this.state.current.y = s * (1 - m), this.state.target.x = this.state.current.x, this.state.target.y = this.state.current.y, this.s(), c < 1 ? requestAnimationFrame(h) : this.state.isAnimating = !1;
    };
    this.state.isAnimating = !0, requestAnimationFrame(h);
  }
  // Event handlers
  i(t) {
    this.state.isTracking = !0, this.state.target = this.r(
      t.clientX,
      t.clientY
    ), this.o();
  }
  t() {
    switch (this.state.isTracking = !1, this.options.onLeave) {
      case "reset":
        this.b();
        break;
      case "freeze":
        break;
      case "continue":
        this.options.smoothing.enabled || (this.state.isAnimating = !1);
        break;
    }
  }
  n(t) {
    if (!this.options.touch.enabled || t.touches.length === 0) return;
    let e = this.options.touch.useFirstTouch ? t.touches[0] : t.touches[t.touches.length - 1];
    this.state.isTracking = !0, this.state.target = this.r(
      e.clientX,
      e.clientY
    ), this.o();
  }
  e() {
    this.t();
  }
};
export {
  l as Orbiter
};
