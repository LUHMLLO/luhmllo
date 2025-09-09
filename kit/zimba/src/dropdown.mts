// deno-lint-ignore-file no-explicit-any

/**
 * DropdownAnchor - Handles intelligent positioning for dropdown menus
 *
 * Automatically positions dropdowns to stay within viewport bounds
 * with smooth positioning transitions and collision detection.
 */

interface AnchorOptions {
  /** Preferred vertical position relative to trigger */
  preferredY?: "bottom" | "top";
  /** Preferred horizontal alignment */
  preferredX?: "left" | "right" | "center";
  /** Margin from viewport edges */
  viewportMargin?: number;
  /** Gap between trigger and dropdown */
  gap?: number;
  /** Enable smooth positioning transitions */
  animated?: boolean;
  /** Move dropdown to document.body for always-on-top behavior */
  portal?: boolean;
  portalTo?: HTMLElement | Element | Node;
}

interface PositionResult {
  x: number;
  y: number;
  placement: {
    vertical: "top" | "bottom";
    horizontal: "left" | "right" | "center";
  };
}

/**
 * Memory-efficient throttle with proper cleanup
 */
function throttle<T extends (...args: any[]) => void>(
  func: T,
  limit: number,
): T & { cancel: () => void } {
  let inThrottle: boolean;
  let timeoutId: number | undefined;

  const throttled = function (this: any, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      timeoutId = setTimeout(() => {
        inThrottle = false;
        timeoutId = undefined;
      }, limit);
    }
  } as T & { cancel: () => void };

  // Add cancel method for cleanup
  throttled.cancel = () => {
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
      timeoutId = undefined;
    }
    inThrottle = false;
  };

  return throttled;
}

class DropdownAnchor {
  private detailsElement: HTMLDetailsElement;
  private dropdownContent: HTMLElement;
  private trigger: HTMLElement;
  private options: Required<AnchorOptions>;

  // Observers - lazy initialized
  private resizeObserver?: ResizeObserver;
  private mutationObserver?: MutationObserver;
  private intersectionObserver?: IntersectionObserver;

  // Event handlers - bound once
  private clickOutsideHandler: (e: Event) => void;
  private toggleHandler: (e: Event) => void;
  private throttledUpdate: (() => void) & { cancel: () => void };

  // Animation frame tracking
  private animationFrameId?: number;
  private lastTriggerRect?: DOMRect;

  // State flags
  private isDestroyed: boolean = false;
  private isObserversSetup: boolean = false;

  // Portal-related properties
  private originalParent: Element | null = null;
  private originalNextSibling: Element | null = null;
  private isPortaled: boolean = false;

  constructor(
    detailsElement: HTMLDetailsElement,
    dropdownContent: HTMLElement,
    options: AnchorOptions = {},
  ) {
    this.detailsElement = detailsElement;
    this.dropdownContent = dropdownContent;
    this.trigger = detailsElement.querySelector("summary") as HTMLElement;

    if (!this.trigger) {
      throw new Error(
        "DropdownAnchor: No <summary> element found in <details>",
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
      ...options,
    };

    // Bind handlers once
    this.clickOutsideHandler = this.handleClickOutside.bind(this);
    this.toggleHandler = this.handleToggle.bind(this);
    this.throttledUpdate = throttle(this.updatePosition.bind(this), 16);

    this.initializeDropdown();
    // Lazy setup observers only when needed
    this.setupObserversLazy();
  }

  private initializeDropdown(): void {
    if (!this.options.animated) {
      this.dropdownContent.style.transition = "none";
    }

    // Store original position for portal restoration
    if (this.options.portal) {
      this.originalParent = this.dropdownContent.parentElement;
      this.originalNextSibling = this.dropdownContent.nextElementSibling;
    }

    // Listen for details toggle events
    this.detailsElement.addEventListener("toggle", this.toggleHandler, {
      passive: true,
    });

    // Initial positioning if already open
    if (this.detailsElement.open) {
      requestAnimationFrame(() => this.throttledUpdate());
    }
  }

  private enablePortal(): void {
    if (!this.options.portal || this.isPortaled) return;

    this.options.portalTo.appendChild(this.dropdownContent);
    this.isPortaled = true;
  }

  private disablePortal(): void {
    if (!this.options.portal || !this.isPortaled || !this.originalParent) {
      return;
    }

    if (
      this.originalNextSibling &&
      this.originalNextSibling.parentNode === this.originalParent
    ) {
      this.originalParent.insertBefore(
        this.dropdownContent,
        this.originalNextSibling,
      );
    } else {
      this.originalParent.appendChild(this.dropdownContent);
    }
    this.isPortaled = false;
  }

  /**
   * More efficient position tracking with early exit
   */
  private startPositionTracking(): void {
    if (this.animationFrameId || this.isDestroyed) return;

    const trackPosition = () => {
      // Early exit checks
      if (!this.detailsElement.open || this.isDestroyed) {
        this.animationFrameId = undefined;
        this.lastTriggerRect = undefined; // Clear memory
        return;
      }

      const currentRect = this.trigger.getBoundingClientRect();

      // Efficient rect comparison - avoid object creation when possible
      const hasChanged = !this.lastTriggerRect ||
        Math.abs(this.lastTriggerRect.x - currentRect.x) > 0.5 ||
        Math.abs(this.lastTriggerRect.y - currentRect.y) > 0.5 ||
        Math.abs(this.lastTriggerRect.width - currentRect.width) > 0.5 ||
        Math.abs(this.lastTriggerRect.height - currentRect.height) > 0.5;

      if (hasChanged) {
        // Reuse DOMRect object instead of creating new one
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
    };

    this.animationFrameId = requestAnimationFrame(trackPosition);
  }

  private stopPositionTracking(): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = undefined;
    }
    this.lastTriggerRect = undefined; // Clear memory
  }

