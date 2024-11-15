// deno-lint-ignore-file

// https://esm.sh/v135/@floating-ui/utils@0.2.7/denonext/utils.mjs
var a = ["top", "right", "bottom", "left"];
var f = ["start", "end"];
var O = a.reduce((t, n) => t.concat(n, n + "-" + f[0], n + "-" + f[1]), []);
var m = Math.min;
var p = Math.max;
var h = { left: "right", right: "left", bottom: "top", top: "bottom" };
var b = { start: "end", end: "start" };
function C(t, n, e) {
  return p(t, m(n, e));
}
function L(t, n) {
  return typeof t == "function" ? t(n) : t;
}
function l(t) {
  return t.split("-")[0];
}
function g(t) {
  return t.split("-")[1];
}
function x(t) {
  return t === "x" ? "y" : "x";
}
function d(t) {
  return t === "y" ? "height" : "width";
}
function A(t) {
  return ["top", "bottom"].includes(l(t)) ? "y" : "x";
}
function y(t) {
  return x(A(t));
}
function E(t, n, e) {
  e === void 0 && (e = false);
  let r = g(t),
    o = y(t),
    i2 = d(o),
    c2 = o === "x"
      ? r === (e ? "end" : "start") ? "right" : "left"
      : r === "start"
      ? "bottom"
      : "top";
  return n.reference[i2] > n.floating[i2] && (c2 = u(c2)), [c2, u(c2)];
}
function s(t) {
  return t.replace(/start|end/g, (n) => b[n]);
}
function u(t) {
  return t.replace(/left|right|bottom|top/g, (n) => h[n]);
}
function M(t) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...t };
}
function k(t) {
  return typeof t != "number" ? M(t) : { top: t, right: t, bottom: t, left: t };
}
function q(t) {
  let { x: n, y: e, width: r, height: o } = t;
  return {
    width: r,
    height: o,
    top: e,
    left: n,
    right: n + r,
    bottom: e + o,
    x: n,
    y: e,
  };
}

