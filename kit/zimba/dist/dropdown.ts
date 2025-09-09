// deno-lint-ignore-file
// @ts-nocheck - Generated code
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/dropdown.mts
function throttle(func, limit) {
  let inThrottle;
  let timeoutId;
  const throttled = /* @__PURE__ */ __name(function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      timeoutId = setTimeout(() => {
        inThrottle = false;
        timeoutId = void 0;
      }, limit);
    }
  }, "throttled");
  throttled.cancel = () => {
    if (timeoutId !== void 0) {
      clearTimeout(timeoutId);
      timeoutId = void 0;
    }
    inThrottle = false;
  };
  return throttled;
}
__name(throttle, "throttle");
var DropdownAnchor = class {
  static {
    __name(this, "DropdownAnchor");
  }
  detailsElement;
  dropdownContent;
  trigger;
  options;
  // Observers - lazy initialized
  resizeObserver;
  mutationObserver;
  intersectionObserver;
  // Event handlers - bound once
  clickOutsideHandler;
  toggleHandler;
  throttledUpdate;
  // Animation frame tracking
  animationFrameId;
  lastTriggerRect;
  // State flags
  isDestroyed = false;
  isObserversSetup = false;
  // Portal-related properties
  originalParent = null;
  originalNextSibling = null;
  isPortaled = false;
  constructor(detailsElement, dropdownContent, options = {}) {
    this.detailsElement = detailsElement;
    this.dropdownContent = dropdownContent;
    this.trigger = detailsElement.querySelector("summary");
    if (!this.trigger) {
      throw new Error(
        "DropdownAnchor: No <summary> element found in <details>"
      );
    }
    this.options = {
      preferredY: "bottom",
      preferredX: "left",
      viewportMargin: 5,
      gap: 5,
      animated: true,
      portal: false,
      portalTo: document.body,
      ...options
    };
    this.clickOutsideHandler = this.handleClickOutside.bind(this);
    this.toggleHandler = this.handleToggle.bind(this);
    this.throttledUpdate = throttle(this.updatePosition.bind(this), 16);
    this.initializeDropdown();
    this.setupObserversLazy();
  }
  initializeDropdown() {
    if (!this.options.animated) {
      this.dropdownContent.style.transition = "none";
    }
    if (this.options.portal) {
      this.originalParent = this.dropdownContent.parentElement;
      this.originalNextSibling = this.dropdownContent.nextElementSibling;
    }
    this.detailsElement.addEventListener("toggle", this.toggleHandler, {
      passive: true
    });
    if (this.detailsElement.open) {
      requestAnimationFrame(() => this.throttledUpdate());
    }
  }
  enablePortal() {
    if (!this.options.portal || this.isPortaled) return;
    this.options.portalTo.appendChild(this.dropdownContent);
    this.isPortaled = true;
  }
  disablePortal() {
    if (!this.options.portal || !this.isPortaled || !this.originalParent) {
      return;
    }
    if (this.originalNextSibling && this.originalNextSibling.parentNode === this.originalParent) {
      this.originalParent.insertBefore(
        this.dropdownContent,
        this.originalNextSibling
      );
    } else {
      this.originalParent.appendChild(this.dropdownContent);
    }
    this.isPortaled = false;
  }
  /**
   * More efficient position tracking with early exit
   */
  startPositionTracking() {
    if (this.animationFrameId || this.isDestroyed) return;
    const trackPosition = /* @__PURE__ */ __name(() => {
      if (!this.detailsElement.open || this.isDestroyed) {
        this.animationFrameId = void 0;
        this.lastTriggerRect = void 0;
        return;
      }
      const currentRect = this.trigger.getBoundingClientRect();
      const hasChanged = !this.lastTriggerRect || Math.abs(this.lastTriggerRect.x - currentRect.x) > 0.5 || Math.abs(this.lastTriggerRect.y - currentRect.y) > 0.5 || Math.abs(this.lastTriggerRect.width - currentRect.width) > 0.5 || Math.abs(this.lastTriggerRect.height - currentRect.height) > 0.5;
      if (hasChanged) {
        if (!this.lastTriggerRect) {
          this.lastTriggerRect = new DOMRect();
        }
        this.lastTriggerRect.x = currentRect.x;
        this.lastTriggerRect.y = currentRect.y;
        this.lastTriggerRect.width = currentRect.width;
        this.lastTriggerRect.height = currentRect.height;
        this.updatePosition();
      }
      this.animationFrameId = requestAnimationFrame(trackPosition);
    }, "trackPosition");
    this.animationFrameId = requestAnimationFrame(trackPosition);
  }
  stopPositionTracking() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = void 0;
    }
    this.lastTriggerRect = void 0;
  }
  handleToggle(_e) {
    if (this.detailsElement.open) {
      this.enablePortal();
      this.startPositionTracking();
      this.setupObserversLazy();
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          this.throttledUpdate();
        });
      });
      document.addEventListener("click", this.clickOutsideHandler, {
        passive: true
      });
    } else {
      this.stopPositionTracking();
      document.removeEventListener("click", this.clickOutsideHandler);
      this.disablePortal();
    }
  }
  handleClickOutside(e) {
    const target = e.target;
    if (!target) return;
    if (!this.detailsElement.contains(target) && !this.dropdownContent.contains(target)) {
      this.detailsElement.open = false;
    }
  }
  calculatePosition() {
    const triggerRect = this.trigger.getBoundingClientRect();
    const dropdownRect = this.dropdownContent.getBoundingClientRect();
    const viewport = {
      width: globalThis.innerWidth,
      height: globalThis.innerHeight
    };
    let x = 0;
    let y = 0;
    let verticalPlacement = this.options.preferredY;
    let horizontalPlacement = this.options.preferredX;
    const dropdownWidth = dropdownRect.width > 0 ? dropdownRect.width : 200;
    const dropdownHeight = dropdownRect.height > 0 ? dropdownRect.height : 200;
    const spaceBelow = viewport.height - triggerRect.bottom - this.options.viewportMargin;
    const spaceAbove = triggerRect.top - this.options.viewportMargin;
    if (this.options.preferredY === "bottom") {
      if (spaceBelow >= dropdownHeight + this.options.gap) {
        y = triggerRect.bottom + this.options.gap;
        verticalPlacement = "bottom";
      } else if (spaceAbove >= dropdownHeight + this.options.gap) {
        y = triggerRect.top - dropdownHeight - this.options.gap;
        verticalPlacement = "top";
      } else {
        if (spaceBelow > spaceAbove) {
          y = triggerRect.bottom + this.options.gap;
          verticalPlacement = "bottom";
        } else {
          y = Math.max(
            this.options.viewportMargin,
            triggerRect.top - dropdownHeight - this.options.gap
          );
          verticalPlacement = "top";
        }
      }
    } else {
      if (spaceAbove >= dropdownHeight + this.options.gap) {
        y = triggerRect.top - dropdownHeight - this.options.gap;
        verticalPlacement = "top";
      } else {
        y = triggerRect.bottom + this.options.gap;
        verticalPlacement = "bottom";
      }
    }
    switch (this.options.preferredX) {
      case "left":
        x = triggerRect.left;
        if (x + dropdownWidth > viewport.width - this.options.viewportMargin) {
          const rightAlignedX = triggerRect.right - dropdownWidth;
          if (rightAlignedX >= this.options.viewportMargin) {
            x = rightAlignedX;
            horizontalPlacement = "right";
          } else {
            x = viewport.width - dropdownWidth - this.options.viewportMargin;
            horizontalPlacement = "right";
          }
        }
        break;
      case "right":
        x = triggerRect.right - dropdownWidth;
        if (x < this.options.viewportMargin) {
          const leftAlignedX = triggerRect.left;
          if (leftAlignedX + dropdownWidth <= viewport.width - this.options.viewportMargin) {
            x = leftAlignedX;
            horizontalPlacement = "left";
          } else {
            x = this.options.viewportMargin;
            horizontalPlacement = "left";
          }
        }
        break;
      case "center":
        x = triggerRect.left + (triggerRect.width - dropdownWidth) / 2;
        if (x < this.options.viewportMargin) {
          x = this.options.viewportMargin;
          horizontalPlacement = "left";
        } else if (x + dropdownWidth > viewport.width - this.options.viewportMargin) {
          x = viewport.width - dropdownWidth - this.options.viewportMargin;
          horizontalPlacement = "right";
        } else {
          horizontalPlacement = "center";
        }
        break;
    }
    x = Math.max(
      this.options.viewportMargin,
      Math.min(x, viewport.width - dropdownWidth - this.options.viewportMargin)
    );
    y = Math.max(
      this.options.viewportMargin,
      Math.min(
        y,
        viewport.height - dropdownHeight - this.options.viewportMargin
      )
    );
    return {
      x,
      y,
      placement: {
        vertical: verticalPlacement,
        horizontal: horizontalPlacement
      }
    };
  }
  updatePosition() {
    if (!this.detailsElement.open || this.isDestroyed) return;
    const position = this.calculatePosition();
    this.dropdownContent.style.setProperty("--translate-x", `${position.x}px`);
    this.dropdownContent.style.setProperty("--translate-y", `${position.y}px`);
  }
  /**
   * Lazy observer setup - only create when needed
   */
  setupObserversLazy() {
    if (this.isObserversSetup || this.isDestroyed) return;
    globalThis.addEventListener("scroll", this.throttledUpdate, {
      passive: true
    });
    globalThis.addEventListener("resize", this.throttledUpdate, {
      passive: true
    });
    if (globalThis.ResizeObserver) {
      this.resizeObserver = new ResizeObserver((entries) => {
        if (this.detailsElement.open && entries.length > 0) {
          this.throttledUpdate();
        }
      });
      this.resizeObserver.observe(this.dropdownContent);
      this.resizeObserver.observe(this.trigger);
    }
    if (globalThis.MutationObserver) {
      this.mutationObserver = new MutationObserver((mutations) => {
        if (this.detailsElement.open && mutations.length > 0) {
          this.throttledUpdate();
        }
      });
      this.mutationObserver.observe(this.detailsElement, {
        childList: true,
        attributes: true,
        attributeFilter: ["class", "style"],
        subtree: false
        // Don't watch deep subtree for performance
      });
      this.mutationObserver.observe(this.dropdownContent, {
        childList: true,
        attributes: true,
        attributeFilter: ["class", "style"],
        subtree: false
      });
      this.mutationObserver.observe(document.body, {
        childList: true,
        subtree: true
      });
    }
    if (globalThis.IntersectionObserver) {
      this.intersectionObserver = new IntersectionObserver((entries) => {
        if (this.detailsElement.open && entries.length > 0) {
          this.throttledUpdate();
        }
      }, {
        threshold: [0, 1],
        rootMargin: "10px"
        // Small buffer for better detection
      });
      this.intersectionObserver.observe(this.trigger);
    }
    this.isObserversSetup = true;
  }
  open() {
    if (this.isDestroyed) return;
    this.detailsElement.open = true;
  }
  close() {
    if (this.isDestroyed) return;
    this.detailsElement.open = false;
  }
  toggle() {
    if (this.isDestroyed) return;
    this.detailsElement.open = !this.detailsElement.open;
  }
  configure(options) {
    if (this.isDestroyed) return;
    Object.assign(this.options, options);
    this.throttledUpdate();
  }
  /**
   * Comprehensive cleanup to prevent memory leaks
   */
  destroy() {
    if (this.isDestroyed) return;
    this.stopPositionTracking();
    this.disablePortal();
    this.detailsElement.removeEventListener("toggle", this.toggleHandler);
    document.removeEventListener("click", this.clickOutsideHandler);
    globalThis.removeEventListener("scroll", this.throttledUpdate);
    globalThis.removeEventListener("resize", this.throttledUpdate);
    this.throttledUpdate.cancel();
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = void 0;
    }
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
      this.mutationObserver = void 0;
    }
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
      this.intersectionObserver = void 0;
    }
    this.originalParent = null;
    this.originalNextSibling = null;
    this.lastTriggerRect = void 0;
    this.isDestroyed = true;
    this.isObserversSetup = false;
  }
};
function anchorDropdown(detailsElement, dropdownContent, options) {
  return new DropdownAnchor(detailsElement, dropdownContent, options);
}
__name(anchorDropdown, "anchorDropdown");
export {
  DropdownAnchor,
  anchorDropdown
};
