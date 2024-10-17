/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ht = globalThis,
  bt = ht.ShadowRoot && (ht.ShadyCSS === void 0 || ht.ShadyCSS.nativeShadow) &&
    "adoptedStyleSheets" in Document.prototype &&
    "replace" in CSSStyleSheet.prototype,
  At = Symbol(),
  Pt = /* @__PURE__ */ new WeakMap();
let Jt = class {
  constructor(t, n, i) {
    if (this._$cssResult$ = !0, i !== At) {
      throw Error(
        "CSSResult is not constructable. Use `unsafeCSS` or `css` instead.",
      );
    }
    this.cssText = t, this.t = n;
  }
  get styleSheet() {
    let t = this.o;
    const n = this.t;
    if (bt && t === void 0) {
      const i = n !== void 0 && n.length === 1;
      i && (t = Pt.get(n)),
        t === void 0 &&
        ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText),
          i && Pt.set(n, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const ye = (e) => new Jt(typeof e == "string" ? e : e + "", void 0, At),
  ve = (e, ...t) => {
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
    return new Jt(n, e, At);
  },
  $e = (e, t) => {
    if (bt) {
      e.adoptedStyleSheets = t.map((n) =>
        n instanceof CSSStyleSheet ? n : n.styleSheet
      );
    } else {for (const n of t) {
        const i = document.createElement("style"), o = ht.litNonce;
        o !== void 0 && i.setAttribute("nonce", o),
          i.textContent = n.cssText,
          e.appendChild(i);
      }}
  },
  Tt = bt ? (e) => e : (e) =>
    e instanceof CSSStyleSheet
      ? ((t) => {
        let n = "";
        for (const i of t.cssRules) n += i.cssText;
        return ye(n);
      })(e)
      : e;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const {
    is: we,
    defineProperty: _e,
    getOwnPropertyDescriptor: xe,
    getOwnPropertyNames: be,
    getOwnPropertySymbols: Ae,
    getPrototypeOf: Ee,
  } = Object,
  mt = globalThis,
  Ht = mt.trustedTypes,
  Se = Ht ? Ht.emptyScript : "",
  Ce = mt.reactiveElementPolyfillSupport,
  et = (e, t) => e,
  dt = {
    toAttribute(e, t) {
      switch (t) {
        case Boolean:
          e = e ? Se : null;
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
  Et = (e, t) => !we(e, t),
  Lt = {
    attribute: !0,
    type: String,
    converter: dt,
    reflect: !1,
    hasChanged: Et,
  };
Symbol.metadata ??= Symbol("metadata"),
  mt.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
class j extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ??= []).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, n = Lt) {
    if (
      n.state && (n.attribute = !1),
        this._$Ei(),
        this.elementProperties.set(t, n),
        !n.noAccessor
    ) {
      const i = Symbol(), o = this.getPropertyDescriptor(t, i, n);
      o !== void 0 && _e(this.prototype, t, o);
    }
  }
  static getPropertyDescriptor(t, n, i) {
    const { get: o, set: r } = xe(this.prototype, t) ?? {
      get() {
        return this[n];
      },
      set(s) {
        this[n] = s;
      },
    };
    return {
      get() {
        return o?.call(this);
      },
      set(s) {
        const l = o?.call(this);
        r.call(this, s), this.requestUpdate(t, l, i);
      },
      configurable: !0,
      enumerable: !0,
    };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Lt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(et("elementProperties"))) return;
    const t = Ee(this);
    t.finalize(),
      t.l !== void 0 && (this.l = [...t.l]),
      this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(et("finalized"))) return;
    if (
      this.finalized = !0, this._$Ei(), this.hasOwnProperty(et("properties"))
    ) {
      const n = this.properties, i = [...be(n), ...Ae(n)];
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
      for (const o of i) n.unshift(Tt(o));
    } else t !== void 0 && n.push(Tt(t));
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
    this._$ES = new Promise((t) => this.enableUpdating = t),
      this._$AL = /* @__PURE__ */ new Map(),
      this._$E_(),
      this.requestUpdate(),
      this.constructor.l?.forEach((t) => t(this));
  }
  addController(t) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(t),
      this.renderRoot !== void 0 && this.isConnected && t.hostConnected?.();
  }
  removeController(t) {
    this._$EO?.delete(t);
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
    return $e(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(),
      this.enableUpdating(!0),
      this._$EO?.forEach((t) => t.hostConnected?.());
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((t) => t.hostDisconnected?.());
  }
  attributeChangedCallback(t, n, i) {
    this._$AK(t, i);
  }
  _$EC(t, n) {
    const i = this.constructor.elementProperties.get(t),
      o = this.constructor._$Eu(t, i);
    if (o !== void 0 && i.reflect === !0) {
      const r = (i.converter?.toAttribute !== void 0 ? i.converter : dt)
        .toAttribute(n, i.type);
      this._$Em = t,
        r == null ? this.removeAttribute(o) : this.setAttribute(o, r),
        this._$Em = null;
    }
  }
  _$AK(t, n) {
    const i = this.constructor, o = i._$Eh.get(t);
    if (o !== void 0 && this._$Em !== o) {
      const r = i.getPropertyOptions(o),
        s = typeof r.converter == "function"
          ? { fromAttribute: r.converter }
          : r.converter?.fromAttribute !== void 0
          ? r.converter
          : dt;
      this._$Em = o, this[o] = s.fromAttribute(n, r.type), this._$Em = null;
    }
  }
  requestUpdate(t, n, i) {
    if (t !== void 0) {
      if (
        i ??= this.constructor.getPropertyOptions(t),
          !(i.hasChanged ?? Et)(this[t], n)
      ) return;
      this.P(t, n, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(t, n, i) {
    this._$AL.has(t) || this._$AL.set(t, n),
      i.reflect === !0 && this._$Em !== t &&
      (this._$Ej ??= /* @__PURE__ */ new Set()).add(t);
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
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [o, r] of this._$Ep) this[o] = r;
        this._$Ep = void 0;
      }
      const i = this.constructor.elementProperties;
      if (i.size > 0) {
        for (const [o, r] of i) {
          r.wrapped !== !0 || this._$AL.has(o) || this[o] === void 0 ||
            this.P(o, this[o], r);
        }
      }
    }
    let t = !1;
    const n = this._$AL;
    try {
      t = this.shouldUpdate(n),
        t
          ? (this.willUpdate(n),
            this._$EO?.forEach((i) => i.hostUpdate?.()),
            this.update(n))
          : this._$EU();
    } catch (i) {
      throw t = !1, this._$EU(), i;
    }
    t && this._$AE(n);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    this._$EO?.forEach((n) => n.hostUpdated?.()),
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
    this._$Ej &&= this._$Ej.forEach((n) => this._$EC(n, this[n])), this._$EU();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
}
j.elementStyles = [],
  j.shadowRootOptions = { mode: "open" },
  j[et("elementProperties")] = /* @__PURE__ */ new Map(),
  j[et("finalized")] = /* @__PURE__ */ new Map(),
  Ce?.({ ReactiveElement: j }),
  (mt.reactiveElementVersions ??= []).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const St = globalThis,
  ut = St.trustedTypes,
  Mt = ut ? ut.createPolicy("lit-html", { createHTML: (e) => e }) : void 0,
  Gt = "$lit$",
  L = `lit$${Math.random().toFixed(9).slice(2)}$`,
  Qt = "?" + L,
  Oe = `<${Qt}>`,
  F = document,
  nt = () => F.createComment(""),
  it = (e) => e === null || typeof e != "object" && typeof e != "function",
  te = Array.isArray,
  Re = (e) => te(e) || typeof e?.[Symbol.iterator] == "function",
  _t = `[ 	
\f\r]`,
  tt = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  Dt = /-->/g,
  Nt = />/g,
  k = RegExp(
    `>|${_t}(?:([^\\s"'>=/]+)(${_t}*=${_t}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,
    "g",
  ),
  Ut = /'/g,
  kt = /"/g,
  ee = /^(?:script|style|textarea|title)$/i,
  Pe = (e) => (t, ...n) => ({ _$litType$: e, strings: t, values: n }),
  Bt = Pe(1),
  q = Symbol.for("lit-noChange"),
  _ = Symbol.for("lit-nothing"),
  Ft = /* @__PURE__ */ new WeakMap(),
  B = F.createTreeWalker(F, 129);
function ne(e, t) {
  if (!Array.isArray(e) || !e.hasOwnProperty("raw")) {
    throw Error("invalid template strings array");
  }
  return Mt !== void 0 ? Mt.createHTML(t) : t;
}
const Te = (e, t) => {
  const n = e.length - 1, i = [];
  let o, r = t === 2 ? "<svg>" : "", s = tt;
  for (let l = 0; l < n; l++) {
    const c = e[l];
    let a, d, h = -1, f = 0;
    for (; f < c.length && (s.lastIndex = f, d = s.exec(c), d !== null);) {
      f = s.lastIndex,
        s === tt
          ? d[1] === "!--"
            ? s = Dt
            : d[1] !== void 0
            ? s = Nt
            : d[2] !== void 0
            ? (ee.test(d[2]) && (o = RegExp("</" + d[2], "g")), s = k)
            : d[3] !== void 0 && (s = k)
          : s === k
          ? d[0] === ">"
            ? (s = o ?? tt, h = -1)
            : d[1] === void 0
            ? h = -2
            : (h = s.lastIndex - d[2].length,
              a = d[1],
              s = d[3] === void 0 ? k : d[3] === '"' ? kt : Ut)
          : s === kt || s === Ut
          ? s = k
          : s === Dt || s === Nt
          ? s = tt
          : (s = k, o = void 0);
    }
    const u = s === k && e[l + 1].startsWith("/>") ? " " : "";
    r += s === tt
      ? c + Oe
      : h >= 0
      ? (i.push(a), c.slice(0, h) + Gt + c.slice(h) + L + u)
      : c + L + (h === -2 ? l : u);
  }
  return [ne(e, r + (e[n] || "<?>") + (t === 2 ? "</svg>" : "")), i];
};
class ot {
  constructor({ strings: t, _$litType$: n }, i) {
    let o;
    this.parts = [];
    let r = 0, s = 0;
    const l = t.length - 1, c = this.parts, [a, d] = Te(t, n);
    if (
      this.el = ot.createElement(a, i), B.currentNode = this.el.content, n === 2
    ) {
      const h = this.el.content.firstChild;
      h.replaceWith(...h.childNodes);
    }
    for (; (o = B.nextNode()) !== null && c.length < l;) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) {
          for (const h of o.getAttributeNames()) {
            if (h.endsWith(Gt)) {
              const f = d[s++],
                u = o.getAttribute(h).split(L),
                m = /([.?@])?(.*)/.exec(f);
              c.push({
                type: 1,
                index: r,
                name: m[2],
                strings: u,
                ctor: m[1] === "."
                  ? Le
                  : m[1] === "?"
                  ? Me
                  : m[1] === "@"
                  ? De
                  : gt,
              }), o.removeAttribute(h);
            } else {h.startsWith(L) &&
                (c.push({ type: 6, index: r }), o.removeAttribute(h));}
          }
        }
        if (ee.test(o.tagName)) {
          const h = o.textContent.split(L), f = h.length - 1;
          if (f > 0) {
            o.textContent = ut ? ut.emptyScript : "";
            for (let u = 0; u < f; u++) {
              o.append(h[u], nt()),
                B.nextNode(),
                c.push({ type: 2, index: ++r });
            }
            o.append(h[f], nt());
          }
        }
      } else if (o.nodeType === 8) {
        if (o.data === Qt) c.push({ type: 2, index: r });
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
    const i = F.createElement("template");
    return i.innerHTML = t, i;
  }
}
function X(e, t, n = e, i) {
  if (t === q) return t;
  let o = i !== void 0 ? n._$Co?.[i] : n._$Cl;
  const r = it(t) ? void 0 : t._$litDirective$;
  return o?.constructor !== r &&
    (o?._$AO?.(!1),
      r === void 0 ? o = void 0 : (o = new r(e), o._$AT(e, n, i)),
      i !== void 0 ? (n._$Co ??= [])[i] = o : n._$Cl = o),
    o !== void 0 && (t = X(e, o._$AS(e, t.values), o, i)),
    t;
}
class He {
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
      o = (t?.creationScope ?? F).importNode(n, !0);
    B.currentNode = o;
    let r = B.nextNode(), s = 0, l = 0, c = i[0];
    for (; c !== void 0;) {
      if (s === c.index) {
        let a;
        c.type === 2
          ? a = new rt(r, r.nextSibling, this, t)
          : c.type === 1
          ? a = new c.ctor(r, c.name, c.strings, this, t)
          : c.type === 6 && (a = new Ne(r, this, t)),
          this._$AV.push(a),
          c = i[++l];
      }
      s !== c?.index && (r = B.nextNode(), s++);
    }
    return B.currentNode = F, o;
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
class rt {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t, n, i, o) {
    this.type = 2,
      this._$AH = _,
      this._$AN = void 0,
      this._$AA = t,
      this._$AB = n,
      this._$AM = i,
      this.options = o,
      this._$Cv = o?.isConnected ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const n = this._$AM;
    return n !== void 0 && t?.nodeType === 11 && (t = n.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, n = this) {
    t = X(this, t, n),
      it(t)
        ? t === _ || t == null || t === ""
          ? (this._$AH !== _ && this._$AR(), this._$AH = _)
          : t !== this._$AH && t !== q && this._(t)
        : t._$litType$ !== void 0
        ? this.$(t)
        : t.nodeType !== void 0
        ? this.T(t)
        : Re(t)
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
    this._$AH !== _ && it(this._$AH)
      ? this._$AA.nextSibling.data = t
      : this.T(F.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    const { values: n, _$litType$: i } = t,
      o = typeof i == "number" ? this._$AC(t) : (i.el === void 0 &&
        (i.el = ot.createElement(ne(i.h, i.h[0]), this.options)),
        i);
    if (this._$AH?._$AD === o) this._$AH.p(n);
    else {
      const r = new He(o, this), s = r.u(this.options);
      r.p(n), this.T(s), this._$AH = r;
    }
  }
  _$AC(t) {
    let n = Ft.get(t.strings);
    return n === void 0 && Ft.set(t.strings, n = new ot(t)), n;
  }
  k(t) {
    te(this._$AH) || (this._$AH = [], this._$AR());
    const n = this._$AH;
    let i, o = 0;
    for (const r of t) {
      o === n.length
        ? n.push(i = new rt(this.S(nt()), this.S(nt()), this, this.options))
        : i = n[o],
        i._$AI(r),
        o++;
    }
    o < n.length && (this._$AR(i && i._$AB.nextSibling, o), n.length = o);
  }
  _$AR(t = this._$AA.nextSibling, n) {
    for (this._$AP?.(!1, !0, n); t && t !== this._$AB;) {
      const i = t.nextSibling;
      t.remove(), t = i;
    }
  }
  setConnected(t) {
    this._$AM === void 0 && (this._$Cv = t, this._$AP?.(t));
  }
}
class gt {
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
      t = X(this, t, n, 0),
        s = !it(t) || t !== this._$AH && t !== q,
        s && (this._$AH = t);
    } else {
      const l = t;
      let c, a;
      for (t = r[0], c = 0; c < r.length - 1; c++) {
        a = X(this, l[i + c], n, c),
          a === q && (a = this._$AH[c]),
          s ||= !it(a) || a !== this._$AH[c],
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
class Le extends gt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === _ ? void 0 : t;
  }
}
class Me extends gt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== _);
  }
}
class De extends gt {
  constructor(t, n, i, o, r) {
    super(t, n, i, o, r), this.type = 5;
  }
  _$AI(t, n = this) {
    if ((t = X(this, t, n, 0) ?? _) === q) return;
    const i = this._$AH,
      o = t === _ && i !== _ || t.capture !== i.capture || t.once !== i.once ||
        t.passive !== i.passive,
      r = t !== _ && (i === _ || o);
    o && this.element.removeEventListener(this.name, this, i),
      r && this.element.addEventListener(this.name, this, t),
      this._$AH = t;
  }
  handleEvent(t) {
    typeof this._$AH == "function"
      ? this._$AH.call(this.options?.host ?? this.element, t)
      : this._$AH.handleEvent(t);
  }
}
class Ne {
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
    X(this, t);
  }
}
const Ue = St.litHtmlPolyfillSupport;
Ue?.(ot, rt), (St.litHtmlVersions ??= []).push("3.1.4");
const ke = (e, t, n) => {
  const i = n?.renderBefore ?? t;
  let o = i._$litPart$;
  if (o === void 0) {
    const r = n?.renderBefore ?? null;
    i._$litPart$ = o = new rt(t.insertBefore(nt(), r), r, void 0, n ?? {});
  }
  return o._$AI(e), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class V extends j {
  constructor() {
    super(...arguments),
      this.renderOptions = { host: this },
      this._$Do = void 0;
  }
  createRenderRoot() {
    const t = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= t.firstChild, t;
  }
  update(t) {
    const n = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
      super.update(t),
      this._$Do = ke(n, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return q;
  }
}
V._$litElement$ = !0,
  V.finalized = !0,
  globalThis.litElementHydrateSupport?.({ LitElement: V });
const Be = globalThis.litElementPolyfillSupport;
Be?.({ LitElement: V });
(globalThis.litElementVersions ??= []).push("4.0.6");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Fe = (e) => (t, n) => {
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
const We = {
    attribute: !0,
    type: String,
    converter: dt,
    reflect: !1,
    hasChanged: Et,
  },
  ze = (e = We, t, n) => {
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
function je(e) {
  return (t, n) =>
    typeof n == "object" ? ze(e, t, n) : ((i, o, r) => {
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
const ie = (
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
function Ve(e, t) {
  return (n, i, o) => {
    const r = (s) => s.renderRoot?.querySelector(e) ?? null;
    return ie(n, i, {
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
function Ie(e) {
  return (t, n) => {
    const { slot: i, selector: o } = e ?? {},
      r = "slot" + (i ? `[name=${i}]` : ":not([name])");
    return ie(t, n, {
      get() {
        const s = this.renderRoot?.querySelector(r),
          l = s?.assignedElements(e) ?? [];
        return o === void 0 ? l : l.filter((c) => c.matches(o));
      },
    });
  };
}
const oe = ["top", "right", "bottom", "left"],
  Wt = ["start", "end"],
  zt = /* @__PURE__ */ oe.reduce(
    (e, t) => e.concat(t, t + "-" + Wt[0], t + "-" + Wt[1]),
    [],
  ),
  M = Math.min,
  A = Math.max,
  ft = Math.round,
  at = Math.floor,
  D = (e) => ({
    x: e,
    y: e,
  }),
  qe = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom",
  },
  Xe = {
    start: "end",
    end: "start",
  };
function jt(e, t, n) {
  return A(e, M(t, n));
}
function Z(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function z(e) {
  return e.split("-")[0];
}
function P(e) {
  return e.split("-")[1];
}
function se(e) {
  return e === "x" ? "y" : "x";
}
function re(e) {
  return e === "y" ? "height" : "width";
}
function ct(e) {
  return ["top", "bottom"].includes(z(e)) ? "y" : "x";
}
function ce(e) {
  return se(ct(e));
}
function Ye(e, t, n) {
  n === void 0 && (n = !1);
  const i = P(e), o = ce(e), r = re(o);
  let s = o === "x"
    ? i === (n ? "end" : "start") ? "right" : "left"
    : i === "start"
    ? "bottom"
    : "top";
  return t.reference[r] > t.floating[r] && (s = Vt(s)), [s, Vt(s)];
}
function Ke(e) {
  return e.replace(/start|end/g, (t) => Xe[t]);
}
function Vt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => qe[t]);
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
function Je(e) {
  return typeof e != "number" ? Ze(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e,
  };
}
function pt(e) {
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
function It(e, t, n) {
  let {
    reference: i,
    floating: o,
  } = e;
  const r = ct(t),
    s = ce(t),
    l = re(s),
    c = z(t),
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
const Ge = async (e, t, n) => {
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
    } = It(a, i, c),
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
        y: $,
        data: x,
        reset: w,
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
      h = $ ?? h,
      u = {
        ...u,
        [y]: {
          ...u[y],
          ...x,
        },
      },
      w && m <= 50 &&
      (m++,
        typeof w == "object" &&
        (w.placement && (f = w.placement),
          w.rects && (a = w.rects === !0
            ? await s.getElementRects({
              reference: e,
              floating: t,
              strategy: o,
            })
            : w.rects),
          {
            x: d,
            y: h,
          } = It(a, f, c)),
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
async function Y(e, t) {
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
    m = Je(u),
    y = l[f ? h === "floating" ? "reference" : "floating" : h],
    p = pt(
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
    $ =
      await (r.getOffsetParent == null
        ? void 0
        : r.getOffsetParent(l.floating)),
    x = await (r.isElement == null ? void 0 : r.isElement($))
      ? await (r.getScale == null ? void 0 : r.getScale($)) || {
        x: 1,
        y: 1,
      }
      : {
        x: 1,
        y: 1,
      },
    w = pt(
      r.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
          elements: l,
          rect: v,
          offsetParent: $,
          strategy: c,
        })
        : v,
    );
  return {
    top: (p.top - w.top + m.top) / x.y,
    bottom: (w.bottom - p.bottom + m.bottom) / x.y,
    left: (p.left - w.left + m.left) / x.x,
    right: (w.right - p.right + m.right) / x.x,
  };
}
function Qe(e, t, n) {
  return (e
    ? [...n.filter((o) => P(o) === e), ...n.filter((o) => P(o) !== e)]
    : n.filter((o) => z(o) === o)).filter((o) =>
      e ? P(o) === e || (t ? Ke(o) !== o : !1) : !0
    );
}
const tn = function (e) {
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
          allowedPlacements: f = zt,
          autoAlignment: u = !0,
          ...m
        } = Z(e, t),
        g = h !== void 0 || f === zt ? Qe(h || null, u, f) : f,
        y = await Y(t, m),
        p = ((n = s.autoPlacement) == null ? void 0 : n.index) || 0,
        v = g[p];
      if (v == null) {
        return {};
      }
      const $ = Ye(
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
      const x = [y[z(v)], y[$[0]], y[$[1]]],
        w = [...((i = s.autoPlacement) == null ? void 0 : i.overflows) || [], {
          placement: v,
          overflows: x,
        }],
        C = g[p + 1];
      if (C) {
        return {
          data: {
            index: p + 1,
            overflows: w,
          },
          reset: {
            placement: C,
          },
        };
      }
      const G = w.map((b) => {
          const H = P(b.placement);
          return [
            b.placement,
            H && d
              ? (
                // Check along the mainAxis and main crossAxis side.
                b.overflows.slice(0, 2).reduce((me, ge) => me + ge, 0)
              )
              : (
                // Check only the mainAxis.
                b.overflows[0]
              ),
            b.overflows,
          ];
        }).sort((b, H) => b[1] - H[1]),
        Q = ((o = G.filter((b) =>
            b[2].slice(
              0,
              // Aligned placements should not check their opposite crossAxis
              // side.
              P(b[0]) ? 2 : 3,
            ).every((H) => H <= 0)
          )[0]) == null
          ? void 0
          : o[0]) || G[0][0];
      return Q !== l
        ? {
          data: {
            index: p + 1,
            overflows: w,
          },
          reset: {
            placement: Q,
          },
        }
        : {};
    },
  };
};
function qt(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function Xt(e) {
  return oe.some((t) => e[t] >= 0);
}
const en = function (e) {
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
          const r = await Y(t, {
              ...o,
              elementContext: "reference",
            }),
            s = qt(r, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Xt(s),
            },
          };
        }
        case "escaped": {
          const r = await Y(t, {
              ...o,
              altBoundary: !0,
            }),
            s = qt(r, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Xt(s),
            },
          };
        }
        default:
          return {};
      }
    },
  };
};
async function nn(e, t) {
  const {
      placement: n,
      platform: i,
      elements: o,
    } = e,
    r = await (i.isRTL == null ? void 0 : i.isRTL(o.floating)),
    s = z(n),
    l = P(n),
    c = ct(n) === "y",
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
const on = function (e) {
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
          c = await nn(t, e);
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
  sn = function (e) {
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
          d = await Y(t, c),
          h = ct(z(o)),
          f = se(h);
        let u = a[f], m = a[h];
        if (r) {
          const y = f === "y" ? "top" : "left",
            p = f === "y" ? "bottom" : "right",
            v = u + d[y],
            $ = u - d[p];
          u = jt(v, u, $);
        }
        if (s) {
          const y = h === "y" ? "top" : "left",
            p = h === "y" ? "bottom" : "right",
            v = m + d[y],
            $ = m - d[p];
          m = jt(v, m, $);
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
  rn = function (e) {
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
          c = await Y(t, l),
          a = z(n),
          d = P(n),
          h = ct(n) === "y",
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
          $ = M(f - c[g], p),
          x = !t.middlewareData.shift;
        let w = v, C = $;
        if (h ? C = d || x ? M($, p) : p : w = d || x ? M(v, y) : y, x && !d) {
          const wt = A(c.left, 0),
            Q = A(c.right, 0),
            b = A(c.top, 0),
            H = A(c.bottom, 0);
          h
            ? C = f - 2 * (wt !== 0 || Q !== 0 ? wt + Q : A(c.left, c.right))
            : w = u - 2 * (b !== 0 || H !== 0 ? b + H : A(c.top, c.bottom));
        }
        await s({
          ...t,
          availableWidth: C,
          availableHeight: w,
        });
        const G = await o.getDimensions(r.floating);
        return f !== G.width || u !== G.height
          ? {
            reset: {
              rects: !0,
            },
          }
          : {};
      },
    };
  };
function J(e) {
  return le(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function E(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null
    ? void 0
    : t.defaultView) || window;
}
function T(e) {
  var t;
  return (t = (le(e) ? e.ownerDocument : e.document) || globalThis.document) ==
      null
    ? void 0
    : t.documentElement;
}
function le(e) {
  return e instanceof Node || e instanceof E(e).Node;
}
function O(e) {
  return e instanceof Element || e instanceof E(e).Element;
}
function R(e) {
  return e instanceof HTMLElement || e instanceof E(e).HTMLElement;
}
function Yt(e) {
  return typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof E(e).ShadowRoot;
}
function lt(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: i,
    display: o,
  } = S(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + i + n) &&
    !["inline", "contents"].includes(o);
}
function cn(e) {
  return ["table", "td", "th"].includes(J(e));
}
function yt(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Ct(e) {
  const t = Ot(), n = S(e);
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
function ln(e) {
  let t = N(e);
  for (; R(t) && !K(t);) {
    if (yt(t)) {
      return null;
    }
    if (Ct(t)) {
      return t;
    }
    t = N(t);
  }
  return null;
}
function Ot() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function K(e) {
  return ["html", "body", "#document"].includes(J(e));
}
function S(e) {
  return E(e).getComputedStyle(e);
}
function vt(e) {
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
function N(e) {
  if (J(e) === "html") {
    return e;
  }
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Yt(e) && e.host || // Fallback.
    T(e)
  );
  return Yt(t) ? t.host : t;
}
function ae(e) {
  const t = N(e);
  return K(t)
    ? e.ownerDocument ? e.ownerDocument.body : e.body
    : R(t) && lt(t)
    ? t
    : ae(t);
}
function st(e, t, n) {
  var i;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = ae(e),
    r = o === ((i = e.ownerDocument) == null ? void 0 : i.body),
    s = E(o);
  return r
    ? t.concat(
      s,
      s.visualViewport || [],
      lt(o) ? o : [],
      s.frameElement && n ? st(s.frameElement) : [],
    )
    : t.concat(o, st(o, [], n));
}
function he(e) {
  const t = S(e);
  let n = parseFloat(t.width) || 0, i = parseFloat(t.height) || 0;
  const o = R(e),
    r = o ? e.offsetWidth : n,
    s = o ? e.offsetHeight : i,
    l = ft(n) !== r || ft(i) !== s;
  return l && (n = r, i = s), {
    width: n,
    height: i,
    $: l,
  };
}
function Rt(e) {
  return O(e) ? e : e.contextElement;
}
function I(e) {
  const t = Rt(e);
  if (!R(t)) {
    return D(1);
  }
  const n = t.getBoundingClientRect(),
    {
      width: i,
      height: o,
      $: r,
    } = he(t);
  let s = (r ? ft(n.width) : n.width) / i,
    l = (r ? ft(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1),
    (!l || !Number.isFinite(l)) && (l = 1),
    {
      x: s,
      y: l,
    };
}
const an = /* @__PURE__ */ D(0);
function de(e) {
  const t = E(e);
  return !Ot() || !t.visualViewport ? an : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop,
  };
}
function hn(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== E(e) ? !1 : t;
}
function W(e, t, n, i) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), r = Rt(e);
  let s = D(1);
  t && (i ? O(i) && (s = I(i)) : s = I(e));
  const l = hn(r, n, i) ? de(r) : D(0);
  let c = (o.left + l.x) / s.x,
    a = (o.top + l.y) / s.y,
    d = o.width / s.x,
    h = o.height / s.y;
  if (r) {
    const f = E(r), u = i && O(i) ? E(i) : i;
    let m = f, g = m.frameElement;
    for (; g && i && u !== m;) {
      const y = I(g),
        p = g.getBoundingClientRect(),
        v = S(g),
        $ = p.left + (g.clientLeft + parseFloat(v.paddingLeft)) * y.x,
        x = p.top + (g.clientTop + parseFloat(v.paddingTop)) * y.y;
      c *= y.x,
        a *= y.y,
        d *= y.x,
        h *= y.y,
        c += $,
        a += x,
        m = E(g),
        g = m.frameElement;
    }
  }
  return pt({
    width: d,
    height: h,
    x: c,
    y: a,
  });
}
function dn(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: i,
    strategy: o,
  } = e;
  const r = o === "fixed", s = T(i), l = t ? yt(t.floating) : !1;
  if (i === s || l && r) {
    return n;
  }
  let c = {
      scrollLeft: 0,
      scrollTop: 0,
    },
    a = D(1);
  const d = D(0), h = R(i);
  if ((h || !h && !r) && ((J(i) !== "body" || lt(s)) && (c = vt(i)), R(i))) {
    const f = W(i);
    a = I(i), d.x = f.x + i.clientLeft, d.y = f.y + i.clientTop;
  }
  return {
    width: n.width * a.x,
    height: n.height * a.y,
    x: n.x * a.x - c.scrollLeft * a.x + d.x,
    y: n.y * a.y - c.scrollTop * a.y + d.y,
  };
}
function un(e) {
  return Array.from(e.getClientRects());
}
function ue(e) {
  return W(T(e)).left + vt(e).scrollLeft;
}
function fn(e) {
  const t = T(e),
    n = vt(e),
    i = e.ownerDocument.body,
    o = A(t.scrollWidth, t.clientWidth, i.scrollWidth, i.clientWidth),
    r = A(t.scrollHeight, t.clientHeight, i.scrollHeight, i.clientHeight);
  let s = -n.scrollLeft + ue(e);
  const l = -n.scrollTop;
  return S(i).direction === "rtl" && (s += A(t.clientWidth, i.clientWidth) - o),
    {
      width: o,
      height: r,
      x: s,
      y: l,
    };
}
function pn(e, t) {
  const n = E(e), i = T(e), o = n.visualViewport;
  let r = i.clientWidth, s = i.clientHeight, l = 0, c = 0;
  if (o) {
    r = o.width, s = o.height;
    const a = Ot();
    (!a || a && t === "fixed") && (l = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: r,
    height: s,
    x: l,
    y: c,
  };
}
function mn(e, t) {
  const n = W(e, !0, t === "fixed"),
    i = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    r = R(e) ? I(e) : D(1),
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
function Kt(e, t, n) {
  let i;
  if (t === "viewport") {
    i = pn(e, n);
  } else if (t === "document") {
    i = fn(T(e));
  } else if (O(t)) {
    i = mn(t, n);
  } else {
    const o = de(e);
    i = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y,
    };
  }
  return pt(i);
}
function fe(e, t) {
  const n = N(e);
  return n === t || !O(n) || K(n) ? !1 : S(n).position === "fixed" || fe(n, t);
}
function gn(e, t) {
  const n = t.get(e);
  if (n) {
    return n;
  }
  let i = st(e, [], !1).filter((l) => O(l) && J(l) !== "body"), o = null;
  const r = S(e).position === "fixed";
  let s = r ? N(e) : e;
  for (; O(s) && !K(s);) {
    const l = S(s), c = Ct(s);
    !c && l.position === "fixed" && (o = null),
      (r ? !c && !o : !c && l.position === "static" && !!o &&
            ["absolute", "fixed"].includes(o.position) ||
          lt(s) && !c && fe(e, s))
        ? i = i.filter((d) => d !== s)
        : o = l,
      s = N(s);
  }
  return t.set(e, i), i;
}
function yn(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: i,
    strategy: o,
  } = e;
  const s = [
      ...n === "clippingAncestors" ? yt(t) ? [] : gn(t, this._c) : [].concat(n),
      i,
    ],
    l = s[0],
    c = s.reduce((a, d) => {
      const h = Kt(t, d, o);
      return a.top = A(h.top, a.top),
        a.right = M(h.right, a.right),
        a.bottom = M(h.bottom, a.bottom),
        a.left = A(h.left, a.left),
        a;
    }, Kt(t, l, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top,
  };
}
function vn(e) {
  const {
    width: t,
    height: n,
  } = he(e);
  return {
    width: t,
    height: n,
  };
}
function $n(e, t, n) {
  const i = R(t), o = T(t), r = n === "fixed", s = W(e, !0, r, t);
  let l = {
    scrollLeft: 0,
    scrollTop: 0,
  };
  const c = D(0);
  if (i || !i && !r) {
    if ((J(t) !== "body" || lt(o)) && (l = vt(t)), i) {
      const h = W(t, !0, r, t);
      c.x = h.x + t.clientLeft, c.y = h.y + t.clientTop;
    } else o && (c.x = ue(o));
  }
  const a = s.left + l.scrollLeft - c.x, d = s.top + l.scrollTop - c.y;
  return {
    x: a,
    y: d,
    width: s.width,
    height: s.height,
  };
}
function xt(e) {
  return S(e).position === "static";
}
function Zt(e, t) {
  return !R(e) || S(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function pe(e, t) {
  const n = E(e);
  if (yt(e)) {
    return n;
  }
  if (!R(e)) {
    let o = N(e);
    for (; o && !K(o);) {
      if (O(o) && !xt(o)) {
        return o;
      }
      o = N(o);
    }
    return n;
  }
  let i = Zt(e, t);
  for (; i && cn(i) && xt(i);) {
    i = Zt(i, t);
  }
  return i && K(i) && xt(i) && !Ct(i) ? n : i || ln(e) || n;
}
const wn = async function (e) {
  const t = this.getOffsetParent || pe,
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
function _n(e) {
  return S(e).direction === "rtl";
}
const xn = {
  convertOffsetParentRelativeRectToViewportRelativeRect: dn,
  getDocumentElement: T,
  getClippingRect: yn,
  getOffsetParent: pe,
  getElementRects: wn,
  getClientRects: un,
  getDimensions: vn,
  getScale: I,
  isElement: O,
  isRTL: _n,
};
function bn(e, t) {
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
    const u = at(d),
      m = at(o.clientWidth - (a + h)),
      g = at(o.clientHeight - (d + f)),
      y = at(a),
      v = {
        rootMargin: -u + "px " + -m + "px " + -g + "px " + -y + "px",
        threshold: A(0, M(1, c)) || 1,
      };
    let $ = !0;
    function x(w) {
      const C = w[0].intersectionRatio;
      if (C !== c) {
        if (!$) {
          return s();
        }
        C ? s(!1, C) : i = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      $ = !1;
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
function An(e, t, n, i) {
  i === void 0 && (i = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: r = !0,
      elementResize: s = typeof ResizeObserver == "function",
      layoutShift: l = typeof IntersectionObserver == "function",
      animationFrame: c = !1,
    } = i,
    a = Rt(e),
    d = o || r ? [...a ? st(a) : [], ...st(t)] : [];
  d.forEach((p) => {
    o && p.addEventListener("scroll", n, {
      passive: !0,
    }), r && p.addEventListener("resize", n);
  });
  const h = a && l ? bn(a, n) : null;
  let f = -1, u = null;
  s && (u = new ResizeObserver((p) => {
    let [v] = p;
    v && v.target === a && u &&
    (u.unobserve(t),
      cancelAnimationFrame(f),
      f = requestAnimationFrame(() => {
        var $;
        ($ = u) == null || $.observe(t);
      })), n();
  }),
    a && !c && u.observe(a),
    u.observe(t));
  let m, g = c ? W(e) : null;
  c && y();
  function y() {
    const p = W(e);
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
      h?.(),
      (p = u) == null || p.disconnect(),
      u = null,
      c && cancelAnimationFrame(m);
  };
}
const En = Y,
  Sn = on,
  Cn = tn,
  On = sn,
  Rn = rn,
  Pn = en,
  Tn = (e, t, n) => {
    const i = /* @__PURE__ */ new Map(),
      o = {
        platform: xn,
        ...n,
      },
      r = {
        ...o.platform,
        _c: i,
      };
    return Ge(e, t, {
      ...o,
      platform: r,
    });
  };
var Hn = Object.defineProperty,
  Ln = Object.getOwnPropertyDescriptor,
  $t = (e, t, n, i) => {
    for (
      var o = i > 1 ? void 0 : i ? Ln(t, n) : t, r = e.length - 1, s;
      r >= 0;
      r--
    ) {
      (s = e[r]) && (o = (i ? s(t, n, o) : s(o)) || o);
    }
    return i && o && Hn(t, n, o), o;
  };
let U = class extends V {
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
    return Bt`
			<slot name="summary" tabindex="0" @click=${this._toggleOpen}></slot>
			${
      this.open
        ? Bt`
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
    const t = e.composedPath()[0],
      n = !this.shadowRoot?.contains(t) && !this.contains(t);
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
      ? this._cleanup = An(
        this._dropsummary[0],
        this._dropmenu,
        async () => {
          await Tn(this._dropsummary[0], this._dropmenu, {
            middleware: [
              Cn({
                autoAlignment: !0,
                alignment: "bottom",
                allowedPlacements: ["top", "bottom"],
                crossAxis: !0,
                padding: 3,
              }),
              Sn(3),
              On({
                crossAxis: !0,
                mainAxis: !0,
                padding: 3,
              }),
              Rn({
                apply({ rects: e, elements: t }) {
                  Object.assign(t.floating.style, {
                    width: `${e.reference.width}px`,
                  });
                },
              }),
              {
                name: "detectOverflow",
                async fn(e) {
                  return await En(e, {
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
              Pn(),
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
U.styles = ve`
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
U.properties = {
  delegatesFocus: { type: Boolean, reflect: !0 },
};
U.shadowRootOptions = {
  ...V.shadowRootOptions,
  delegatesFocus: !0,
};
$t(
  [
    je({ type: Boolean, reflect: !0 }),
  ],
  U.prototype,
  "open",
  2,
);
$t(
  [
    Ie({ slot: "summary", flatten: !0 }),
  ],
  U.prototype,
  "_dropsummary",
  2,
);
$t(
  [
    Ve('div[part="dropmenu"]'),
  ],
  U.prototype,
  "_dropmenu",
  2,
);
U = $t([
  Fe("ly-dropdown"),
], U);
export { U as Dropdown };
