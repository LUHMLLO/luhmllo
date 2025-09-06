// deno-lint-ignore-file
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/dropdown.mts
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
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
  resizeObserver;
  mutationObserver;
  clickOutsideHandler;
  toggleHandler;
  handleUpdatePosition;
  isDestroyed = false;
  // Portal-related properties
  originalParent = null;
  originalNextSibling = null;
  isPortaled = false;
  /**
   * Creates a new DropdownAnchor instance
   */
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
    this.handleUpdatePosition = this.updatePosition.bind(this);
    this.initializeDropdown();
    this.setupObservers();
  }
  /**
   * Initializes dropdown positioning styles and event handlers
   */
  initializeDropdown() {
    if (!this.options.animated) {
      this.dropdownContent.style.transition = "none";
    }
    if (this.options.portal) {
      this.originalParent = this.dropdownContent.parentElement;
      this.originalNextSibling = this.dropdownContent.nextElementSibling;
    }
    this.detailsElement.addEventListener("toggle", this.toggleHandler);
    if (this.detailsElement.open) {
      this.handleUpdatePosition();
    }
  }
  /**
   * Moves dropdown to document.body for portal behavior
   */
  enablePortal() {
    if (!this.options.portal || this.isPortaled) return;
    this.options.portalTo.appendChild(this.dropdownContent);
    this.isPortaled = true;
  }
  /**
   * Restores dropdown to original position
   */
  disablePortal() {
    if (!this.options.portal || !this.isPortaled || !this.originalParent) {
      return;
    }
    if (this.originalNextSibling) {
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
   * Handles the details toggle event
   */
  handleToggle(_e) {
    if (this.detailsElement.open) {
      this.enablePortal();
      this.handleUpdatePosition();
      document.addEventListener("click", this.clickOutsideHandler);
    } else {
      document.removeEventListener("click", this.clickOutsideHandler);
      this.disablePortal();
    }
  }
  /**
   * Handles clicks outside the dropdown to close it
   */
  handleClickOutside(_e) {
    const target = _e.target;
    if (!this.detailsElement.contains(target) && !this.dropdownContent.contains(target)) {
      this.detailsElement.open = false;
    }
  }
  /**
   * Calculates optimal dropdown position based on viewport constraints
   */
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
    const spaceBelow = viewport.height - triggerRect.bottom - this.options.viewportMargin;
    const spaceAbove = triggerRect.top - this.options.viewportMargin;
    const dropdownHeight = dropdownRect.height || 200;
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
          y = triggerRect.top - dropdownHeight - this.options.gap;
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
    const dropdownWidth = dropdownRect.width || 200;
    switch (this.options.preferredX) {
      case "left":
        x = triggerRect.left;
        if (x + dropdownWidth > viewport.width - this.options.viewportMargin) {
          x = triggerRect.right - dropdownWidth;
          horizontalPlacement = "right";
        }
        break;
      case "right":
        x = triggerRect.right - dropdownWidth;
        if (x < this.options.viewportMargin) {
          x = triggerRect.left;
          horizontalPlacement = "left";
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
  /**
   * Updates the dropdown position
   */
  updatePosition() {
    if (!this.detailsElement.open) return;
    const position = this.calculatePosition();
    this.dropdownContent.style.setProperty(
      "--translate-y",
      `${position.y}px`
    );
    this.dropdownContent.style.setProperty(
      "--translate-x",
      `${position.x}px`
    );
  }
  /**
   * Sets up observers for automatic repositioning
   */
  setupObservers() {
    globalThis.addEventListener(
      "scroll",
      throttle(this.handleUpdatePosition, 50),
      {
        passive: true
      }
    );
    globalThis.addEventListener(
      "resize",
      throttle(this.handleUpdatePosition, 50),
      {
        passive: true
      }
    );
    if (globalThis.ResizeObserver) {
      this.resizeObserver = new ResizeObserver(this.handleUpdatePosition);
      this.resizeObserver.observe(this.dropdownContent);
    }
    if (globalThis.MutationObserver) {
      this.mutationObserver = new MutationObserver(this.handleUpdatePosition);
      this.mutationObserver.observe(this.dropdownContent, {
        childList: true,
        subtree: true,
        attributes: false
      });
    }
  }
  /**
   * Opens the dropdown
   */
  open() {
    if (this.isDestroyed) return;
    this.detailsElement.open = true;
  }
  /**
   * Closes the dropdown
   */
  close() {
    if (this.isDestroyed) return;
    this.detailsElement.open = false;
  }
  /**
   * Toggles the dropdown
   */
  toggle() {
    if (this.isDestroyed) return;
    this.detailsElement.open = !this.detailsElement.open;
  }
  /**
   * Updates positioning options
   */
  configure(options) {
    Object.assign(this.options, options);
    this.handleUpdatePosition();
  }
  /**
   * Destroys the anchor and removes all observers
   */
  destroy() {
    this.disablePortal();
    this.detailsElement.removeEventListener("toggle", this.toggleHandler);
    document.removeEventListener("click", this.clickOutsideHandler);
    globalThis.removeEventListener("scroll", this.handleUpdatePosition);
    globalThis.removeEventListener("resize", this.handleUpdatePosition);
    this.resizeObserver?.disconnect();
    this.mutationObserver?.disconnect();
    this.isDestroyed = true;
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