// https://esm.sh/v135/@floating-ui/core@1.6.7/denonext/core.mjs
function G(e, n, l3) {
  let { reference: s2, floating: i2 } = e,
    t = A(n),
    a4 = y(n),
    d3 = d(a4),
    r = l(n),
    x2 = t === "y",
    g3 = s2.x + s2.width / 2 - i2.width / 2,
    c2 = s2.y + s2.height / 2 - i2.height / 2,
    f4 = s2[d3] / 2 - i2[d3] / 2,
    o;
  switch (r) {
    case "top":
      o = { x: g3, y: s2.y - i2.height };
      break;
    case "bottom":
      o = { x: g3, y: s2.y + s2.height };
      break;
    case "right":
      o = { x: s2.x + s2.width, y: c2 };
      break;
    case "left":
      o = { x: s2.x - i2.width, y: c2 };
      break;
    default:
      o = { x: s2.x, y: s2.y };
  }
  switch (g(n)) {
    case "start":
      o[a4] -= f4 * (l3 && x2 ? -1 : 1);
      break;
    case "end":
      o[a4] += f4 * (l3 && x2 ? -1 : 1);
      break;
  }
  return o;
}
var me = async (e, n, l3) => {
  let {
      placement: s2 = "bottom",
      strategy: i2 = "absolute",
      middleware: t = [],
      platform: a4,
    } = l3,
    d3 = t.filter(Boolean),
    r = await (a4.isRTL == null ? void 0 : a4.isRTL(n)),
    x2 = await a4.getElementRects({ reference: e, floating: n, strategy: i2 }),
    { x: g3, y: c2 } = G(x2, s2, r),
    f4 = s2,
    o = {},
    m4 = 0;
  for (let h3 = 0; h3 < d3.length; h3++) {
    let { name: u2, fn: y3 } = d3[h3],
      { x: A2, y: v2, data: b3, reset: p4 } = await y3({
        x: g3,
        y: c2,
        initialPlacement: s2,
        placement: f4,
        strategy: i2,
        middlewareData: o,
        rects: x2,
        platform: a4,
        elements: { reference: e, floating: n },
      });
    g3 = A2 ?? g3,
      c2 = v2 ?? c2,
      o = { ...o, [u2]: { ...o[u2], ...b3 } },
      p4 && m4 <= 50 && (m4++,
        typeof p4 == "object" &&
        (p4.placement && (f4 = p4.placement),
          p4.rects && (x2 = p4.rects === true
            ? await a4.getElementRects({
              reference: e,
              floating: n,
              strategy: i2,
            })
            : p4.rects),
          { x: g3, y: c2 } = G(x2, f4, r)),
        h3 = -1);
  }
  return { x: g3, y: c2, placement: f4, strategy: i2, middlewareData: o };
};
async function X(e, n) {
  var l3;
  n === void 0 && (n = {});
  let { x: s2, y: i2, platform: t, rects: a4, elements: d3, strategy: r } = e,
    {
      boundary: x2 = "clippingAncestors",
      rootBoundary: g3 = "viewport",
      elementContext: c2 = "floating",
      altBoundary: f4 = false,
      padding: o = 0,
    } = L(n, e),
    m4 = k(o),
    u2 = d3[f4 ? c2 === "floating" ? "reference" : "floating" : c2],
    y3 = q(
      await t.getClippingRect({
        element:
          (l3 = await (t.isElement == null ? void 0 : t.isElement(u2))) ==
              null || l3
            ? u2
            : u2.contextElement ||
              await (t.getDocumentElement == null
                ? void 0
                : t.getDocumentElement(d3.floating)),
        boundary: x2,
        rootBoundary: g3,
        strategy: r,
      }),
    ),
    A2 = c2 === "floating"
      ? { x: s2, y: i2, width: a4.floating.width, height: a4.floating.height }
      : a4.reference,
    v2 =
      await (t.getOffsetParent == null
        ? void 0
        : t.getOffsetParent(d3.floating)),
    b3 = await (t.isElement == null ? void 0 : t.isElement(v2))
      ? await (t.getScale == null ? void 0 : t.getScale(v2)) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    p4 = q(
      t.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await t.convertOffsetParentRelativeRectToViewportRelativeRect({
          elements: d3,
          rect: A2,
          offsetParent: v2,
          strategy: r,
        })
        : A2,
    );
  return {
    top: (y3.top - p4.top + m4.top) / b3.y,
    bottom: (p4.bottom - y3.bottom + m4.bottom) / b3.y,
    left: (y3.left - p4.left + m4.left) / b3.x,
    right: (p4.right - y3.right + m4.right) / b3.x,
  };
}
function le(e, n, l3) {
  return (e
    ? [...l3.filter((i2) => g(i2) === e), ...l3.filter((i2) => g(i2) !== e)]
    : l3.filter((i2) => l(i2) === i2)).filter((i2) =>
      e ? g(i2) === e || (n ? s(i2) !== i2 : false) : true
    );
}
var ue = function (e) {
  return e === void 0 && (e = {}), {
    name: "autoPlacement",
    options: e,
    async fn(n) {
      var l3, s2, i2;
      let {
          rects: t,
          middlewareData: a4,
          placement: d3,
          platform: r,
          elements: x2,
        } = n,
        {
          crossAxis: g3 = false,
          alignment: c2,
          allowedPlacements: f4 = O,
          autoAlignment: o = true,
          ...m4
        } = L(e, n),
        h3 = c2 !== void 0 || f4 === O ? le(c2 || null, o, f4) : f4,
        u2 = await X(n, m4),
        y3 = ((l3 = a4.autoPlacement) == null ? void 0 : l3.index) || 0,
        A2 = h3[y3];
      if (A2 == null) return {};
      let v2 = E(
        A2,
        t,
        await (r.isRTL == null ? void 0 : r.isRTL(x2.floating)),
      );
      if (d3 !== A2) return { reset: { placement: h3[0] } };
      let b3 = [u2[l(A2)], u2[v2[0]], u2[v2[1]]],
        p4 = [
          ...((s2 = a4.autoPlacement) == null ? void 0 : s2.overflows) || [],
          { placement: A2, overflows: b3 },
        ],
        P = h3[y3 + 1];
      if (P) {
        return {
          data: { index: y3 + 1, overflows: p4 },
          reset: { placement: P },
        };
      }
      let S2 = p4.map((w3) => {
          let O3 = g(w3.placement);
          return [
            w3.placement,
            O3 && g3
              ? w3.overflows.slice(0, 2).reduce((k4, L3) => k4 + L3, 0)
              : w3.overflows[0],
            w3.overflows,
          ];
        }).sort((w3, O3) => w3[1] - O3[1]),
        C3 = ((i2 = S2.filter((w3) =>
            w3[2].slice(0, g(w3[0]) ? 2 : 3).every((O3) =>
              O3 <= 0
            )
          )[0]) == null
          ? void 0
          : i2[0]) || S2[0][0];
      return C3 !== d3
        ? { data: { index: y3 + 1, overflows: p4 }, reset: { placement: C3 } }
        : {};
    },
  };
};
function J(e, n) {
  return {
    top: e.top - n.height,
    right: e.right - n.width,
    bottom: e.bottom - n.height,
    left: e.left - n.width,
  };
}
function K(e) {
  return a.some((n) => e[n] >= 0);
}
var he = function (e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(n) {
      let { rects: l3 } = n,
        { strategy: s2 = "referenceHidden", ...i2 } = L(e, n);
      switch (s2) {
        case "referenceHidden": {
          let t = await X(n, { ...i2, elementContext: "reference" }),
            a4 = J(t, l3.reference);
          return {
            data: { referenceHiddenOffsets: a4, referenceHidden: K(a4) },
          };
        }
        case "escaped": {
          let t = await X(n, { ...i2, altBoundary: true }),
            a4 = J(t, l3.floating);
          return { data: { escapedOffsets: a4, escaped: K(a4) } };
        }
        default:
          return {};
      }
    },
  };
};
async function ae(e, n) {
  let { placement: l3, platform: s2, elements: i2 } = e,
    t = await (s2.isRTL == null ? void 0 : s2.isRTL(i2.floating)),
    a4 = l(l3),
    d3 = g(l3),
    r = A(l3) === "y",
    x2 = ["left", "top"].includes(a4) ? -1 : 1,
    g3 = t && r ? -1 : 1,
    c2 = L(n, e),
    { mainAxis: f4, crossAxis: o, alignmentAxis: m4 } = typeof c2 == "number"
      ? { mainAxis: c2, crossAxis: 0, alignmentAxis: null }
      : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...c2 };
  return d3 && typeof m4 == "number" && (o = d3 === "end" ? m4 * -1 : m4),
    r ? { x: o * g3, y: f4 * x2 } : { x: f4 * x2, y: o * g3 };
}
var pe = function (e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(n) {
      var l3, s2;
      let { x: i2, y: t, placement: a4, middlewareData: d3 } = n,
        r = await ae(n, e);
      return a4 === ((l3 = d3.offset) == null ? void 0 : l3.placement) &&
          (s2 = d3.arrow) != null && s2.alignmentOffset
        ? {}
        : { x: i2 + r.x, y: t + r.y, data: { ...r, placement: a4 } };
    },
  };
};
var we = function (e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(n) {
      let { x: l3, y: s2, placement: i2 } = n,
        {
          mainAxis: t = true,
          crossAxis: a4 = false,
          limiter: d3 = {
            fn: (u2) => {
              let { x: y3, y: A2 } = u2;
              return { x: y3, y: A2 };
            },
          },
          ...r
        } = L(e, n),
        x2 = { x: l3, y: s2 },
        g3 = await X(n, r),
        c2 = A(l(i2)),
        f4 = x(c2),
        o = x2[f4],
        m4 = x2[c2];
      if (t) {
        let u2 = f4 === "y" ? "top" : "left",
          y3 = f4 === "y" ? "bottom" : "right",
          A2 = o + g3[u2],
          v2 = o - g3[y3];
        o = C(A2, o, v2);
      }
      if (a4) {
        let u2 = c2 === "y" ? "top" : "left",
          y3 = c2 === "y" ? "bottom" : "right",
          A2 = m4 + g3[u2],
          v2 = m4 - g3[y3];
        m4 = C(A2, m4, v2);
      }
      let h3 = d3.fn({ ...n, [f4]: o, [c2]: m4 });
      return { ...h3, data: { x: h3.x - l3, y: h3.y - s2 } };
    },
  };
};
var ve = function (e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(n) {
      let { placement: l3, rects: s2, platform: i2, elements: t } = n,
        {
          apply: a4 = () => {
          },
          ...d3
        } = L(e, n),
        r = await X(n, d3),
        x2 = l(l3),
        g3 = g(l3),
        c2 = A(l3) === "y",
        { width: f4, height: o } = s2.floating,
        m4,
        h3;
      x2 === "top" || x2 === "bottom"
        ? (m4 = x2,
          h3 = g3 === (await (i2.isRTL == null ? void 0 : i2.isRTL(t.floating))
              ? "start"
              : "end")
            ? "left"
            : "right")
        : (h3 = x2, m4 = g3 === "end" ? "top" : "bottom");
      let u2 = o - r.top - r.bottom,
        y3 = f4 - r.left - r.right,
        A2 = m(o - r[m4], u2),
        v2 = m(f4 - r[h3], y3),
        b3 = !n.middlewareData.shift,
        p4 = A2,
        P = v2;
      if (
        c2 ? P = g3 || b3 ? m(v2, y3) : y3 : p4 = g3 || b3 ? m(A2, u2) : u2,
          b3 && !g3
      ) {
        let E3 = p(r.left, 0),
          C3 = p(r.right, 0),
          w3 = p(r.top, 0),
          O3 = p(r.bottom, 0);
        c2
          ? P = f4 - 2 * (E3 !== 0 || C3 !== 0 ? E3 + C3 : p(r.left, r.right))
          : p4 = o - 2 * (w3 !== 0 || O3 !== 0 ? w3 + O3 : p(r.top, r.bottom));
      }
      await a4({ ...n, availableWidth: P, availableHeight: p4 });
      let S2 = await i2.getDimensions(t.floating);
      return f4 !== S2.width || o !== S2.height
        ? { reset: { rects: true } }
        : {};
    },
  };
};

