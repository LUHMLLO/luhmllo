// deno-lint-ignore-file
var e, n = !1;
function d(t) {
  e = document.getElementById(t),
    n = "ontouchstart" in window || navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0,
    n
      ? e.style.display = "none"
      : (e.style.transform = "translate(-50%, -50%)",
        e.style.display = "block",
        document.addEventListener("mousemove", r),
        globalThis.addEventListener("resize", i));
}
function r(t) {
  n || i(t.clientX, t.clientY);
}
function i(t, o) {
  n || requestAnimationFrame(() => {
    let s = globalThis.innerWidth || document.documentElement.clientWidth,
      a = globalThis.innerHeight || document.documentElement.clientHeight,
      l = Math.max(0, Math.min(t, s)),
      c = Math.max(0, Math.min(o, a));
    e.style.left = `${l}px`, e.style.top = `${c}px`;
  });
}
var u = d;
export { u as default };
