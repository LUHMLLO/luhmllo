let circle, views;
let isDown = false;
let startX, startY, scrollLeft, scrollTop;
let originalScrollSnapType;
let isTouchDevice = false;
let cursorX = 0, cursorY = 0;

function init() {
  circle = document.getElementById("cursor");
  views = document.getElementById("views");

  // Check if it's a touch device
  isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0);

  if (!isTouchDevice) {
    // Set initial cursor position and show it
    circle.style.transform = 'translate(-50%, -50%)';
    circle.style.display = 'block';

    // Mouse events
    document.addEventListener("mousemove", handleMove);
    views.addEventListener("mousedown", handleStart);
    document.addEventListener("mouseup", handleEnd);
    views.addEventListener("mouseleave", handleEnd);

    // Add resize event listener
    window.addEventListener("resize", updateCursorPosition);
  } else {
    // Hide the cursor on touch devices
    circle.style.display = 'none';
  }

  // Touch events (for scrolling functionality)
  views.addEventListener("touchstart", handleStart);
  views.addEventListener("touchend", handleEnd);
  views.addEventListener("touchcancel", handleEnd);
  views.addEventListener("touchmove", handleMove);
}

function handleStart(e) {
  isDown = true;
  const pageX = e.pageX || e.touches[0].pageX;
  const pageY = e.pageY || e.touches[0].pageY;
  startX = pageX - views.offsetLeft;
  startY = pageY - views.offsetTop;
  scrollLeft = views.scrollLeft;
  scrollTop = views.scrollTop;
  views.style.userSelect = "none";

  // Disable scroll snap
  originalScrollSnapType = views.style.scrollSnapType;
  views.style.scrollSnapType = "none";

  if (!isTouchDevice) {
    // Animate cursor scale
    circle.style.transition = 'transform 0.3s ease';
    circle.style.transform = 'translate(-50%, -50%) scale(0.8)';
  }
}

function handleEnd() {
  isDown = false;
  views.style.userSelect = "";

  // Re-enable scroll snap
  views.style.scrollSnapType = originalScrollSnapType;

  if (!isTouchDevice) {
    // Animate cursor scale back
    circle.style.transform = 'translate(-50%, -50%) scale(1)';
  }
}

function handleMove(e) {
  if (!isTouchDevice) {
    cursorX = e.clientX;
    cursorY = e.clientY;
    updateCursorPosition();
  }

  if (!isDown) return;
  e.preventDefault();
  const pageX = e.pageX || e.touches[0].pageX;
  const pageY = e.pageY || e.touches[0].pageY;
  const x = pageX - views.offsetLeft;
  const y = pageY - views.offsetTop;
  const walkX = (x - startX) * 2;
  const walkY = (y - startY) * 2;

  // Smooth scrolling
  views.scrollTo({
    left: scrollLeft + 10 - walkX,
    top: scrollTop + 10 - walkY,
    behavior: "smooth"
  });
}

function updateCursorPosition() {
  if (!isTouchDevice) {
    requestAnimationFrame(() => {
      const viewportWidth = globalThis.innerWidth || document.documentElement.clientWidth;
      const viewportHeight = globalThis.innerHeight || document.documentElement.clientHeight;

      // Ensure cursor stays within viewport bounds
      const boundedX = Math.max(0, Math.min(cursorX, viewportWidth));
      const boundedY = Math.max(0, Math.min(cursorY, viewportHeight));

      circle.style.left = `${boundedX}px`;
      circle.style.top = `${boundedY}px`;
    });
  }
}

// Initialize when the DOM is ready
if (typeof window !== "undefined") {
  if (document.readyState === "complete" || document.readyState === "interactive") {
    init();
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }
}

init()