// https://esm.sh/v135/@floating-ui/utils@0.2.8/denonext/utils.mjs
var a2 = ["top", "right", "bottom", "left"];
var f2 = ["start", "end"];
var O2 = a2.reduce((t, n) => t.concat(n, n + "-" + f2[0], n + "-" + f2[1]), []);
var m2 = Math.min;
var p2 = Math.max;
var S = Math.round;
var w = Math.floor;
var j = (t) => ({ x: t, y: t });

// https://esm.sh/v135/@floating-ui/utils@0.2.8/denonext/dom.js
function c() {
  return typeof window < "u";
}
function f3(n) {
  return p3(n) ? (n.nodeName || "").toLowerCase() : "#document";
}
function i(n) {
  var t;
  return (n == null || (t = n.ownerDocument) == null
    ? void 0
    : t.defaultView) || window;
}
function E2(n) {
  var t;
  return (t = (p3(n) ? n.ownerDocument : n.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function p3(n) {
  return c() ? n instanceof Node || n instanceof i(n).Node : false;
}
function m3(n) {
  return c() ? n instanceof Element || n instanceof i(n).Element : false;
}
function w2(n) {
  return c()
    ? n instanceof HTMLElement || n instanceof i(n).HTMLElement
    : false;
}
function a3(n) {
  return !c() || typeof ShadowRoot > "u"
    ? false
    : n instanceof ShadowRoot || n instanceof i(n).ShadowRoot;
}
function y2(n) {
  let { overflow: t, overflowX: e, overflowY: o, display: r } = b2(n);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + e) &&
    !["inline", "contents"].includes(r);
}
function D(n) {
  return ["table", "td", "th"].includes(f3(n));
}
function N(n) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return n.matches(t);
    } catch {
      return false;
    }
  });
}
function T2(n) {
  let t = v(), e = m3(n) ? b2(n) : n;
  return e.transform !== "none" || e.perspective !== "none" ||
    (e.containerType ? e.containerType !== "normal" : false) ||
    !t && (e.backdropFilter ? e.backdropFilter !== "none" : false) ||
    !t && (e.filter ? e.filter !== "none" : false) ||
    ["transform", "perspective", "filter"].some((o) =>
      (e.willChange || "").includes(o)
    ) ||
    ["paint", "layout", "strict", "content"].some((o) =>
      (e.contain || "").includes(o)
    );
}
function k2(n) {
  let t = l2(n);
  for (; w2(t) && !g2(t);) {
    if (T2(t)) return t;
    if (N(t)) return null;
    t = l2(t);
  }
  return null;
}
function v() {
  return typeof CSS > "u" || !CSS.supports
    ? false
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function g2(n) {
  return ["html", "body", "#document"].includes(f3(n));
}
function b2(n) {
  return i(n).getComputedStyle(n);
}
function C2(n) {
  return m3(n)
    ? { scrollLeft: n.scrollLeft, scrollTop: n.scrollTop }
    : { scrollLeft: n.scrollX, scrollTop: n.scrollY };
}
function l2(n) {
  if (f3(n) === "html") return n;
  let t = n.assignedSlot || n.parentNode || a3(n) && n.host || E2(n);
  return a3(t) ? t.host : t;
}
function h2(n) {
  let t = l2(n);
  return g2(t)
    ? n.ownerDocument ? n.ownerDocument.body : n.body
    : w2(t) && y2(t)
    ? t
    : h2(t);
}
function d2(n, t, e) {
  var o;
  t === void 0 && (t = []), e === void 0 && (e = true);
  let r = h2(n),
    S2 = r === ((o = n.ownerDocument) == null ? void 0 : o.body),
    u2 = i(r);
  if (S2) {
    let s2 = L2(u2);
    return t.concat(
      u2,
      u2.visualViewport || [],
      y2(r) ? r : [],
      s2 && e ? d2(s2) : [],
    );
  }
  return t.concat(r, d2(r, [], e));
}
function L2(n) {
  return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null;
}

// https://esm.sh/v135/@floating-ui/dom@1.6.11/denonext/dom.mjs
function J2(t) {
  let e = b2(t),
    i2 = parseFloat(e.width) || 0,
    n = parseFloat(e.height) || 0,
    o = w2(t),
    c2 = o ? t.offsetWidth : i2,
    s2 = o ? t.offsetHeight : n,
    r = S(i2) !== c2 || S(n) !== s2;
  return r && (i2 = c2, n = s2), { width: i2, height: n, $: r };
}
function k3(t) {
  return m3(t) ? t : t.contextElement;
}
function F(t) {
  let e = k3(t);
  if (!w2(e)) return j(1);
  let i2 = e.getBoundingClientRect(),
    { width: n, height: o, $: c2 } = J2(e),
    s2 = (c2 ? S(i2.width) : i2.width) / n,
    r = (c2 ? S(i2.height) : i2.height) / o;
  return (!s2 || !Number.isFinite(s2)) && (s2 = 1),
    (!r || !Number.isFinite(r)) && (r = 1),
    { x: s2, y: r };
}
var gt = j(0);
function Q(t) {
  let e = i(t);
  return !v() || !e.visualViewport
    ? gt
    : { x: e.visualViewport.offsetLeft, y: e.visualViewport.offsetTop };
}
function pt(t, e, i2) {
  return e === void 0 && (e = false), !i2 || e && i2 !== i(t) ? false : e;
}
function T3(t, e, i2, n) {
  e === void 0 && (e = false), i2 === void 0 && (i2 = false);
  let o = t.getBoundingClientRect(), c2 = k3(t), s2 = j(1);
  e && (n ? m3(n) && (s2 = F(n)) : s2 = F(t));
  let r = pt(c2, i2, n) ? Q(c2) : j(0),
    f4 = (o.left + r.x) / s2.x,
    l3 = (o.top + r.y) / s2.y,
    u2 = o.width / s2.x,
    a4 = o.height / s2.y;
  if (c2) {
    let p4 = i(c2), h3 = n && m3(n) ? i(n) : n, v2 = p4, d3 = L2(v2);
    for (; d3 && n && h3 !== v2;) {
      let m4 = F(d3),
        g3 = d3.getBoundingClientRect(),
        w3 = b2(d3),
        C3 = g3.left + (d3.clientLeft + parseFloat(w3.paddingLeft)) * m4.x,
        B = g3.top + (d3.clientTop + parseFloat(w3.paddingTop)) * m4.y;
      f4 *= m4.x,
        l3 *= m4.y,
        u2 *= m4.x,
        a4 *= m4.y,
        f4 += C3,
        l3 += B,
        v2 = i(d3),
        d3 = L2(v2);
    }
  }
  return q({ width: u2, height: a4, x: f4, y: l3 });
}
function mt(t) {
  let { elements: e, rect: i2, offsetParent: n, strategy: o } = t,
    c2 = o === "fixed",
    s2 = E2(n),
    r = e ? N(e.floating) : false;
  if (n === s2 || r && c2) return i2;
  let f4 = { scrollLeft: 0, scrollTop: 0 }, l3 = j(1), u2 = j(0), a4 = w2(n);
  if (
    (a4 || !a4 && !c2) && ((f3(n) !== "body" || y2(s2)) && (f4 = C2(n)), w2(n))
  ) {
    let p4 = T3(n);
    l3 = F(n), u2.x = p4.x + n.clientLeft, u2.y = p4.y + n.clientTop;
  }
  return {
    width: i2.width * l3.x,
    height: i2.height * l3.y,
    x: i2.x * l3.x - f4.scrollLeft * l3.x + u2.x,
    y: i2.y * l3.y - f4.scrollTop * l3.y + u2.y,
  };
}
function wt(t) {
  return Array.from(t.getClientRects());
}
function V(t, e) {
  let i2 = C2(t).scrollLeft;
  return e ? e.left + i2 : T3(E2(t)).left + i2;
}
function vt(t) {
  let e = E2(t),
    i2 = C2(t),
    n = t.ownerDocument.body,
    o = p2(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth),
    c2 = p2(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight),
    s2 = -i2.scrollLeft + V(t),
    r = -i2.scrollTop;
  return b2(n).direction === "rtl" &&
    (s2 += p2(e.clientWidth, n.clientWidth) - o),
    { width: o, height: c2, x: s2, y: r };
}
function xt(t, e) {
  let i2 = i(t),
    n = E2(t),
    o = i2.visualViewport,
    c2 = n.clientWidth,
    s2 = n.clientHeight,
    r = 0,
    f4 = 0;
  if (o) {
    c2 = o.width, s2 = o.height;
    let l3 = v();
    (!l3 || l3 && e === "fixed") && (r = o.offsetLeft, f4 = o.offsetTop);
  }
  return { width: c2, height: s2, x: r, y: f4 };
}
function yt(t, e) {
  let i2 = T3(t, true, e === "fixed"),
    n = i2.top + t.clientTop,
    o = i2.left + t.clientLeft,
    c2 = w2(t) ? F(t) : j(1),
    s2 = t.clientWidth * c2.x,
    r = t.clientHeight * c2.y,
    f4 = o * c2.x,
    l3 = n * c2.y;
  return { width: s2, height: r, x: f4, y: l3 };
}
function X2(t, e, i2) {
  let n;
  if (e === "viewport") n = xt(t, i2);
  else if (e === "document") n = vt(E2(t));
  else if (m3(e)) n = yt(e, i2);
  else {
    let o = Q(t);
    n = { ...e, x: e.x - o.x, y: e.y - o.y };
  }
  return q(n);
}
function Z(t, e) {
  let i2 = l2(t);
  return i2 === e || !m3(i2) || g2(i2)
    ? false
    : b2(i2).position === "fixed" || Z(i2, e);
}
function bt(t, e) {
  let i2 = e.get(t);
  if (i2) return i2;
  let n = d2(t, [], false).filter((r) => m3(r) && f3(r) !== "body"),
    o = null,
    c2 = b2(t).position === "fixed",
    s2 = c2 ? l2(t) : t;
  for (; m3(s2) && !g2(s2);) {
    let r = b2(s2), f4 = T2(s2);
    !f4 && r.position === "fixed" && (o = null),
      (c2 ? !f4 && !o : !f4 && r.position === "static" && !!o &&
            ["absolute", "fixed"].includes(o.position) ||
          y2(s2) && !f4 && Z(t, s2))
        ? n = n.filter((u2) => u2 !== s2)
        : o = r,
      s2 = l2(s2);
  }
  return e.set(t, n), n;
}
function Rt(t) {
  let { element: e, boundary: i2, rootBoundary: n, strategy: o } = t,
    s2 = [
      ...i2 === "clippingAncestors"
        ? N(e) ? [] : bt(e, this._c)
        : [].concat(i2),
      n,
    ],
    r = s2[0],
    f4 = s2.reduce((l3, u2) => {
      let a4 = X2(e, u2, o);
      return l3.top = p2(a4.top, l3.top),
        l3.right = m2(a4.right, l3.right),
        l3.bottom = m2(a4.bottom, l3.bottom),
        l3.left = p2(a4.left, l3.left),
        l3;
    }, X2(e, r, o));
  return {
    width: f4.right - f4.left,
    height: f4.bottom - f4.top,
    x: f4.left,
    y: f4.top,
  };
}
function Ot(t) {
  let { width: e, height: i2 } = J2(t);
  return { width: e, height: i2 };
}
function Ct(t, e, i2) {
  let n = w2(e),
    o = E2(e),
    c2 = i2 === "fixed",
    s2 = T3(t, true, c2, e),
    r = { scrollLeft: 0, scrollTop: 0 },
    f4 = j(0);
  if (n || !n && !c2) {
    if ((f3(e) !== "body" || y2(o)) && (r = C2(e)), n) {
      let h3 = T3(e, true, c2, e);
      f4.x = h3.x + e.clientLeft, f4.y = h3.y + e.clientTop;
    } else o && (f4.x = V(o));
  }
  let l3 = 0, u2 = 0;
  if (o && !n && !c2) {
    let h3 = o.getBoundingClientRect();
    u2 = h3.top + r.scrollTop, l3 = h3.left + r.scrollLeft - V(o, h3);
  }
  let a4 = s2.left + r.scrollLeft - f4.x - l3,
    p4 = s2.top + r.scrollTop - f4.y - u2;
  return { x: a4, y: p4, width: s2.width, height: s2.height };
}
function H(t) {
  return b2(t).position === "static";
}
function K2(t, e) {
  if (!w2(t) || b2(t).position === "fixed") return null;
  if (e) return e(t);
  let i2 = t.offsetParent;
  return E2(t) === i2 && (i2 = i2.ownerDocument.body), i2;
}
function tt(t, e) {
  let i2 = i(t);
  if (N(t)) return i2;
  if (!w2(t)) {
    let o = l2(t);
    for (; o && !g2(o);) {
      if (m3(o) && !H(o)) return o;
      o = l2(o);
    }
    return i2;
  }
  let n = K2(t, e);
  for (; n && D(n) && H(n);) n = K2(n, e);
  return n && g2(n) && H(n) && !T2(n) ? i2 : n || k2(t) || i2;
}
var Lt = async function (t) {
  let e = this.getOffsetParent || tt,
    i2 = this.getDimensions,
    n = await i2(t.floating);
  return {
    reference: Ct(t.reference, await e(t.floating), t.strategy),
    floating: { x: 0, y: 0, width: n.width, height: n.height },
  };
};
function Tt(t) {
  return b2(t).direction === "rtl";
}
var Et = {
  convertOffsetParentRelativeRectToViewportRelativeRect: mt,
  getDocumentElement: E2,
  getClippingRect: Rt,
  getOffsetParent: tt,
  getElementRects: Lt,
  getClientRects: wt,
  getDimensions: Ot,
  getScale: F,
  isElement: m3,
  isRTL: Tt,
};
function Ft(t, e) {
  let i2 = null, n, o = E2(t);
  function c2() {
    var r;
    clearTimeout(n), (r = i2) == null || r.disconnect(), i2 = null;
  }
  function s2(r, f4) {
    r === void 0 && (r = false), f4 === void 0 && (f4 = 1), c2();
    let { left: l3, top: u2, width: a4, height: p4 } = t
      .getBoundingClientRect();
    if (r || e(), !a4 || !p4) return;
    let h3 = w(u2),
      v2 = w(o.clientWidth - (l3 + a4)),
      d3 = w(o.clientHeight - (u2 + p4)),
      m4 = w(l3),
      w3 = {
        rootMargin: -h3 + "px " + -v2 + "px " + -d3 + "px " + -m4 + "px",
        threshold: p2(0, m2(1, f4)) || 1,
      },
      C3 = true;
    function B(q2) {
      let N2 = q2[0].intersectionRatio;
      if (N2 !== f4) {
        if (!C3) return s2();
        N2 ? s2(false, N2) : n = setTimeout(() => {
          s2(false, 1e-7);
        }, 1e3);
      }
      C3 = false;
    }
    try {
      i2 = new IntersectionObserver(B, { ...w3, root: o.ownerDocument });
    } catch {
      i2 = new IntersectionObserver(B, w3);
    }
    i2.observe(t);
  }
  return s2(true), c2;
}
function zt(t, e, i2, n) {
  n === void 0 && (n = {});
  let {
      ancestorScroll: o = true,
      ancestorResize: c2 = true,
      elementResize: s2 = typeof ResizeObserver == "function",
      layoutShift: r = typeof IntersectionObserver == "function",
      animationFrame: f4 = false,
    } = n,
    l3 = k3(t),
    u2 = o || c2 ? [...l3 ? d2(l3) : [], ...d2(e)] : [];
  u2.forEach((g3) => {
    o && g3.addEventListener("scroll", i2, { passive: true }),
      c2 && g3.addEventListener("resize", i2);
  });
  let a4 = l3 && r ? Ft(l3, i2) : null, p4 = -1, h3 = null;
  s2 && (h3 = new ResizeObserver((g3) => {
    let [w3] = g3;
    w3 && w3.target === l3 && h3 &&
    (h3.unobserve(e),
      cancelAnimationFrame(p4),
      p4 = requestAnimationFrame(() => {
        var C3;
        (C3 = h3) == null || C3.observe(e);
      })), i2();
  }),
    l3 && !f4 && h3.observe(l3),
    h3.observe(e));
  let v2, d3 = f4 ? T3(t) : null;
  f4 && m4();
  function m4() {
    let g3 = T3(t);
    d3 &&
    (g3.x !== d3.x || g3.y !== d3.y || g3.width !== d3.width ||
      g3.height !== d3.height) &&
    i2(),
      d3 = g3,
      v2 = requestAnimationFrame(m4);
  }
  return i2(), () => {
    var g3;
    u2.forEach((w3) => {
      o && w3.removeEventListener("scroll", i2),
        c2 && w3.removeEventListener("resize", i2);
    }),
      a4?.(),
      (g3 = h3) == null || g3.disconnect(),
      h3 = null,
      f4 && cancelAnimationFrame(v2);
  };
}
var At = X;
var Dt = pe;
var Nt = ue;
var Ht = we;
var St = ve;
var Vt = he;
var kt = (t, e, i2) => {
  let n = /* @__PURE__ */ new Map(),
    o = { platform: Et, ...i2 },
    c2 = { ...o.platform, _c: n };
  return me(t, e, { ...o, platform: c2 });
};

// v/jsr/@webcomponents/dropdown.mjs
if (typeof window !== "undefined") {
  class Dropdown extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open", delegatesFocus: true });
      this.open = false;
      this._cleanup = null;
    }
    static get observedAttributes() {
      return ["open"];
    }
    connectedCallback() {
      this.render();
      this.addEventListener("focus", () => this.focus());
      document.addEventListener("click", this.clickOutsideHandler.bind(this));
    }
    disconnectedCallback() {
      this.removeEventListener("focus", () => this.focus());
      document.removeEventListener(
        "click",
        this.clickOutsideHandler.bind(this),
      );
      if (this._cleanup) {
        this._cleanup();
      }
    }
    /**
     * @param {string} name
     * @param {any} _oldValue
     * @param {null} newValue
     */
    attributeChangedCallback(name, _oldValue, newValue) {
      if (name === "open") {
        this.open = newValue !== null;
        this.render();
        this._handleFloatingStyles();
      }
    }
    render() {
      const styles = `
      :host {
        display: inline-flex;
        min-height: 0;
        position: relative;
        width: fit-content;
        visibility: hidden;
      }

      :host > * {
        visibility: visible;
      }

      [part="dropmenu"] {
        --bg: var(--clr-surface--1);
        --gap: 0;
        --outln-clr: var(--bg);
        --radius: var(--scale-sm);
        --spacing: var(--scale-xs);

        background-color: var(--bg);
        border-radius: var(--radius);
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        height: max-content;
        isolation: isolate;
        max-height: calc(clamp(16dvh, 25dvh, 32dvh) + var(--scale-xl));
        max-width: calc(100dvw - var(--scale-sm));
        min-height: max-content;
        min-width: max-content;
        outline: solid color-mix(in var(--config-colorSpace, srgb), var(--outln-clr), gray 16%);
        overflow: clip;
        padding: var(--spacing);
        place-content: center;
        position: fixed;
        transition: top var(--animDefaults), bottom var(--animDefaults),
          opacity var(--animDefaults), visibility var(--animDefaults);
        z-index: 1000000;
      }

      [part="dropmenu__inner"] {
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

      ::slotted(button) {
        --radius: calc(var(--scale-sm) / 2) !important;
        width: 100% !important;
      }
    `;
      if (!this.shadowRoot) {
        throw Error("shadowroot is null");
      }
      this.shadowRoot.innerHTML = `
      <style>${styles}</style>
      <slot name="summary" tabindex="0"></slot>
      ${
        this.open
          ? `
        <div part="dropmenu">
          <div part="dropmenu__inner">
            <slot></slot>
          </div>
        </div>
      `
          : ""
      }
    `;
      this.shadowRoot.querySelector('slot[name="summary"]').addEventListener(
        "click",
        this._toggleOpen.bind(this),
      );
    }
    /**
     * @param {{ composedPath: () => any[]; }} event
     */
    clickOutsideHandler(event) {
      const target = event.composedPath()[0];
      const isOutside = !this.shadowRoot.contains(target) &&
        !this.contains(target);
      if (this.open && isOutside) {
        this.open = false;
        this.removeAttribute("open");
      }
    }
    _toggleOpen() {
      if (this._cleanup) {
        this._cleanup();
      }
      this.open = !this.open;
      if (this.open) {
        this.setAttribute("open", "");
      } else {
        this.removeAttribute("open");
      }
    }
    /**
     * @param {number} value
     */
    _roundByDPR(value) {
      const dpr = globalThis.devicePixelRatio || 1;
      return Math.round(value * dpr) / dpr;
    }
    _handleFloatingStyles() {
      const summary = this.shadowRoot.querySelector('slot[name="summary"]')
        .assignedElements()[0];
      const menu = this.shadowRoot.querySelector('[part="dropmenu"]');
      if (summary && menu && this.open) {
        this._cleanup = zt(
          summary,
          menu,
          async () => {
            const { x: x2, y: y3, middlewareData } = await kt(
              summary,
              menu,
              {
                middleware: [
                  Nt({
                    autoAlignment: true,
                    alignment: "bottom",
                    allowedPlacements: ["top", "bottom"],
                    crossAxis: true,
                    padding: 3,
                  }),
                  Dt(3),
                  Ht({
                    crossAxis: true,
                    mainAxis: true,
                    padding: 3,
                  }),
                  St({
                    apply({ rects, elements }) {
                      Object.assign(elements.floating.style, {
                        width: `${rects.reference.width}px`,
                      });
                    },
                  }),
                  {
                    name: "detectOverflow",
                    async fn(state) {
                      await At(state, {
                        altBoundary: true,
                        boundary: document.documentElement,
                        elementContext: "floating",
                        padding: 3,
                        rootBoundary: {
                          x: 0,
                          y: 0,
                          width: document.documentElement.clientWidth,
                          height: document.documentElement.clientHeight,
                        },
                      });
                      return {};
                    },
                  },
                  Vt(),
                ],
                placement: "bottom",
                strategy: "fixed",
              },
            );
            if (middlewareData.hide) {
              Object.assign(menu.style, {
                opacity: middlewareData.hide.referenceHidden ? "0" : "1",
                pointerEvents: middlewareData.hide.referenceHidden
                  ? "none"
                  : "initial",
              });
            }
            Object.assign(menu.style, {
              left: "0",
              top: "0",
              transform: `translate(${this._roundByDPR(x2)}px, ${
                this._roundByDPR(y3)
              }px)`,
            });
          },
          { animationFrame: true },
        );
      } else if (this._cleanup) {
        console.log("cleaning");
        this._cleanup();
        this._cleanup = null;
      }
    }
  }
  customElements.define("ly-dropdown", Dropdown);
}
