// deno-lint-ignore-file

// v/jsr/@features/cursor.mjs
var cursor;
var isTouchDevice = false;
function initCursor(id) {
  cursor = document.getElementById(id);
  isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0;
  if (!isTouchDevice) {
    cursor.style.transform = "translate(-50%, -50%)";
    cursor.style.display = "block";
    document.addEventListener("mousemove", handleMove);
    globalThis.addEventListener("resize", updateCursorPosition);
  } else {
    cursor.style.display = "none";
  }
}
function handleMove(e) {
  if (!isTouchDevice) {
    updateCursorPosition(e.clientX, e.clientY);
  }
}
function updateCursorPosition(x, y) {
  if (!isTouchDevice) {
    requestAnimationFrame(() => {
      const viewportWidth = globalThis.innerWidth ||
        document.documentElement.clientWidth;
      const viewportHeight = globalThis.innerHeight ||
        document.documentElement.clientHeight;
      const boundedX = Math.max(0, Math.min(x, viewportWidth));
      const boundedY = Math.max(0, Math.min(y, viewportHeight));
      cursor.style.left = `${boundedX}px`;
      cursor.style.top = `${boundedY}px`;
    });
  }
}
var cursor_default = initCursor;
export { cursor_default as default };
