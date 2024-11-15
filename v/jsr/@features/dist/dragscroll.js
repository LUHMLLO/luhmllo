// deno-lint-ignore-file

// v/jsr/@features/dragscroll.mjs
var scrollContainer;
var isDown = false;
var startX;
var startY;
var scrollLeft;
var scrollTop;
var originalScrollSnapType;
function initDragScroll(id) {
  scrollContainer = document.getElementById(id);
  scrollContainer.addEventListener("touchstart", handleStart);
  scrollContainer.addEventListener("touchend", handleEnd);
  scrollContainer.addEventListener("touchcancel", handleEnd);
  scrollContainer.addEventListener("touchmove", handleMove);
  scrollContainer.addEventListener("mousedown", handleStart);
  document.addEventListener("mouseup", handleEnd);
  scrollContainer.addEventListener("mouseleave", handleEnd);
  scrollContainer.addEventListener("mousemove", handleMove);
}
function handleStart(e) {
  isDown = true;
  const pageX = e.pageX || e.touches[0].pageX;
  const pageY = e.pageY || e.touches[0].pageY;
  startX = pageX - scrollContainer.offsetLeft;
  startY = pageY - scrollContainer.offsetTop;
  scrollLeft = scrollContainer.scrollLeft;
  scrollTop = scrollContainer.scrollTop;
  scrollContainer.style.userSelect = "none";
  originalScrollSnapType = scrollContainer.style.scrollSnapType;
  scrollContainer.style.scrollSnapType = "none";
}
function handleEnd() {
  isDown = false;
  scrollContainer.style.userSelect = "";
  scrollContainer.style.scrollSnapType = originalScrollSnapType;
}
function handleMove(e) {
  if (!isDown) return;
  e.preventDefault();
  const pageX = e.pageX || e.touches[0].pageX;
  const pageY = e.pageY || e.touches[0].pageY;
  const x = pageX - scrollContainer.offsetLeft;
  const y = pageY - scrollContainer.offsetTop;
  const walkX = (x - startX) * 2;
  const walkY = (y - startY) * 2;
  scrollContainer.scrollTo({
    left: scrollLeft + 10 - walkX,
    top: scrollTop + 10 - walkY,
    behavior: "smooth",
  });
}
var dragscroll_default = initDragScroll;
export { dragscroll_default as default };
