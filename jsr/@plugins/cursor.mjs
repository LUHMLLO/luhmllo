let cursor;
let isTouchDevice = false;

function initCursor(id) {
  cursor = document.getElementById(id);

  // Check if it's a touch device
  isTouchDevice = ("ontouchstart" in window) ||
    (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0);

  if (!isTouchDevice) {
    // Set initial cursor position and show it
    cursor.style.transform = "translate(-50%, -50%)";
    cursor.style.display = "block";

    // Mouse events
    document.addEventListener("mousemove", handleMove);
    globalThis.addEventListener("resize", updateCursorPosition);
  } else {
    // Hide the cursor on touch devices
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

      // Ensure cursor stays within viewport bounds
      const boundedX = Math.max(0, Math.min(x, viewportWidth));
      const boundedY = Math.max(0, Math.min(y, viewportHeight));

      cursor.style.left = `${boundedX}px`;
      cursor.style.top = `${boundedY}px`;
    });
  }
}

export default initCursor;
