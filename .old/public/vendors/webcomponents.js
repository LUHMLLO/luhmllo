/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ut = globalThis,
  Ct = ut.ShadowRoot && (ut.ShadyCSS === void 0 || ut.ShadyCSS.nativeShadow) &&
    "adoptedStyleSheets" in Document.prototype &&
    "replace" in CSSStyleSheet.prototype,
  Ot = Symbol(),
  Lt = /* @__PURE__ */ new WeakMap();
let ee = class {
  constructor(t, n, i) {
    if (this._$cssResult$ = !0, i !== Ot) {
      throw Error(
        "CSSResult is not constructable. Use `unsafeCSS` or `css` instead.",
      );
    }
    this.cssText = t, this.t = n;
  }
  get styleSheet() {
    let t = this.o;
    const n = this.t;
    if (Ct && t === void 0) {
      const i = n !== void 0 && n.length === 1;
      i && (t = Lt.get(n)),
        t === void 0 &&
        ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText),
          i && Lt.set(n, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const _e = (e) => new ee(typeof e == "string" ? e : e + "", void 0, Ot),
  xe = (e, ...t) => {
    const n = e.length === 1 ? e[0] : t.reduce((i, o, r) =>
      i + ((s) => {
        if (s._$cssResult$ === !0) return s.cssText;
        if (typeof s == "number") return s;
        throw Error(
          "Value passed to 'css' function must be a 'css' function result: " +
            s +
            ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.",
        );
      })(o) + e[r + 1], e[0]);
    return new ee(n, e, Ot);
  },
  be = (e, t) => {
    if (Ct) {
      e.adoptedStyleSheets = t.map((n) =>
        n instanceof CSSStyleSheet ? n : n.styleSheet
      );
    } else {for (const n of t) {
        const i = document.createElement("style"), o = ut.litNonce;
        o !== void 0 && i.setAttribute("nonce", o),
          i.textContent = n.cssText,
          e.appendChild(i);
      }}
  },
  Mt = Ct ? (e) => e : (e) =>
    e instanceof CSSStyleSheet
      ? ((t) => {
        let n = "";
        for (const i of t.cssRules) n += i.cssText;
        return _e(n);
      })(e)
      : e;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const {
    is: Ae,
    defineProperty: Ee,
    getOwnPropertyDescriptor: Se,
    getOwnPropertyNames: Ce,
    getOwnPropertySymbols: Oe,
    getPrototypeOf: Re,
  } = Object,
  D = globalThis,
  Dt = D.trustedTypes,
  Pe = Dt ? Dt.emptyScript : "",
  xt = D.reactiveElementPolyfillSupport,
  nt = (e, t) => e,
  ft = {
    toAttribute(e, t) {
      switch (t) {
        case Boolean:
          e = e ? Pe : null;
          break;
        case Object:
        case Array:
          e = e == null ? e : JSON.stringify(e);
      }
      return e;
    },
    fromAttribute(e, t) {
      let n = e;
      switch (t) {
        case Boolean:
          n = e !== null;
          break;
        case Number:
          n = e === null ? null : Number(e);
          break;
        case Object:
        case Array:
          try {
            n = JSON.parse(e);
          } catch {
            n = null;
          }
      }
      return n;
    },
  },
  Rt = (e, t) => !Ae(e, t),
  Nt = {
    attribute: !0,
    type: String,
    converter: ft,
    reflect: !1,
    hasChanged: Rt,
  };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")),
  D.litPropertyMetadata ??
    (D.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class V extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, n = Nt) {
    if (
      n.state && (n.attribute = !1),
        this._$Ei(),
        this.elementProperties.set(t, n),
        !n.noAccessor
    ) {
      const i = Symbol(), o = this.getPropertyDescriptor(t, i, n);
      o !== void 0 && Ee(this.prototype, t, o);
    }
  }
  static getPropertyDescriptor(t, n, i) {
    const { get: o, set: r } = Se(this.prototype, t) ?? {
      get() {
        return this[n];
      },
      set(s) {
        this[n] = s;
      },
    };
    return {
      get() {
        return o == null ? void 0 : o.call(this);
      },
      set(s) {
        const l = o == null ? void 0 : o.call(this);
        r.call(this, s), this.requestUpdate(t, l, i);
      },
      configurable: !0,
      enumerable: !0,
    };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Nt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(nt("elementProperties"))) return;
    const t = Re(this);
    t.finalize(),
      t.l !== void 0 && (this.l = [...t.l]),
      this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(nt("finalized"))) return;
    if (
      this.finalized = !0, this._$Ei(), this.hasOwnProperty(nt("properties"))
    ) {
      const n = this.properties, i = [...Ce(n), ...Oe(n)];
      for (const o of i) this.createProperty(o, n[o]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const n = litPropertyMetadata.get(t);
      if (n !== void 0) {
        for (const [i, o] of n) this.elementProperties.set(i, o);
      }
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [n, i] of this.elementProperties) {
      const o = this._$Eu(n, i);
      o !== void 0 && this._$Eh.set(o, n);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const n = [];
    if (Array.isArray(t)) {
      const i = new Set(t.flat(1 / 0).reverse());
      for (const o of i) n.unshift(Mt(o));
    } else t !== void 0 && n.push(Mt(t));
    return n;
  }
  static _$Eu(t, n) {
    const i = n.attribute;
    return i === !1
      ? void 0
      : typeof i == "string"
      ? i
      : typeof t == "string"
      ? t.toLowerCase()
      : void 0;
  }
  constructor() {
    super(),
      this._$Ep = void 0,
      this.isUpdatePending = !1,
      this.hasUpdated = !1,
      this._$Em = null,
      this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((n) => this.enableUpdating = n),
      this._$AL = /* @__PURE__ */ new Map(),
      this._$E_(),
      this.requestUpdate(),
      (t = this.constructor.l) == null || t.forEach((n) => n(this));
  }
  addController(t) {
    var n;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t),
      this.renderRoot !== void 0 && this.isConnected &&
      ((n = t.hostConnected) == null || n.call(t));
  }
  removeController(t) {
    var n;
    (n = this._$EO) == null || n.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), n = this.constructor.elementProperties;
    for (const i of n.keys()) {
      this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
    }
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ??
      this.attachShadow(this.constructor.shadowRootOptions);
    return be(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()),
      this.enableUpdating(!0),
      (t = this._$EO) == null || t.forEach((n) => {
        var i;
        return (i = n.hostConnected) == null ? void 0 : i.call(n);
      });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((n) => {
      var i;
      return (i = n.hostDisconnected) == null ? void 0 : i.call(n);
    });
  }
  attributeChangedCallback(t, n, i) {
    this._$AK(t, i);
  }
  _$EC(t, n) {
    var r;
    const i = this.constructor.elementProperties.get(t),
      o = this.constructor._$Eu(t, i);
    if (o !== void 0 && i.reflect === !0) {
      const s = (((r = i.converter) == null ? void 0 : r.toAttribute) !== void 0
        ? i.converter
        : ft).toAttribute(n, i.type);
      this._$Em = t,
        s == null ? this.removeAttribute(o) : this.setAttribute(o, s),
        this._$Em = null;
    }
  }
  _$AK(t, n) {
    var r;
    const i = this.constructor, o = i._$Eh.get(t);
    if (o !== void 0 && this._$Em !== o) {
      const s = i.getPropertyOptions(o),
        l = typeof s.converter == "function"
          ? { fromAttribute: s.converter }
          : ((r = s.converter) == null ? void 0 : r.fromAttribute) !== void 0
          ? s.converter
          : ft;
      this._$Em = o, this[o] = l.fromAttribute(n, s.type), this._$Em = null;
    }
  }
  requestUpdate(t, n, i) {
    if (t !== void 0) {
      if (
        i ?? (i = this.constructor.getPropertyOptions(t)),
          !(i.hasChanged ?? Rt)(this[t], n)
      ) return;
      this.P(t, n, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(t, n, i) {
    this._$AL.has(t) || this._$AL.set(t, n),
      i.reflect === !0 && this._$Em !== t &&
      (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(t);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (n) {
      Promise.reject(n);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var i;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (
        this.renderRoot ?? (this.renderRoot = this.createRenderRoot()),
          this._$Ep
      ) {
        for (const [r, s] of this._$Ep) this[r] = s;
        this._$Ep = void 0;
      }
      const o = this.constructor.elementProperties;
      if (o.size > 0) {
        for (const [r, s] of o) {
          s.wrapped !== !0 || this._$AL.has(r) || this[r] === void 0 ||
            this.P(r, this[r], s);
        }
      }
    }
    let t = !1;
    const n = this._$AL;
    try {
      t = this.shouldUpdate(n),
        t
          ? (this.willUpdate(n),
            (i = this._$EO) == null || i.forEach((o) => {
              var r;
              return (r = o.hostUpdate) == null ? void 0 : r.call(o);
            }),
            this.update(n))
          : this._$EU();
    } catch (o) {
      throw t = !1, this._$EU(), o;
    }
    t && this._$AE(n);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var n;
    (n = this._$EO) == null || n.forEach((i) => {
      var o;
      return (o = i.hostUpdated) == null ? void 0 : o.call(i);
    }),
      this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)),
      this.updated(t);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Ej && (this._$Ej = this._$Ej.forEach((n) => this._$EC(n, this[n]))),
      this._$EU();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
}
V.elementStyles = [],
  V.shadowRootOptions = { mode: "open" },
  V[nt("elementProperties")] = /* @__PURE__ */ new Map(),
  V[nt("finalized")] = /* @__PURE__ */ new Map(),
  xt == null || xt({ ReactiveElement: V }),
  (D.reactiveElementVersions ?? (D.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const it = globalThis,
  pt = it.trustedTypes,
  Ut = pt ? pt.createPolicy("lit-html", { createHTML: (e) => e }) : void 0,
  ne = "$lit$",
  L = `lit$${Math.random().toFixed(9).slice(2)}$`,
  ie = "?" + L,
  Te = `<${ie}>`,
  W = document,
  ot = () => W.createComment(""),
  st = (e) => e === null || typeof e != "object" && typeof e != "function",
  oe = Array.isArray,
  He = (e) =>
    oe(e) || typeof (e == null ? void 0 : e[Symbol.iterator]) == "function",
  bt = `[ 	
\f\r]`,
  et = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  kt = /-->/g,
  Bt = />/g,
  B = RegExp(
    `>|${bt}(?:([^\\s"'>=/]+)(${bt}*=${bt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,
    "g",
  ),
  Ft = /'/g,
  Wt = /"/g,
  se = /^(?:script|style|textarea|title)$/i,
  Le = (e) => (t, ...n) => ({ _$litType$: e, strings: t, values: n }),
  zt = Le(1),
  X = Symbol.for("lit-noChange"),
  _ = Symbol.for("lit-nothing"),
  jt = /* @__PURE__ */ new WeakMap(),
  F = W.createTreeWalker(W, 129);
function re(e, t) {
  if (!Array.isArray(e) || !e.hasOwnProperty("raw")) {
    throw Error("invalid template strings array");
  }
  return Ut !== void 0 ? Ut.createHTML(t) : t;
}
const Me = (e, t) => {
  const n = e.length - 1, i = [];
  let o, r = t === 2 ? "<svg>" : "", s = et;
  for (let l = 0; l < n; l++) {
    const c = e[l];
    let a, d, h = -1, f = 0;
    for (; f < c.length && (s.lastIndex = f, d = s.exec(c), d !== null);) {
      f = s.lastIndex,
        s === et
          ? d[1] === "!--"
            ? s = kt
            : d[1] !== void 0
            ? s = Bt
            : d[2] !== void 0
            ? (se.test(d[2]) && (o = RegExp("</" + d[2], "g")), s = B)
            : d[3] !== void 0 && (s = B)
          : s === B
          ? d[0] === ">"
            ? (s = o ?? et, h = -1)
            : d[1] === void 0
            ? h = -2
            : (h = s.lastIndex - d[2].length,
              a = d[1],
              s = d[3] === void 0 ? B : d[3] === '"' ? Wt : Ft)
          : s === Wt || s === Ft
          ? s = B
          : s === kt || s === Bt
          ? s = et
          : (s = B, o = void 0);
    }
    const u = s === B && e[l + 1].startsWith("/>") ? " " : "";
    r += s === et
      ? c + Te
      : h >= 0
      ? (i.push(a), c.slice(0, h) + ne + c.slice(h) + L + u)
      : c + L + (h === -2 ? l : u);
  }
  return [re(e, r + (e[n] || "<?>") + (t === 2 ? "</svg>" : "")), i];
};
class rt {
  constructor({ strings: t, _$litType$: n }, i) {
    let o;
    this.parts = [];
    let r = 0, s = 0;
    const l = t.length - 1, c = this.parts, [a, d] = Me(t, n);
    if (
      this.el = rt.createElement(a, i), F.currentNode = this.el.content, n === 2
    ) {
      const h = this.el.content.firstChild;
      h.replaceWith(...h.childNodes);
    }
    for (; (o = F.nextNode()) !== null && c.length < l;) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) {
          for (const h of o.getAttributeNames()) {
            if (h.endsWith(ne)) {
              const f = d[s++],
                u = o.getAttribute(h).split(L),
                m = /([.?@])?(.*)/.exec(f);
              c.push({
                type: 1,
                index: r,
                name: m[2],
                strings: u,
                ctor: m[1] === "."
                  ? Ne
                  : m[1] === "?"
                  ? Ue
                  : m[1] === "@"
                  ? ke
                  : yt,
              }), o.removeAttribute(h);
            } else {h.startsWith(L) &&
                (c.push({ type: 6, index: r }), o.removeAttribute(h));}
          }
        }
        if (se.test(o.tagName)) {
          const h = o.textContent.split(L), f = h.length - 1;
          if (f > 0) {
            o.textContent = pt ? pt.emptyScript : "";
            for (let u = 0; u < f; u++) {
              o.append(h[u], ot()),
                F.nextNode(),
                c.push({ type: 2, index: ++r });
            }
            o.append(h[f], ot());
          }
        }
      } else if (o.nodeType === 8) {
        if (o.data === ie) c.push({ type: 2, index: r });
        else {
          let h = -1;
          for (; (h = o.data.indexOf(L, h + 1)) !== -1;) {
            c.push({ type: 7, index: r }), h += L.length - 1;
          }
        }
      }
      r++;
    }
  }
  static createElement(t, n) {
    const i = W.createElement("template");
    return i.innerHTML = t, i;
  }
}
function Y(e, t, n = e, i) {
  var s, l;
  if (t === X) return t;
  let o = i !== void 0 ? (s = n._$Co) == null ? void 0 : s[i] : n._$Cl;
  const r = st(t) ? void 0 : t._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== r &&
    ((l = o == null ? void 0 : o._$AO) == null || l.call(o, !1),
      r === void 0 ? o = void 0 : (o = new r(e), o._$AT(e, n, i)),
      i !== void 0 ? (n._$Co ?? (n._$Co = []))[i] = o : n._$Cl = o),
    o !== void 0 && (t = Y(e, o._$AS(e, t.values), o, i)),
    t;
}
class De {
  constructor(t, n) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = n;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: n }, parts: i } = this._$AD,
      o = ((t == null ? void 0 : t.creationScope) ?? W).importNode(n, !0);
    F.currentNode = o;
    let r = F.nextNode(), s = 0, l = 0, c = i[0];
    for (; c !== void 0;) {
      if (s === c.index) {
        let a;
        c.type === 2
          ? a = new lt(r, r.nextSibling, this, t)
          : c.type === 1
          ? a = new c.ctor(r, c.name, c.strings, this, t)
          : c.type === 6 && (a = new Be(r, this, t)),
          this._$AV.push(a),
          c = i[++l];
      }
      s !== (c == null ? void 0 : c.index) && (r = F.nextNode(), s++);
    }
    return F.currentNode = W, o;
  }
  p(t) {
    let n = 0;
    for (const i of this._$AV) {
      i !== void 0 &&
      (i.strings !== void 0
        ? (i._$AI(t, i, n), n += i.strings.length - 2)
        : i._$AI(t[n])), n++;
    }
  }
}
class lt {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, n, i, o) {
    this.type = 2,
      this._$AH = _,
      this._$AN = void 0,
      this._$AA = t,
      this._$AB = n,
      this._$AM = i,
      this.options = o,
      this._$Cv = (o == null ? void 0 : o.isConnected) ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const n = this._$AM;
    return n !== void 0 && (t == null ? void 0 : t.nodeType) === 11 &&
      (t = n.parentNode),
      t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, n = this) {
    t = Y(this, t, n),
      st(t)
        ? t === _ || t == null || t === ""
          ? (this._$AH !== _ && this._$AR(), this._$AH = _)
          : t !== this._$AH && t !== X && this._(t)
        : t._$litType$ !== void 0
        ? this.$(t)
        : t.nodeType !== void 0
        ? this.T(t)
        : He(t)
        ? this.k(t)
        : this._(t);
  }
  S(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.S(t));
  }
  _(t) {
    this._$AH !== _ && st(this._$AH)
      ? this._$AA.nextSibling.data = t
      : this.T(W.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var r;
    const { values: n, _$litType$: i } = t,
      o = typeof i == "number" ? this._$AC(t) : (i.el === void 0 &&
        (i.el = rt.createElement(re(i.h, i.h[0]), this.options)),
        i);
    if (((r = this._$AH) == null ? void 0 : r._$AD) === o) this._$AH.p(n);
    else {
      const s = new De(o, this), l = s.u(this.options);
      s.p(n), this.T(l), this._$AH = s;
    }
  }
  _$AC(t) {
    let n = jt.get(t.strings);
    return n === void 0 && jt.set(t.strings, n = new rt(t)), n;
  }
  k(t) {
    oe(this._$AH) || (this._$AH = [], this._$AR());
    const n = this._$AH;
    let i, o = 0;
    for (const r of t) {
      o === n.length
        ? n.push(i = new lt(this.S(ot()), this.S(ot()), this, this.options))
        : i = n[o],
        i._$AI(r),
        o++;
    }
    o < n.length && (this._$AR(i && i._$AB.nextSibling, o), n.length = o);
  }
  _$AR(t = this._$AA.nextSibling, n) {
    var i;
    for (
      (i = this._$AP) == null ? void 0 : i.call(this, !1, !0, n);
      t && t !== this._$AB;
    ) {
      const o = t.nextSibling;
      t.remove(), t = o;
    }
  }
  setConnected(t) {
    var n;
    this._$AM === void 0 &&
      (this._$Cv = t, (n = this._$AP) == null || n.call(this, t));
  }
}
class yt {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, n, i, o, r) {
    this.type = 1,
      this._$AH = _,
      this._$AN = void 0,
      this.element = t,
      this.name = n,
      this._$AM = o,
      this.options = r,
      i.length > 2 || i[0] !== "" || i[1] !== ""
        ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i)
        : this._$AH = _;
  }
  _$AI(t, n = this, i, o) {
    const r = this.strings;
    let s = !1;
    if (r === void 0) {
      t = Y(this, t, n, 0),
        s = !st(t) || t !== this._$AH && t !== X,
        s && (this._$AH = t);
    } else {
      const l = t;
      let c, a;
      for (t = r[0], c = 0; c < r.length - 1; c++) {
        a = Y(this, l[i + c], n, c),
          a === X && (a = this._$AH[c]),
          s || (s = !st(a) || a !== this._$AH[c]),
          a === _ ? t = _ : t !== _ && (t += (a ?? "") + r[c + 1]),
          this._$AH[c] = a;
      }
    }
    s && !o && this.j(t);
  }
  j(t) {
    t === _
      ? this.element.removeAttribute(this.name)
      : this.element.setAttribute(this.name, t ?? "");
  }
}
class Ne extends yt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === _ ? void 0 : t;
  }
}
class Ue extends yt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== _);
  }
}
class ke extends yt {
  constructor(t, n, i, o, r) {
    super(t, n, i, o, r), this.type = 5;
  }
  _$AI(t, n = this) {
    if ((t = Y(this, t, n, 0) ?? _) === X) return;
    const i = this._$AH,
      o = t === _ && i !== _ || t.capture !== i.capture || t.once !== i.once ||
        t.passive !== i.passive,
      r = t !== _ && (i === _ || o);
    o && this.element.removeEventListener(this.name, this, i),
      r && this.element.addEventListener(this.name, this, t),
      this._$AH = t;
  }
  handleEvent(t) {
    var n;
    typeof this._$AH == "function"
      ? this._$AH.call(
        ((n = this.options) == null ? void 0 : n.host) ?? this.element,
        t,
      )
      : this._$AH.handleEvent(t);
  }
}
class Be {
  constructor(t, n, i) {
    this.element = t,
      this.type = 6,
      this._$AN = void 0,
      this._$AM = n,
      this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    Y(this, t);
  }
}
const At = it.litHtmlPolyfillSupport;
At == null || At(rt, lt),
  (it.litHtmlVersions ?? (it.litHtmlVersions = [])).push("3.1.4");
const Fe = (e, t, n) => {
  const i = (n == null ? void 0 : n.renderBefore) ?? t;
  let o = i._$litPart$;
  if (o === void 0) {
    const r = (n == null ? void 0 : n.renderBefore) ?? null;
    i._$litPart$ = o = new lt(t.insertBefore(ot(), r), r, void 0, n ?? {});
  }
  return o._$AI(e), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class I extends V {
  constructor() {
    super(...arguments),
      this.renderOptions = { host: this },
      this._$Do = void 0;
  }
  createRenderRoot() {
    var n;
    const t = super.createRenderRoot();
    return (n = this.renderOptions).renderBefore ??
      (n.renderBefore = t.firstChild),
      t;
  }
  update(t) {
    const n = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
      super.update(t),
      this._$Do = Fe(n, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this._$Do) == null || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this._$Do) == null || t.setConnected(!1);
  }
  render() {
    return X;
  }
}
var te;
I._$litElement$ = !0,
  I.finalized = !0,
  (te = globalThis.litElementHydrateSupport) == null ||
  te.call(globalThis, { LitElement: I });
const Et = globalThis.litElementPolyfillSupport;
Et == null || Et({ LitElement: I });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push(
  "4.0.6",
);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const We = (e) => (t, n) => {
  n !== void 0
    ? n.addInitializer(() => {
      customElements.define(e, t);
    })
    : customElements.define(e, t);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ze = {
    attribute: !0,
    type: String,
    converter: ft,
    reflect: !1,
    hasChanged: Rt,
  },
  je = (e = ze, t, n) => {
    const { kind: i, metadata: o } = n;
    let r = globalThis.litPropertyMetadata.get(o);
    if (
      r === void 0 &&
      globalThis.litPropertyMetadata.set(o, r = /* @__PURE__ */ new Map()),
        r.set(n.name, e),
        i === "accessor"
    ) {
      const { name: s } = n;
      return {
        set(l) {
          const c = t.get.call(this);
          t.set.call(this, l), this.requestUpdate(s, c, e);
        },
        init(l) {
          return l !== void 0 && this.P(s, void 0, e), l;
        },
      };
    }
    if (i === "setter") {
      const { name: s } = n;
      return function (l) {
        const c = this[s];
        t.call(this, l), this.requestUpdate(s, c, e);
      };
    }
    throw Error("Unsupported decorator location: " + i);
  };
function Ve(e) {
  return (t, n) =>
    typeof n == "object" ? je(e, t, n) : ((i, o, r) => {
      const s = o.hasOwnProperty(r);
      return o.constructor.createProperty(r, s ? { ...i, wrapped: !0 } : i),
        s ? Object.getOwnPropertyDescriptor(o, r) : void 0;
    })(e, t, n);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ce = (
  e,
  t,
  n,
) => (n.configurable = !0,
  n.enumerable = !0,
  Reflect.decorate && typeof t != "object" && Object.defineProperty(e, t, n),
  n);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Ie(e, t) {
  return (n, i, o) => {
    const r = (s) => {
      var l;
      return ((l = s.renderRoot) == null ? void 0 : l.querySelector(e)) ?? null;
    };
    return ce(n, i, {
      get() {
        return r(this);
      },
    });
  };
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function qe(e) {
  return (t, n) => {
    const { slot: i, selector: o } = e ?? {},
      r = "slot" + (i ? `[name=${i}]` : ":not([name])");
    return ce(t, n, {
      get() {
        var c;
        const s = (c = this.renderRoot) == null ? void 0 : c.querySelector(r),
          l = (s == null ? void 0 : s.assignedElements(e)) ?? [];
        return o === void 0 ? l : l.filter((a) => a.matches(o));
      },
    });
  };
}
const le = ["top", "right", "bottom", "left"],
  Vt = ["start", "end"],
  It = /* @__PURE__ */ le.reduce(
    (e, t) => e.concat(t, t + "-" + Vt[0], t + "-" + Vt[1]),
    [],
  ),
  M = Math.min,
  A = Math.max,
  mt = Math.round,
  dt = Math.floor,
  N = (e) => ({
    x: e,
    y: e,
  }),
  Xe = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom",
  },
  Ye = {
    start: "end",
    end: "start",
  };
function qt(e, t, n) {
  return A(e, M(t, n));
}
function Z(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function j(e) {
  return e.split("-")[0];
}
function P(e) {
  return e.split("-")[1];
}
function ae(e) {
  return e === "x" ? "y" : "x";
}
function he(e) {
  return e === "y" ? "height" : "width";
}
function at(e) {
  return ["top", "bottom"].includes(j(e)) ? "y" : "x";
}
function de(e) {
  return ae(at(e));
}
function Ke(e, t, n) {
  n === void 0 && (n = !1);
  const i = P(e), o = de(e), r = he(o);
  let s = o === "x"
    ? i === (n ? "end" : "start") ? "right" : "left"
    : i === "start"
    ? "bottom"
    : "top";
  return t.reference[r] > t.floating[r] && (s = Xt(s)), [s, Xt(s)];
}
function Je(e) {
  return e.replace(/start|end/g, (t) => Ye[t]);
}
function Xt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Xe[t]);
}
function Ze(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e,
  };
}
function Ge(e) {
  return typeof e != "number" ? Ze(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e,
  };
}
function gt(e) {
  const {
    x: t,
    y: n,
    width: i,
    height: o,
  } = e;
  return {
    width: i,
    height: o,
    top: n,
    left: t,
    right: t + i,
    bottom: n + o,
    x: t,
    y: n,
  };
}
function Yt(e, t, n) {
  let {
    reference: i,
    floating: o,
  } = e;
  const r = at(t),
    s = de(t),
    l = he(s),
    c = j(t),
    a = r === "y",
    d = i.x + i.width / 2 - o.width / 2,
    h = i.y + i.height / 2 - o.height / 2,
    f = i[l] / 2 - o[l] / 2;
  let u;
  switch (c) {
    case "top":
      u = {
        x: d,
        y: i.y - o.height,
      };
      break;
    case "bottom":
      u = {
        x: d,
        y: i.y + i.height,
      };
      break;
    case "right":
      u = {
        x: i.x + i.width,
        y: h,
      };
      break;
    case "left":
      u = {
        x: i.x - o.width,
        y: h,
      };
      break;
    default:
      u = {
        x: i.x,
        y: i.y,
      };
  }
  switch (P(t)) {
    case "start":
      u[s] -= f * (n && a ? -1 : 1);
      break;
    case "end":
      u[s] += f * (n && a ? -1 : 1);
      break;
  }
  return u;
}
const Qe = async (e, t, n) => {
  const {
      placement: i = "bottom",
      strategy: o = "absolute",
      middleware: r = [],
      platform: s,
    } = n,
    l = r.filter(Boolean),
    c = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let a = await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o,
    }),
    {
      x: d,
      y: h,
    } = Yt(a, i, c),
    f = i,
    u = {},
    m = 0;
  for (let g = 0; g < l.length; g++) {
    const {
        name: y,
        fn: p,
      } = l[g],
      {
        x: v,
        y: w,
        data: x,
        reset: $,
      } = await p({
        x: d,
        y: h,
        initialPlacement: i,
        placement: f,
        strategy: o,
        middlewareData: u,
        rects: a,
        platform: s,
        elements: {
          reference: e,
          floating: t,
        },
      });
    d = v ?? d,
      h = w ?? h,
      u = {
        ...u,
        [y]: {
          ...u[y],
          ...x,
        },
      },
      $ && m <= 50 &&
      (m++,
        typeof $ == "object" &&
        ($.placement && (f = $.placement),
          $.rects && (a = $.rects === !0
            ? await s.getElementRects({
              reference: e,
              floating: t,
              strategy: o,
            })
            : $.rects),
          {
            x: d,
            y: h,
          } = Yt(a, f, c)),
        g = -1);
  }
  return {
    x: d,
    y: h,
    placement: f,
    strategy: o,
    middlewareData: u,
  };
};
async function K(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
      x: i,
      y: o,
      platform: r,
      rects: s,
      elements: l,
      strategy: c,
    } = e,
    {
      boundary: a = "clippingAncestors",
      rootBoundary: d = "viewport",
      elementContext: h = "floating",
      altBoundary: f = !1,
      padding: u = 0,
    } = Z(t, e),
    m = Ge(u),
    y = l[f ? h === "floating" ? "reference" : "floating" : h],
    p = gt(
      await r.getClippingRect({
        element:
          (n = await (r.isElement == null ? void 0 : r.isElement(y))) == null ||
            n
            ? y
            : y.contextElement ||
              await (r.getDocumentElement == null
                ? void 0
                : r.getDocumentElement(l.floating)),
        boundary: a,
        rootBoundary: d,
        strategy: c,
      }),
    ),
    v = h === "floating"
      ? {
        x: i,
        y: o,
        width: s.floating.width,
        height: s.floating.height,
      }
      : s.reference,
    w =
      await (r.getOffsetParent == null
        ? void 0
        : r.getOffsetParent(l.floating)),
    x = await (r.isElement == null ? void 0 : r.isElement(w))
      ? await (r.getScale == null ? void 0 : r.getScale(w)) || {
        x: 1,
        y: 1,
      }
      : {
        x: 1,
        y: 1,
      },
    $ = gt(
      r.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
          elements: l,
          rect: v,
          offsetParent: w,
          strategy: c,
        })
        : v,
    );
  return {
    top: (p.top - $.top + m.top) / x.y,
    bottom: ($.bottom - p.bottom + m.bottom) / x.y,
    left: (p.left - $.left + m.left) / x.x,
    right: ($.right - p.right + m.right) / x.x,
  };
}
function tn(e, t, n) {
  return (e
    ? [...n.filter((o) => P(o) === e), ...n.filter((o) => P(o) !== e)]
    : n.filter((o) => j(o) === o)).filter((o) =>
      e ? P(o) === e || (t ? Je(o) !== o : !1) : !0
    );
}
const en = function (e) {
  return e === void 0 && (e = {}), {
    name: "autoPlacement",
    options: e,
    async fn(t) {
      var n, i, o;
      const {
          rects: r,
          middlewareData: s,
          placement: l,
          platform: c,
          elements: a,
        } = t,
        {
          crossAxis: d = !1,
          alignment: h,
          allowedPlacements: f = It,
          autoAlignment: u = !0,
          ...m
        } = Z(e, t),
        g = h !== void 0 || f === It ? tn(h || null, u, f) : f,
        y = await K(t, m),
        p = ((n = s.autoPlacement) == null ? void 0 : n.index) || 0,
        v = g[p];
      if (v == null) {
        return {};
      }
      const w = Ke(
        v,
        r,
        await (c.isRTL == null ? void 0 : c.isRTL(a.floating)),
      );
      if (l !== v) {
        return {
          reset: {
            placement: g[0],
          },
        };
      }
      const x = [y[j(v)], y[w[0]], y[w[1]]],
        $ = [...((i = s.autoPlacement) == null ? void 0 : i.overflows) || [], {
          placement: v,
          overflows: x,
        }],
        C = g[p + 1];
      if (C) {
        return {
          data: {
            index: p + 1,
            overflows: $,
          },
          reset: {
            placement: C,
          },
        };
      }
      const Q = $.map((b) => {
          const H = P(b.placement);
          return [
            b.placement,
            H && d
              ? (
                // Check along the mainAxis and main crossAxis side.
                b.overflows.slice(0, 2).reduce((we, $e) => we + $e, 0)
              )
              : (
                // Check only the mainAxis.
                b.overflows[0]
              ),
            b.overflows,
          ];
        }).sort((b, H) => b[1] - H[1]),
        tt = ((o = Q.filter((b) =>
            b[2].slice(
              0,
              // Aligned placements should not check their opposite crossAxis
              // side.
              P(b[0]) ? 2 : 3,
            ).every((H) => H <= 0)
          )[0]) == null
          ? void 0
          : o[0]) || Q[0][0];
      return tt !== l
        ? {
          data: {
            index: p + 1,
            overflows: $,
          },
          reset: {
            placement: tt,
          },
        }
        : {};
    },
  };
};
function Kt(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function Jt(e) {
  return le.some((t) => e[t] >= 0);
}
const nn = function (e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
          rects: n,
        } = t,
        {
          strategy: i = "referenceHidden",
          ...o
        } = Z(e, t);
      switch (i) {
        case "referenceHidden": {
          const r = await K(t, {
              ...o,
              elementContext: "reference",
            }),
            s = Kt(r, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Jt(s),
            },
          };
        }
        case "escaped": {
          const r = await K(t, {
              ...o,
              altBoundary: !0,
            }),
            s = Kt(r, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Jt(s),
            },
          };
        }
        default:
          return {};
      }
    },
  };
};
async function on(e, t) {
  const {
      placement: n,
      platform: i,
      elements: o,
    } = e,
    r = await (i.isRTL == null ? void 0 : i.isRTL(o.floating)),
    s = j(n),
    l = P(n),
    c = at(n) === "y",
    a = ["left", "top"].includes(s) ? -1 : 1,
    d = r && c ? -1 : 1,
    h = Z(t, e);
  let {
    mainAxis: f,
    crossAxis: u,
    alignmentAxis: m,
  } = typeof h == "number"
    ? {
      mainAxis: h,
      crossAxis: 0,
      alignmentAxis: null,
    }
    : {
      mainAxis: 0,
      crossAxis: 0,
      alignmentAxis: null,
      ...h,
    };
  return l && typeof m == "number" && (u = l === "end" ? m * -1 : m),
    c
      ? {
        x: u * d,
        y: f * a,
      }
      : {
        x: f * a,
        y: u * d,
      };
}
const sn = function (e) {
    return e === void 0 && (e = 0), {
      name: "offset",
      options: e,
      async fn(t) {
        var n, i;
        const {
            x: o,
            y: r,
            placement: s,
            middlewareData: l,
          } = t,
          c = await on(t, e);
        return s === ((n = l.offset) == null ? void 0 : n.placement) &&
            (i = l.arrow) != null && i.alignmentOffset
          ? {}
          : {
            x: o + c.x,
            y: r + c.y,
            data: {
              ...c,
              placement: s,
            },
          };
      },
    };
  },
  rn = function (e) {
    return e === void 0 && (e = {}), {
      name: "shift",
      options: e,
      async fn(t) {
        const {
            x: n,
            y: i,
            placement: o,
          } = t,
          {
            mainAxis: r = !0,
            crossAxis: s = !1,
            limiter: l = {
              fn: (y) => {
                let {
                  x: p,
                  y: v,
                } = y;
                return {
                  x: p,
                  y: v,
                };
              },
            },
            ...c
          } = Z(e, t),
          a = {
            x: n,
            y: i,
          },
          d = await K(t, c),
          h = at(j(o)),
          f = ae(h);
        let u = a[f], m = a[h];
        if (r) {
          const y = f === "y" ? "top" : "left",
            p = f === "y" ? "bottom" : "right",
            v = u + d[y],
            w = u - d[p];
          u = qt(v, u, w);
        }
        if (s) {
          const y = h === "y" ? "top" : "left",
            p = h === "y" ? "bottom" : "right",
            v = m + d[y],
            w = m - d[p];
          m = qt(v, m, w);
        }
        const g = l.fn({
          ...t,
          [f]: u,
          [h]: m,
        });
        return {
          ...g,
          data: {
            x: g.x - n,
            y: g.y - i,
          },
        };
      },
    };
  },
  cn = function (e) {
    return e === void 0 && (e = {}), {
      name: "size",
      options: e,
      async fn(t) {
        const {
            placement: n,
            rects: i,
            platform: o,
            elements: r,
          } = t,
          {
            apply: s = () => {
            },
            ...l
          } = Z(e, t),
          c = await K(t, l),
          a = j(n),
          d = P(n),
          h = at(n) === "y",
          {
            width: f,
            height: u,
          } = i.floating;
        let m, g;
        a === "top" || a === "bottom"
          ? (m = a,
            g = d === (await (o.isRTL == null ? void 0 : o.isRTL(r.floating))
                ? "start"
                : "end")
              ? "left"
              : "right")
          : (g = a, m = d === "end" ? "top" : "bottom");
        const y = u - c.top - c.bottom,
          p = f - c.left - c.right,
          v = M(u - c[m], y),
          w = M(f - c[g], p),
          x = !t.middlewareData.shift;
        let $ = v, C = w;
        if (h ? C = d || x ? M(w, p) : p : $ = d || x ? M(v, y) : y, x && !d) {
          const _t = A(c.left, 0),
            tt = A(c.right, 0),
            b = A(c.top, 0),
            H = A(c.bottom, 0);
          h
            ? C = f - 2 * (_t !== 0 || tt !== 0 ? _t + tt : A(c.left, c.right))
            : $ = u - 2 * (b !== 0 || H !== 0 ? b + H : A(c.top, c.bottom));
        }
        await s({
          ...t,
          availableWidth: C,
          availableHeight: $,
        });
        const Q = await o.getDimensions(r.floating);
        return f !== Q.width || u !== Q.height
          ? {
            reset: {
              rects: !0,
            },
          }
          : {};
      },
    };
  };
function G(e) {
  return ue(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function E(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null
    ? void 0
    : t.defaultView) || window;
}
function T(e) {
  var t;
  return (t = (ue(e) ? e.ownerDocument : e.document) || globalThis.document) ==
      null
    ? void 0
    : t.documentElement;
}
function ue(e) {
  return e instanceof Node || e instanceof E(e).Node;
}
function O(e) {
  return e instanceof Element || e instanceof E(e).Element;
}
function R(e) {
  return e instanceof HTMLElement || e instanceof E(e).HTMLElement;
}
function Zt(e) {
  return typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof E(e).ShadowRoot;
}
function ht(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: i,
    display: o,
  } = S(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + i + n) &&
    !["inline", "contents"].includes(o);
}
function ln(e) {
  return ["table", "td", "th"].includes(G(e));
}
function vt(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Pt(e) {
  const t = Tt(), n = S(e);
  return n.transform !== "none" || n.perspective !== "none" ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) ||
    !t && (n.filter ? n.filter !== "none" : !1) ||
    ["transform", "perspective", "filter"].some((i) =>
      (n.willChange || "").includes(i)
    ) ||
    ["paint", "layout", "strict", "content"].some((i) =>
      (n.contain || "").includes(i)
    );
}
function an(e) {
  let t = U(e);
  for (; R(t) && !J(t);) {
    if (vt(t)) {
      return null;
    }
    if (Pt(t)) {
      return t;
    }
    t = U(t);
  }
  return null;
}
function Tt() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function J(e) {
  return ["html", "body", "#document"].includes(G(e));
}
function S(e) {
  return E(e).getComputedStyle(e);
}
function wt(e) {
  return O(e)
    ? {
      scrollLeft: e.scrollLeft,
      scrollTop: e.scrollTop,
    }
    : {
      scrollLeft: e.scrollX,
      scrollTop: e.scrollY,
    };
}
function U(e) {
  if (G(e) === "html") {
    return e;
  }
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Zt(e) && e.host || // Fallback.
    T(e)
  );
  return Zt(t) ? t.host : t;
}
function fe(e) {
  const t = U(e);
  return J(t)
    ? e.ownerDocument ? e.ownerDocument.body : e.body
    : R(t) && ht(t)
    ? t
    : fe(t);
}
function ct(e, t, n) {
  var i;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = fe(e),
    r = o === ((i = e.ownerDocument) == null ? void 0 : i.body),
    s = E(o);
  return r
    ? t.concat(
      s,
      s.visualViewport || [],
      ht(o) ? o : [],
      s.frameElement && n ? ct(s.frameElement) : [],
    )
    : t.concat(o, ct(o, [], n));
}
function pe(e) {
  const t = S(e);
  let n = parseFloat(t.width) || 0, i = parseFloat(t.height) || 0;
  const o = R(e),
    r = o ? e.offsetWidth : n,
    s = o ? e.offsetHeight : i,
    l = mt(n) !== r || mt(i) !== s;
  return l && (n = r, i = s), {
    width: n,
    height: i,
    $: l,
  };
}
function Ht(e) {
  return O(e) ? e : e.contextElement;
}
function q(e) {
  const t = Ht(e);
  if (!R(t)) {
    return N(1);
  }
  const n = t.getBoundingClientRect(),
    {
      width: i,
      height: o,
      $: r,
    } = pe(t);
  let s = (r ? mt(n.width) : n.width) / i,
    l = (r ? mt(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1),
    (!l || !Number.isFinite(l)) && (l = 1),
    {
      x: s,
      y: l,
    };
}
const hn = /* @__PURE__ */ N(0);
function me(e) {
  const t = E(e);
  return !Tt() || !t.visualViewport ? hn : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop,
  };
}
function dn(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== E(e) ? !1 : t;
}
function z(e, t, n, i) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), r = Ht(e);
  let s = N(1);
  t && (i ? O(i) && (s = q(i)) : s = q(e));
  const l = dn(r, n, i) ? me(r) : N(0);
  let c = (o.left + l.x) / s.x,
    a = (o.top + l.y) / s.y,
    d = o.width / s.x,
    h = o.height / s.y;
  if (r) {
    const f = E(r), u = i && O(i) ? E(i) : i;
    let m = f, g = m.frameElement;
    for (; g && i && u !== m;) {
      const y = q(g),
        p = g.getBoundingClientRect(),
        v = S(g),
        w = p.left + (g.clientLeft + parseFloat(v.paddingLeft)) * y.x,
        x = p.top + (g.clientTop + parseFloat(v.paddingTop)) * y.y;
      c *= y.x,
        a *= y.y,
        d *= y.x,
        h *= y.y,
        c += w,
        a += x,
        m = E(g),
        g = m.frameElement;
    }
  }
  return gt({
    width: d,
    height: h,
    x: c,
    y: a,
  });
}
function un(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: i,
    strategy: o,
  } = e;
  const r = o === "fixed", s = T(i), l = t ? vt(t.floating) : !1;
  if (i === s || l && r) {
    return n;
  }
  let c = {
      scrollLeft: 0,
      scrollTop: 0,
    },
    a = N(1);
  const d = N(0), h = R(i);
  if ((h || !h && !r) && ((G(i) !== "body" || ht(s)) && (c = wt(i)), R(i))) {
    const f = z(i);
    a = q(i), d.x = f.x + i.clientLeft, d.y = f.y + i.clientTop;
  }
  return {
    width: n.width * a.x,
    height: n.height * a.y,
    x: n.x * a.x - c.scrollLeft * a.x + d.x,
    y: n.y * a.y - c.scrollTop * a.y + d.y,
  };
}
function fn(e) {
  return Array.from(e.getClientRects());
}
function ge(e) {
  return z(T(e)).left + wt(e).scrollLeft;
}
function pn(e) {
  const t = T(e),
    n = wt(e),
    i = e.ownerDocument.body,
    o = A(t.scrollWidth, t.clientWidth, i.scrollWidth, i.clientWidth),
    r = A(t.scrollHeight, t.clientHeight, i.scrollHeight, i.clientHeight);
  let s = -n.scrollLeft + ge(e);
  const l = -n.scrollTop;
  return S(i).direction === "rtl" && (s += A(t.clientWidth, i.clientWidth) - o),
    {
      width: o,
      height: r,
      x: s,
      y: l,
    };
}
function mn(e, t) {
  const n = E(e), i = T(e), o = n.visualViewport;
  let r = i.clientWidth, s = i.clientHeight, l = 0, c = 0;
  if (o) {
    r = o.width, s = o.height;
    const a = Tt();
    (!a || a && t === "fixed") && (l = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: r,
    height: s,
    x: l,
    y: c,
  };
}
function gn(e, t) {
  const n = z(e, !0, t === "fixed"),
    i = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    r = R(e) ? q(e) : N(1),
    s = e.clientWidth * r.x,
    l = e.clientHeight * r.y,
    c = o * r.x,
    a = i * r.y;
  return {
    width: s,
    height: l,
    x: c,
    y: a,
  };
}
function Gt(e, t, n) {
  let i;
  if (t === "viewport") {
    i = mn(e, n);
  } else if (t === "document") {
    i = pn(T(e));
  } else if (O(t)) {
    i = gn(t, n);
  } else {
    const o = me(e);
    i = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y,
    };
  }
  return gt(i);
}
function ye(e, t) {
  const n = U(e);
  return n === t || !O(n) || J(n) ? !1 : S(n).position === "fixed" || ye(n, t);
}
function yn(e, t) {
  const n = t.get(e);
  if (n) {
    return n;
  }
  let i = ct(e, [], !1).filter((l) => O(l) && G(l) !== "body"), o = null;
  const r = S(e).position === "fixed";
  let s = r ? U(e) : e;
  for (; O(s) && !J(s);) {
    const l = S(s), c = Pt(s);
    !c && l.position === "fixed" && (o = null),
      (r ? !c && !o : !c && l.position === "static" && !!o &&
            ["absolute", "fixed"].includes(o.position) ||
          ht(s) && !c && ye(e, s))
        ? i = i.filter((d) => d !== s)
        : o = l,
      s = U(s);
  }
  return t.set(e, i), i;
}
function vn(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: i,
    strategy: o,
  } = e;
  const s = [
      ...n === "clippingAncestors" ? vt(t) ? [] : yn(t, this._c) : [].concat(n),
      i,
    ],
    l = s[0],
    c = s.reduce((a, d) => {
      const h = Gt(t, d, o);
      return a.top = A(h.top, a.top),
        a.right = M(h.right, a.right),
        a.bottom = M(h.bottom, a.bottom),
        a.left = A(h.left, a.left),
        a;
    }, Gt(t, l, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top,
  };
}
function wn(e) {
  const {
    width: t,
    height: n,
  } = pe(e);
  return {
    width: t,
    height: n,
  };
}
function $n(e, t, n) {
  const i = R(t), o = T(t), r = n === "fixed", s = z(e, !0, r, t);
  let l = {
    scrollLeft: 0,
    scrollTop: 0,
  };
  const c = N(0);
  if (i || !i && !r) {
    if ((G(t) !== "body" || ht(o)) && (l = wt(t)), i) {
      const h = z(t, !0, r, t);
      c.x = h.x + t.clientLeft, c.y = h.y + t.clientTop;
    } else o && (c.x = ge(o));
  }
  const a = s.left + l.scrollLeft - c.x, d = s.top + l.scrollTop - c.y;
  return {
    x: a,
    y: d,
    width: s.width,
    height: s.height,
  };
}
function St(e) {
  return S(e).position === "static";
}
function Qt(e, t) {
  return !R(e) || S(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function ve(e, t) {
  const n = E(e);
  if (vt(e)) {
    return n;
  }
  if (!R(e)) {
    let o = U(e);
    for (; o && !J(o);) {
      if (O(o) && !St(o)) {
        return o;
      }
      o = U(o);
    }
    return n;
  }
  let i = Qt(e, t);
  for (; i && ln(i) && St(i);) {
    i = Qt(i, t);
  }
  return i && J(i) && St(i) && !Pt(i) ? n : i || an(e) || n;
}
const _n = async function (e) {
  const t = this.getOffsetParent || ve,
    n = this.getDimensions,
    i = await n(e.floating);
  return {
    reference: $n(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: i.width,
      height: i.height,
    },
  };
};
function xn(e) {
  return S(e).direction === "rtl";
}
const bn = {
  convertOffsetParentRelativeRectToViewportRelativeRect: un,
  getDocumentElement: T,
  getClippingRect: vn,
  getOffsetParent: ve,
  getElementRects: _n,
  getClientRects: fn,
  getDimensions: wn,
  getScale: q,
  isElement: O,
  isRTL: xn,
};
function An(e, t) {
  let n = null, i;
  const o = T(e);
  function r() {
    var l;
    clearTimeout(i), (l = n) == null || l.disconnect(), n = null;
  }
  function s(l, c) {
    l === void 0 && (l = !1), c === void 0 && (c = 1), r();
    const {
      left: a,
      top: d,
      width: h,
      height: f,
    } = e.getBoundingClientRect();
    if (l || t(), !h || !f) {
      return;
    }
    const u = dt(d),
      m = dt(o.clientWidth - (a + h)),
      g = dt(o.clientHeight - (d + f)),
      y = dt(a),
      v = {
        rootMargin: -u + "px " + -m + "px " + -g + "px " + -y + "px",
        threshold: A(0, M(1, c)) || 1,
      };
    let w = !0;
    function x($) {
      const C = $[0].intersectionRatio;
      if (C !== c) {
        if (!w) {
          return s();
        }
        C ? s(!1, C) : i = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      w = !1;
    }
    try {
      n = new IntersectionObserver(x, {
        ...v,
        // Handle <iframe>s
        root: o.ownerDocument,
      });
    } catch {
      n = new IntersectionObserver(x, v);
    }
    n.observe(e);
  }
  return s(!0), r;
}
function En(e, t, n, i) {
  i === void 0 && (i = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: r = !0,
      elementResize: s = typeof ResizeObserver == "function",
      layoutShift: l = typeof IntersectionObserver == "function",
      animationFrame: c = !1,
    } = i,
    a = Ht(e),
    d = o || r ? [...a ? ct(a) : [], ...ct(t)] : [];
  d.forEach((p) => {
    o && p.addEventListener("scroll", n, {
      passive: !0,
    }), r && p.addEventListener("resize", n);
  });
  const h = a && l ? An(a, n) : null;
  let f = -1, u = null;
  s && (u = new ResizeObserver((p) => {
    let [v] = p;
    v && v.target === a && u &&
    (u.unobserve(t),
      cancelAnimationFrame(f),
      f = requestAnimationFrame(() => {
        var w;
        (w = u) == null || w.observe(t);
      })), n();
  }),
    a && !c && u.observe(a),
    u.observe(t));
  let m, g = c ? z(e) : null;
  c && y();
  function y() {
    const p = z(e);
    g &&
    (p.x !== g.x || p.y !== g.y || p.width !== g.width ||
      p.height !== g.height) &&
    n(),
      g = p,
      m = requestAnimationFrame(y);
  }
  return n(), () => {
    var p;
    d.forEach((v) => {
      o && v.removeEventListener("scroll", n),
        r && v.removeEventListener("resize", n);
    }),
      h == null || h(),
      (p = u) == null || p.disconnect(),
      u = null,
      c && cancelAnimationFrame(m);
  };
}
const Sn = K,
  Cn = sn,
  On = en,
  Rn = rn,
  Pn = cn,
  Tn = nn,
  Hn = (e, t, n) => {
    const i = /* @__PURE__ */ new Map(),
      o = {
        platform: bn,
        ...n,
      },
      r = {
        ...o.platform,
        _c: i,
      };
    return Qe(e, t, {
      ...o,
      platform: r,
    });
  };
var Ln = Object.defineProperty,
  Mn = Object.getOwnPropertyDescriptor,
  $t = (e, t, n, i) => {
    for (
      var o = i > 1 ? void 0 : i ? Mn(t, n) : t, r = e.length - 1, s;
      r >= 0;
      r--
    ) {
      (s = e[r]) && (o = (i ? s(t, n, o) : s(o)) || o);
    }
    return i && o && Ln(t, n, o), o;
  };
let k = class extends I {
  constructor() {
    super(...arguments), this.open = !1;
  }
  firstUpdated() {
    this.addEventListener("focus", () => this.focus()),
      document.addEventListener("click", this.clickOutsideHandler.bind(this));
  }
  async updated() {
    this._handleFloatingStyles();
  }
  async disconnectedCallback() {
    super.disconnectedCallback(),
      this.removeEventListener("focus", () => this.focus()),
      document.removeEventListener(
        "click",
        this.clickOutsideHandler.bind(this),
      ),
      this._cleanup && this._cleanup();
  }
  render() {
    return zt`
			<slot name="summary" tabindex="0" @click=${this._toggleOpen}></slot>
			${
      this.open
        ? zt`
						<div part="dropmenu">
							<div part="dropmenu__inner">
								<slot></slot>
							</div>
						</div>
				  `
        : _
    }
		`;
  }
  clickOutsideHandler(e) {
    var i;
    const t = e.composedPath()[0],
      n = !((i = this.shadowRoot) != null && i.contains(t)) &&
        !this.contains(t);
    this.open && n && (this.open = !1);
  }
  _toggleOpen() {
    this._cleanup && this._cleanup(), this.open = !this.open;
  }
  _roundByDPR(e) {
    const t = globalThis.devicePixelRatio || 1;
    return Math.round(e * t) / t;
  }
  _handleFloatingStyles() {
    this._dropsummary && this._dropmenu && this.open
      ? this._cleanup = En(
        this._dropsummary[0],
        this._dropmenu,
        async () => {
          await Hn(this._dropsummary[0], this._dropmenu, {
            middleware: [
              On({
                autoAlignment: !0,
                alignment: "bottom",
                allowedPlacements: ["top", "bottom"],
                crossAxis: !0,
                padding: 3,
              }),
              Cn(3),
              Rn({
                crossAxis: !0,
                mainAxis: !0,
                padding: 3,
              }),
              Pn({
                apply({ rects: e, elements: t }) {
                  Object.assign(t.floating.style, {
                    width: `${e.reference.width}px`,
                  });
                },
              }),
              {
                name: "detectOverflow",
                async fn(e) {
                  return await Sn(e, {
                    altBoundary: !0,
                    boundary: document.documentElement,
                    elementContext: "floating",
                    padding: 3,
                    rootBoundary: {
                      x: 0,
                      y: 0,
                      width: document.documentElement.clientWidth,
                      height: document.documentElement.clientHeight,
                    },
                  }),
                    {};
                },
              },
              Tn(),
            ],
            placement: "bottom",
            strategy: "fixed",
          }).then(({ x: e, y: t, middlewareData: n }) => {
            n.hide && Object.assign(this._dropmenu.style, {
              opacity: n.hide.referenceHidden ? "0" : "1",
              pointerEvents: n.hide.referenceHidden ? "none" : "initial",
              // visibility: middlewareData.hide.referenceHidden
              // 	? 'hidden'
              // 	: 'visible',
            }),
              Object.assign(this._dropmenu.style, {
                inset: "0",
                transform: `translate(${
                  this._roundByDPR(
                    e,
                  )
                }px, ${this._roundByDPR(t)}px)`,
              });
          });
        },
        { animationFrame: !0 },
      )
      : this._cleanup && (this._cleanup(), this._cleanup = void 0);
  }
};
k.styles = xe`
		:host(:is(ly-dropdown)) {
			display: inline-flex;
			min-height: 0;
			position: relative;
			width: fit-content;
			visibility: hidden;
		}

		:host(:is(ly-dropdown)) > * {
			visibility: visible;
		}

		:host(:is(ly-dropdown[open]))::part(dropmenu) {
			--bg: var(--clr-background);
			--gap: 0;
			--outln-clr: var(--bg);
			--radius: var(--scale-sm);
			--spacing: var(--scale-5xs);

			background-color: var(--bg);
			border-radius: var(--radius);
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: 1fr;
			height: max-content;
			isolation: isolate;
			max-height: calc(clamp(16dvh, 25dvh, 32dvh) + var(--scale-5xl));
			max-width: calc(100dvw - var(--scale-sm));
			min-height: max-content;
			min-width: max-content;
			outline: solid
				color-mix(
					in var(--prefers-colorSpace, srgb),
					var(--outln-clr),
					gray 16%
				);
			overflow: clip;
			padding: var(--spacing);
			place-content: center;
			position: fixed;
			transition: top var(--animDefaults), bottom var(--animDefaults),
				opacity var(--animDefaults), visbility var(--animDefaults);
			z-index: 1000000;
		}

		:host(:is(ly-dropdown[open]))::part(dropmenu__inner) {
			--percent: 16%;

			background-color: var(--bg);
			border-radius: calc(var(--radius) / 2);
			display: grid;
			grid-auto-flow: row;
			grid-auto-rows: max-content;
			overflow-x: clip;
			overflow-y: auto;
			transition-delay: var(--animDuration);
		}

		div::-webkit-scrollbar {
			display: none;
		}

		div ::slotted(button) {
			--radius: calc(var(--scale-sm) / 2) !important;
			width: 100% !important;
		}
	`;
k.properties = {
  delegatesFocus: { type: Boolean, reflect: !0 },
};
k.shadowRootOptions = {
  ...I.shadowRootOptions,
  delegatesFocus: !0,
};
$t(
  [
    Ve({ type: Boolean, reflect: !0 }),
  ],
  k.prototype,
  "open",
  2,
);
$t(
  [
    qe({ slot: "summary", flatten: !0 }),
  ],
  k.prototype,
  "_dropsummary",
  2,
);
$t(
  [
    Ie('div[part="dropmenu"]'),
  ],
  k.prototype,
  "_dropmenu",
  2,
);
k = $t([
  We("ly-dropdown"),
], k);
export { k as Dropdown };