  private handleToggle(_e: Event): void {
    if (this.detailsElement.open) {
      this.enablePortal();
      this.startPositionTracking();
      this.setupObserversLazy(); // Ensure observers are active

      // Double RAF for layout stability
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          this.throttledUpdate();
        });
      });

      document.addEventListener("click", this.clickOutsideHandler, {
        passive: true,
      });
    } else {
      this.stopPositionTracking();
      document.removeEventListener("click", this.clickOutsideHandler);
      this.disablePortal();
      // Keep observers active for reuse
    }
  }

  private handleClickOutside(e: Event): void {
    const target = e.target as Node | null;
    if (!target) return;

    if (
      !this.detailsElement.contains(target) &&
      !this.dropdownContent.contains(target)
    ) {
      this.detailsElement.open = false;
    }
  }

  private calculatePosition(): PositionResult {
    const triggerRect = this.trigger.getBoundingClientRect();
    const dropdownRect = this.dropdownContent.getBoundingClientRect();
    const viewport = {
      width: globalThis.innerWidth,
      height: globalThis.innerHeight,
    };

    let x = 0;
    let y = 0;
    let verticalPlacement: "top" | "bottom" = this.options.preferredY;
    let horizontalPlacement: "left" | "right" | "center" =
      this.options.preferredX;

    // Get actual dropdown dimensions or use reasonable defaults
    const dropdownWidth = dropdownRect.width > 0 ? dropdownRect.width : 200;
    const dropdownHeight = dropdownRect.height > 0 ? dropdownRect.height : 200;

    // Calculate vertical position
    const spaceBelow = viewport.height - triggerRect.bottom -
      this.options.viewportMargin;
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
            triggerRect.top - dropdownHeight - this.options.gap,
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

    // Calculate horizontal position
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
          if (
            leftAlignedX + dropdownWidth <=
              viewport.width - this.options.viewportMargin
          ) {
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
        } else if (
          x + dropdownWidth > viewport.width - this.options.viewportMargin
        ) {
          x = viewport.width - dropdownWidth - this.options.viewportMargin;
          horizontalPlacement = "right";
        } else {
          horizontalPlacement = "center";
        }
        break;
    }

    // Final viewport constraints
    x = Math.max(
      this.options.viewportMargin,
      Math.min(x, viewport.width - dropdownWidth - this.options.viewportMargin),
    );

    y = Math.max(
      this.options.viewportMargin,
      Math.min(
        y,
        viewport.height - dropdownHeight - this.options.viewportMargin,
      ),
    );

    return {
      x,
      y,
      placement: {
        vertical: verticalPlacement,
        horizontal: horizontalPlacement,
      },
    };
  }

  public updatePosition(): void {
    if (!this.detailsElement.open || this.isDestroyed) return;

    const position = this.calculatePosition();

    // Use transform for better performance than top/left
    this.dropdownContent.style.setProperty("--translate-x", `${position.x}px`);
    this.dropdownContent.style.setProperty("--translate-y", `${position.y}px`);
  }

  /**
   * Lazy observer setup - only create when needed
   */
  private setupObserversLazy(): void {
    if (this.isObserversSetup || this.isDestroyed) return;

    // Global event listeners with passive flag
    globalThis.addEventListener("scroll", this.throttledUpdate, {
      passive: true,
    });
    globalThis.addEventListener("resize", this.throttledUpdate, {
      passive: true,
    });

    // ResizeObserver - most efficient for size changes
    if (globalThis.ResizeObserver) {
      this.resizeObserver = new ResizeObserver((entries) => {
        // Batch check to avoid unnecessary updates
        if (this.detailsElement.open && entries.length > 0) {
          this.throttledUpdate();
        }
      });
      this.resizeObserver.observe(this.dropdownContent);
      this.resizeObserver.observe(this.trigger);
    }

    // MutationObserver - watch for DOM changes
    if (globalThis.MutationObserver) {
      this.mutationObserver = new MutationObserver((mutations) => {
        // Only update if dropdown is open and we have relevant mutations
        if (this.detailsElement.open && mutations.length > 0) {
          this.throttledUpdate();
        }
      });

      // More targeted observation
      this.mutationObserver.observe(this.detailsElement, {
        childList: true,
        attributes: true,
        attributeFilter: ["class", "style"],
        subtree: false, // Don't watch deep subtree for performance
      });

      this.mutationObserver.observe(this.dropdownContent, {
        childList: true,
        attributes: true,
        attributeFilter: ["class", "style"],
        subtree: false,
      });

      // Document body observation for repositioning
      this.mutationObserver.observe(document.body, {
        childList: true,
        subtree: true,
      });
    }

    // IntersectionObserver - detect visibility changes
    if (globalThis.IntersectionObserver) {
      this.intersectionObserver = new IntersectionObserver((entries) => {
        if (this.detailsElement.open && entries.length > 0) {
          this.throttledUpdate();
        }
      }, {
        threshold: [0, 1],
        rootMargin: "10px", // Small buffer for better detection
      });

      this.intersectionObserver.observe(this.trigger);
    }

    this.isObserversSetup = true;
  }

  public open(): void {
    if (this.isDestroyed) return;
    this.detailsElement.open = true;
  }

  public close(): void {
    if (this.isDestroyed) return;
    this.detailsElement.open = false;
  }

  public toggle(): void {
    if (this.isDestroyed) return;
    this.detailsElement.open = !this.detailsElement.open;
  }

  public configure(options: Partial<AnchorOptions>): void {
    if (this.isDestroyed) return;
    Object.assign(this.options, options);
    this.throttledUpdate();
  }

  /**
   * Comprehensive cleanup to prevent memory leaks
   */
  public destroy(): void {
    if (this.isDestroyed) return;

    // Stop animation frame immediately
    this.stopPositionTracking();

    // Restore portal state
    this.disablePortal();

    // Remove all event listeners
    this.detailsElement.removeEventListener("toggle", this.toggleHandler);
    document.removeEventListener("click", this.clickOutsideHandler);
    globalThis.removeEventListener("scroll", this.throttledUpdate);
    globalThis.removeEventListener("resize", this.throttledUpdate);

    // Cancel throttled function
    this.throttledUpdate.cancel();

    // Disconnect and clear all observers
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = undefined;
    }

    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
      this.mutationObserver = undefined;
    }

    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
      this.intersectionObserver = undefined;
    }

    // Clear references to DOM elements
    this.originalParent = null;
    this.originalNextSibling = null;
    this.lastTriggerRect = undefined;

    // Mark as destroyed
    this.isDestroyed = true;
    this.isObserversSetup = false;
  }
}

/**
 * Utility function to quickly anchor a dropdown
 */
function anchorDropdown(
  detailsElement: HTMLDetailsElement,
  dropdownContent: HTMLElement,
  options?: AnchorOptions,
): DropdownAnchor {
  return new DropdownAnchor(detailsElement, dropdownContent, options);
}

export {
  anchorDropdown,
  type AnchorOptions,
  DropdownAnchor,
  type PositionResult,
};
