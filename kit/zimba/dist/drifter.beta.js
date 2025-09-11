// deno-lint-ignore-file
var y = Object.defineProperty;
var T = (f, t, e) => t in f ? y(f, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : f[t] = e;
var v = (f, t, e) => T(f, typeof t != "symbol" ? t + "" : t, e);

// src/drifter.beta.mts
var g = class {
  constructor(t, e, i = {}) {
    v(this, "drifterElement");
    v(this, "boundaryElement");
    v(this, "options");
    v(this, "eventTarget");
    v(this, "state");
    v(this, "activePointers", /* @__PURE__ */ new Map());
    v(this, "pinchState", null);
    v(this, "inertiaFrameId", null);
    v(this, "animationFrameId", null);
    v(this, "resizeObserver", null);
    // Pre-bound event handlers to avoid repeated binding
    v(this, "boundHandlers");
    // Cached calculations to avoid repeated work
    v(this, "cachedTransform", { x: 0, y: 0, scale: 1 });
    this.drifterElement = t, this.boundaryElement = e, this.options = this.c(i), this.l(), this.eventTarget = this.d(), this.state = {
      primaryPointerId: -1,
      constraints: {
        minX: 0,
        maxX: 0,
        minY: 0,
        maxY: 0,
        lastUpdate: 0
      },
      isDragging: !1,
      isPinching: !1,
      movement: {
        offsetX: 0,
        offsetY: 0,
        startX: 0,
        startY: 0,
        velocityX: 0,
        velocityY: 0,
        lastTime: 0,
        accumulatedX: 0,
        accumulatedY: 0
      },
      zoom: this.options.zoom.initial,
      cache: {
        drifterRect: null,
        boundaryRect: null,
        lastCacheTime: 0
      }
    }, this.boundHandlers = {
      pointerDown: this.u.bind(this),
      pointerMove: this.v.bind(this),
      pointerUp: this.s.bind(this),
      pointerCancel: this.f.bind(this),
      wheel: this.p.bind(this),
      windowBlur: this.b.bind(this)
    }, this.g(), this.T(), this.e(), this.t();
  }
  c(t) {
    return {
      dragSpeed: t.dragSpeed ?? 1.25,
      inertia: {
        damping: t.inertia?.damping ?? 0.92,
        threshold: t.inertia?.threshold ?? 1
      },
      mode: t.mode ?? "bounded",
      boundedTo: t.boundedTo ?? "center",
      dragTarget: t.dragTarget ?? "self",
      zoom: {
        enabled: t.zoom?.enabled ?? !0,
        initial: t.zoom?.initial ?? 1,
        min: t.zoom?.min ?? 0.5,
        max: t.zoom?.max ?? 1.5,
        smoothing: t.zoom?.smoothing ?? 0.75,
        zoomTo: t.zoom?.zoomTo ?? "cursor"
      },
      performance: {
        useHardwareAcceleration: t.performance?.useHardwareAcceleration ?? !0,
        resizeDebounceMs: t.performance?.resizeDebounceMs ?? 100
      }
    };
  }
  l() {
    if (!this.drifterElement?.nodeType)
      throw new Error(`Invalid drifter element: ${this.drifterElement}`);
    if (this.options.mode === "bounded" && !this.boundaryElement?.nodeType)
      throw new Error("Bounded mode requires a valid boundary element");
  }
  d() {
    return this.options.dragTarget === "self" ? this.drifterElement : this.boundaryElement;
  }
  /**
   * Setup ResizeObserver for efficient dimension tracking
   */
  g() {
    typeof ResizeObserver > "u" || (this.resizeObserver = new ResizeObserver(() => {
      this.Y();
    }), this.resizeObserver.observe(this.drifterElement), this.boundaryElement && this.resizeObserver.observe(this.boundaryElement));
  }
  Y() {
    performance.now() - this.state.constraints.lastUpdate < this.options.performance.resizeDebounceMs || this.e();
  }
  /**
   * Cache element dimensions and constraints for better performance
   */
  e() {
    let t = performance.now();
    this.state.cache.drifterRect = this.drifterElement.getBoundingClientRect(), this.state.cache.boundaryRect = this.boundaryElement?.getBoundingClientRect() || null, this.state.cache.lastCacheTime = t, this.state.constraints.lastUpdate = t, this.options.mode === "bounded" && this.boundaryElement && this.X();
  }
  /**
   * Pre-calculate and cache boundary constraints
   */
  X() {
    if (!this.boundaryElement) return;
    let t = this.drifterElement.clientWidth * this.state.zoom, e = this.drifterElement.clientHeight * this.state.zoom, i = getComputedStyle(this.boundaryElement), n = {
      left: parseFloat(i.paddingLeft) || 0,
      right: parseFloat(i.paddingRight) || 0,
      top: parseFloat(i.paddingTop) || 0,
      bottom: parseFloat(i.paddingBottom) || 0
    }, o = this.boundaryElement.clientWidth - n.left - n.right, s = this.boundaryElement.clientHeight - n.top - n.bottom, a = t * 0.5, m = e * 0.5, h = o * 0.5, u = s * 0.5, c, r, l, d;
    this.options.boundedTo === "center" ? (r = (t - o) * 0.5 + h, c = -r, d = (e - s) * 0.5 + u, l = -d) : (r = h - a, c = -r, d = u - m, l = -d, t > o && (c = h - a, r = -c), e > s && (l = u - m, d = -l)), this.state.constraints = {
      minX: c,
      maxX: r,
      minY: l,
      maxY: d,
      lastUpdate: performance.now()
    };
  }
  /**
   * High-precision constraint calculation with elastic overshoot
   */
  n(t, e, i = !1) {
    if (this.options.mode === "free" || !this.boundaryElement)
      return { x: t, y: e };
    performance.now() - this.state.constraints.lastUpdate > 1e3 && this.e();
    let { minX: o, maxX: s, minY: a, maxY: m } = this.state.constraints, h = 0.35, u = (c, r, l) => c < r ? i ? r + (c - r) * h : r : c > l ? i ? l + (c - l) * h : l : c;
    return {
      x: u(t, o, s),
      y: u(e, a, m)
    };
  }
  /**
   * Optimized transform update with caching and hardware acceleration
   */
  t() {
    this.animationFrameId || (this.animationFrameId = requestAnimationFrame(() => {
      let { offsetX: t, offsetY: e } = this.state.movement, { zoom: i } = this.state;
      if (Math.abs(this.cachedTransform.x - t) < 1e-3 && Math.abs(this.cachedTransform.y - e) < 1e-3 && Math.abs(this.cachedTransform.scale - i) < 1e-3) {
        this.animationFrameId = null;
        return;
      }
      let n = Math.round(t * 100) / 100, o = Math.round(e * 100) / 100, s = Math.round(i * 1e4) / 1e4;
      this.options.performance.useHardwareAcceleration ? this.drifterElement.style.transform = `translate3d(${n}px, ${o}px, 0) scale(${s})` : this.drifterElement.style.transform = `translate(${n}px, ${o}px) scale(${s})`, this.cachedTransform = { x: t, y: e, scale: i }, this.animationFrameId = null;
    }));
  }
  /**
   * Optimized pointer distance calculation
   */
  o(t, e) {
    let i = t.x - e.x, n = t.y - e.y;
    return Math.sqrt(i * i + n * n);
  }
  /**
   * Optimized pointer center calculation with cached boundary rect
   */
  a(t, e) {
    let i = this.state.cache.boundaryRect || this.boundaryElement?.getBoundingClientRect() || this.state.cache.drifterRect || this.drifterElement.getBoundingClientRect();
    return {
      x: (t.x + e.x) * 0.5 - i.left,
      y: (t.y + e.y) * 0.5 - i.top
    };
  }
  /**
   * Enhanced inertia with frame-rate independent animation
   */
  P() {
    if (this.state.isDragging || this.state.isPinching) return;
    let { damping: t, threshold: e } = this.options.inertia, i = 2e3;
    this.state.movement.velocityX = Math.max(
      -i,
      Math.min(i, this.state.movement.velocityX)
    ), this.state.movement.velocityY = Math.max(
      -i,
      Math.min(i, this.state.movement.velocityY)
    );
    let n = performance.now(), o = (s) => {
      if (!this.inertiaFrameId) return;
      let a = Math.min((s - n) / 1e3, 1 / 30);
      n = s;
      let m = Math.pow(t, a * 60);
      if (this.state.movement.velocityX *= m, this.state.movement.velocityY *= m, Math.sqrt(
        this.state.movement.velocityX ** 2 + this.state.movement.velocityY ** 2
      ) < e) {
        this.i();
        return;
      }
      let u = this.state.movement.velocityX * a, c = this.state.movement.velocityY * a;
      this.state.movement.accumulatedX += u, this.state.movement.accumulatedY += c;
      let r = Math.round(this.state.movement.accumulatedX), l = Math.round(this.state.movement.accumulatedY);
      if (r !== 0 || l !== 0) {
        this.state.movement.accumulatedX -= r, this.state.movement.accumulatedY -= l;
        let d = this.n(
          this.state.movement.offsetX + r,
          this.state.movement.offsetY + l,
          !1
        );
        this.options.mode === "bounded" && (d.x !== this.state.movement.offsetX + r && (this.state.movement.velocityX *= -0.3), d.y !== this.state.movement.offsetY + l && (this.state.movement.velocityY *= -0.3)), this.state.movement.offsetX = d.x, this.state.movement.offsetY = d.y, this.t();
      }
      this.inertiaFrameId = requestAnimationFrame(o);
    };
    this.inertiaFrameId = requestAnimationFrame(o);
  }
  i() {
    this.inertiaFrameId && (cancelAnimationFrame(this.inertiaFrameId), this.inertiaFrameId = null), this.state.movement.velocityX = 0, this.state.movement.velocityY = 0, this.state.movement.accumulatedX = 0, this.state.movement.accumulatedY = 0;
  }
  r() {
    if (this.options.mode === "free") return;
    let { offsetX: t, offsetY: e } = this.state.movement, i = this.n(t, e, !1);
    if (Math.abs(i.x - t) < 1 && Math.abs(i.y - e) < 1)
      return;
    let n = performance.now(), o = 250, s = (a) => {
      let m = Math.min(1, (a - n) / o), h = m * (2 - m);
      this.state.movement.offsetX = t + (i.x - t) * h, this.state.movement.offsetY = e + (i.y - e) * h, this.t(), m < 1 && requestAnimationFrame(s);
    };
    requestAnimationFrame(s);
  }
  T() {
    let { passive: t } = { passive: !1 };
    this.eventTarget.addEventListener(
      "pointerdown",
      this.boundHandlers.pointerDown
    ), this.eventTarget.addEventListener(
      "pointermove",
      this.boundHandlers.pointerMove
    ), this.eventTarget.addEventListener(
      "pointerup",
      this.boundHandlers.pointerUp
    ), this.eventTarget.addEventListener(
      "pointercancel",
      this.boundHandlers.pointerCancel
    ), globalThis.addEventListener("blur", this.boundHandlers.windowBlur), globalThis.addEventListener(
      "visibilitychange",
      this.boundHandlers.windowBlur
    ), this.options.zoom.enabled && this.eventTarget.addEventListener(
      "wheel",
      this.boundHandlers.wheel,
      t
    );
  }
  // Event Handlers (optimized for performance)
  u(t) {
    this.eventTarget.contains(t.target) && (this.activePointers.set(t.pointerId, {
      x: t.clientX,
      y: t.clientY,
      timestamp: performance.now()
    }), this.activePointers.size === 1 ? this.z(t.clientX, t.clientY, t.pointerId) : this.activePointers.size === 2 && this.options.zoom.enabled && this.E());
  }
  v(t) {
    this.activePointers.has(t.pointerId) && (this.activePointers.set(t.pointerId, {
      x: t.clientX,
      y: t.clientY,
      timestamp: performance.now()
    }), this.state.isDragging && this.state.primaryPointerId === t.pointerId ? this.w(t.clientX, t.clientY) : this.state.isPinching && this.activePointers.size === 2 && this.M());
  }
  s(t) {
    this.activePointers.delete(t.pointerId), this.state.isPinching && this.activePointers.size < 2 ? this.m() : this.state.isDragging && this.state.primaryPointerId === t.pointerId && this.h(t.pointerId);
  }
  f(t) {
    this.s(t);
  }
  b() {
    this.state.isDragging && this.h(this.state.primaryPointerId), this.state.isPinching && this.m(), this.activePointers.clear();
  }
  p(t) {
    if (!this.options.zoom.enabled) return;
    t.preventDefault();
    let i = 1 + -t.deltaY / 1e3, n = Math.max(
      this.options.zoom.min,
      Math.min(this.options.zoom.max, this.state.zoom * i)
    );
    Math.abs(n - this.state.zoom) < 1e-3 || this.H(n, t.clientX, t.clientY);
  }
  H(t, e, i, n = !0) {
    let o = this.eventTarget.getBoundingClientRect(), s, a;
    this.options.zoom.zoomTo === "cursor" ? (s = e - o.left, a = i - o.top) : (s = this.eventTarget.clientWidth * 0.5, a = this.eventTarget.clientHeight * 0.5);
    let m = (s - this.eventTarget.clientWidth * 0.5 - this.state.movement.offsetX) / this.state.zoom, h = (a - this.eventTarget.clientHeight * 0.5 - this.state.movement.offsetY) / this.state.zoom, u = s - this.eventTarget.clientWidth * 0.5 - m * t, c = a - this.eventTarget.clientHeight * 0.5 - h * t;
    if (n) {
      let r = this.options.zoom.smoothing;
      this.state.zoom += (t - this.state.zoom) * r, this.state.movement.offsetX += (u - this.state.movement.offsetX) * r, this.state.movement.offsetY += (c - this.state.movement.offsetY) * r;
    } else
      this.state.zoom = t, this.state.movement.offsetX = u, this.state.movement.offsetY = c;
    this.t();
  }
  z(t, e, i) {
    this.i(), this.state.isDragging = !0, this.state.movement.startX = t, this.state.movement.startY = e, this.state.primaryPointerId = i, this.state.movement.velocityX = 0, this.state.movement.velocityY = 0, this.state.movement.lastTime = performance.now(), this.eventTarget.setPointerCapture(i);
  }
  E() {
    if (!this.options.zoom.enabled) return;
    let t = Array.from(this.activePointers.values());
    if (t.length !== 2) return;
    this.i(), this.state.isPinching = !0, this.state.isDragging = !1;
    let [e, i] = t, n = this.a(e, i), o = (n.x - this.eventTarget.clientWidth * 0.5 - this.state.movement.offsetX) / this.state.zoom, s = (n.y - this.eventTarget.clientHeight * 0.5 - this.state.movement.offsetY) / this.state.zoom;
    this.pinchState = {
      initialDistance: this.o(e, i),
      initialZoom: this.state.zoom,
      initialCenter: n,
      contentPoint: { x: o, y: s }
    }, this.activePointers.forEach((a, m) => {
      this.eventTarget.setPointerCapture(m);
    });
  }
  w(t, e) {
    let i = performance.now(), n = (t - this.state.movement.startX) * this.options.dragSpeed, o = (e - this.state.movement.startY) * this.options.dragSpeed, s = this.state.movement.offsetX, a = this.state.movement.offsetY, m = this.n(
      this.state.movement.offsetX + n,
      this.state.movement.offsetY + o,
      !0
    );
    this.state.movement.offsetX = m.x, this.state.movement.offsetY = m.y;
    let h = i - this.state.movement.lastTime;
    if (h > 5 && h < 100) {
      let u = this.state.movement.offsetX - s, c = this.state.movement.offsetY - a, r = u / h * 1e3, l = c / h * 1e3, d = 0.7;
      this.state.movement.velocityX = this.state.movement.velocityX * (1 - d) + r * d, this.state.movement.velocityY = this.state.movement.velocityY * (1 - d) + l * d;
    }
    this.state.movement.startX = t, this.state.movement.startY = e, this.state.movement.lastTime = i, this.t();
  }
  M() {
    if (!this.pinchState || this.activePointers.size !== 2) return;
    let t = Array.from(this.activePointers.values()), [e, i] = t, o = this.o(e, i) / this.pinchState.initialDistance, s = Math.max(
      this.options.zoom.min,
      Math.min(this.options.zoom.max, this.pinchState.initialZoom * o)
    ), a = this.a(e, i), m = a.x - this.eventTarget.clientWidth / 2 - this.pinchState.contentPoint.x * s, h = a.y - this.eventTarget.clientHeight / 2 - this.pinchState.contentPoint.y * s;
    this.state.zoom = s, this.state.movement.offsetX = m, this.state.movement.offsetY = h, this.t();
  }
  h(t) {
    if (this.state.primaryPointerId !== t) return;
    this.state.isDragging = !1, this.state.primaryPointerId = -1, Math.sqrt(
      this.state.movement.velocityX ** 2 + this.state.movement.velocityY ** 2
    ) > this.options.inertia.threshold ? this.P() : this.options.mode === "bounded" && this.r(), this.eventTarget.hasPointerCapture(t) && this.eventTarget.releasePointerCapture(t);
  }
  m() {
    this.state.isPinching = !1, this.pinchState = null, this.activePointers.forEach((t, e) => {
      this.eventTarget.hasPointerCapture(e) && this.eventTarget.releasePointerCapture(e);
    }), this.options.mode === "bounded" && this.r();
  }
  /**
   * Enhanced destroy method with complete cleanup
   */
  destroy() {
    this.i(), this.animationFrameId && (cancelAnimationFrame(this.animationFrameId), this.animationFrameId = null), this.eventTarget.removeEventListener(
      "pointerdown",
      this.boundHandlers.pointerDown
    ), this.eventTarget.removeEventListener(
      "pointermove",
      this.boundHandlers.pointerMove
    ), this.eventTarget.removeEventListener(
      "pointerup",
      this.boundHandlers.pointerUp
    ), this.eventTarget.removeEventListener(
      "pointercancel",
      this.boundHandlers.pointerCancel
    ), globalThis.removeEventListener("blur", this.boundHandlers.windowBlur), globalThis.removeEventListener(
      "visibilitychange",
      this.boundHandlers.windowBlur
    ), this.options.zoom.enabled && this.eventTarget.removeEventListener("wheel", this.boundHandlers.wheel), this.resizeObserver && (this.resizeObserver.disconnect(), this.resizeObserver = null), this.activePointers.forEach((t, e) => {
      this.eventTarget.hasPointerCapture(e) && this.eventTarget.releasePointerCapture(e);
    }), this.activePointers.clear(), this.pinchState = null, this.drifterElement.style.transform = "";
  }
  // Public API methods for external control
  /**
   * Get current position and zoom state
   */
  getState() {
    return {
      x: this.state.movement.offsetX,
      y: this.state.movement.offsetY,
      zoom: this.state.zoom
    };
  }
  /**
   * Set position and zoom programmatically
   */
  setState(t, e, i, n = !0) {
    let o = t ?? this.state.movement.offsetX, s = e ?? this.state.movement.offsetY, a = i ? Math.max(
      this.options.zoom.min,
      Math.min(this.options.zoom.max, i)
    ) : this.state.zoom;
    if (n) {
      let m = this.state.movement.offsetX, h = this.state.movement.offsetY, u = this.state.zoom, c = performance.now(), r = 300, l = (d) => {
        let p = Math.min(1, (d - c) / r), b = p * (2 - p);
        this.state.movement.offsetX = m + (o - m) * b, this.state.movement.offsetY = h + (s - h) * b, this.state.zoom = u + (a - u) * b, this.t(), p < 1 && requestAnimationFrame(l);
      };
      requestAnimationFrame(l);
    } else
      this.state.movement.offsetX = o, this.state.movement.offsetY = s, this.state.zoom = a, this.t();
  }
  /**
   * Reset to initial position and zoom
   */
  reset(t = !0) {
    this.setState(0, 0, this.options.zoom.initial, t);
  }
  /**
   * Update options dynamically
   */
  updateOptions(t) {
    Object.assign(this.options, t), this.e();
  }
};
export {
  g as Drifter
};
