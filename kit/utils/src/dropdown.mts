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

function throttle<T extends (...args: any[]) => void>(
  func: T,
  limit: number,
): T {
  let inThrottle: boolean;

  return function (this: any, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  } as T;
}

class DropdownAnchor {
  private detailsElement: HTMLDetailsElement;
  private dropdownContent: HTMLElement;
  private trigger: HTMLElement;
  private options: Required<AnchorOptions>;
  private resizeObserver?: ResizeObserver;
  private mutationObserver?: MutationObserver;
  private clickOutsideHandler: (e: Event) => void;
  private toggleHandler: (e: Event) => void;
  private handleUpdatePosition: () => void;
  private isDestroyed: boolean = false;

  // Portal-related properties
  private originalParent: Element | null = null;
  private originalNextSibling: Element | null = null;
  private isPortaled: boolean = false;

  /**
   * Creates a new DropdownAnchor instance
   */
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

    this.clickOutsideHandler = this.handleClickOutside.bind(this);
    this.toggleHandler = this.handleToggle.bind(this);
    this.handleUpdatePosition = this.updatePosition.bind(this);

    this.initializeDropdown();
    this.setupObservers();
  }

  /**
   * Initializes dropdown positioning styles and event handlers
   */
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
    this.detailsElement.addEventListener("toggle", this.toggleHandler);

    // Initial positioning if already open
    if (this.detailsElement.open) {
      this.handleUpdatePosition();
    }
  }

  /**
   * Moves dropdown to document.body for portal behavior
   */
  private enablePortal(): void {
    if (!this.options.portal || this.isPortaled) return;

    this.options.portalTo.appendChild(this.dropdownContent);
    this.isPortaled = true;
  }

  /**
   * Restores dropdown to original position
   */
  private disablePortal(): void {
    if (!this.options.portal || !this.isPortaled || !this.originalParent) {
      return;
    }

    if (this.originalNextSibling) {
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
   * Handles the details toggle event
   */
  private handleToggle(_e: Event): void {
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
  private handleClickOutside(_e: Event): void {
    const target = _e.target as Node;
    if (
      !this.detailsElement.contains(target) &&
      !this.dropdownContent.contains(target)
    ) {
      this.detailsElement.open = false;
    }
  }

  /**
   * Calculates optimal dropdown position based on viewport constraints
   */
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

    // Calculate vertical position
    const spaceBelow = viewport.height - triggerRect.bottom -
      this.options.viewportMargin;
    const spaceAbove = triggerRect.top - this.options.viewportMargin;
    const dropdownHeight = dropdownRect.height || 200; // fallback for initial render

    if (this.options.preferredY === "bottom") {
      if (spaceBelow >= dropdownHeight + this.options.gap) {
        // Fits below
        y = triggerRect.bottom + this.options.gap;
        verticalPlacement = "bottom";
      } else if (spaceAbove >= dropdownHeight + this.options.gap) {
        // Fits above
        y = triggerRect.top - dropdownHeight - this.options.gap;
        verticalPlacement = "top";
      } else {
        // Use side with more space
        if (spaceBelow > spaceAbove) {
          y = triggerRect.bottom + this.options.gap;
          verticalPlacement = "bottom";
        } else {
          y = triggerRect.top - dropdownHeight - this.options.gap;
          verticalPlacement = "top";
        }
      }
    } else {
      // Preferred top
      if (spaceAbove >= dropdownHeight + this.options.gap) {
        y = triggerRect.top - dropdownHeight - this.options.gap;
        verticalPlacement = "top";
      } else {
        y = triggerRect.bottom + this.options.gap;
        verticalPlacement = "bottom";
      }
    }

    // Calculate horizontal position
    const dropdownWidth = dropdownRect.width || 200; // fallback

    switch (this.options.preferredX) {
      case "left":
        x = triggerRect.left;
        // Check if it overflows right edge
        if (x + dropdownWidth > viewport.width - this.options.viewportMargin) {
          x = triggerRect.right - dropdownWidth;
          horizontalPlacement = "right";
        }
        break;

      case "right":
        x = triggerRect.right - dropdownWidth;
        // Check if it overflows left edge
        if (x < this.options.viewportMargin) {
          x = triggerRect.left;
          horizontalPlacement = "left";
        }
        break;

      case "center":
        x = triggerRect.left + (triggerRect.width - dropdownWidth) / 2;
        // Adjust if overflowing
        if (x < this.options.viewportMargin) {
          x = this.options.viewportMargin;
          horizontalPlacement = "left";
        } else if (
          x + dropdownWidth > viewport.width - this.options.viewportMargin
        ) {
          x = viewport.width - dropdownWidth - this.options.viewportMargin;
          horizontalPlacement = "right";
        }
        break;
    }

    // Ensure dropdown stays within viewport bounds
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

  /**
   * Updates the dropdown position
   */
  public updatePosition(): void {
    if (!this.detailsElement.open) return;

    const position = this.calculatePosition();

    this.dropdownContent.style.setProperty(
      "--translate-y",
      `${position.y}px`,
    );
    this.dropdownContent.style.setProperty(
      "--translate-x",
      `${position.x}px`,
    );
  }

  /**
   * Sets up observers for automatic repositioning
   */
  private setupObservers(): void {
    globalThis.addEventListener(
      "scroll",
      throttle(this.handleUpdatePosition, 50),
      {
        passive: true,
      },
    );
    globalThis.addEventListener(
      "resize",
      throttle(this.handleUpdatePosition, 50),
      {
        passive: true,
      },
    );

    // Observe dropdown size changes
    // Note: Observers already handle their own throttling internally.
    // No need to wrap them in the throttle utility.
    if (globalThis.ResizeObserver) {
      this.resizeObserver = new ResizeObserver(this.handleUpdatePosition);
      this.resizeObserver.observe(this.dropdownContent);
    }

    // Observe DOM changes that might affect positioning
    if (globalThis.MutationObserver) {
      this.mutationObserver = new MutationObserver(this.handleUpdatePosition);
      this.mutationObserver.observe(this.dropdownContent, {
        childList: true,
        subtree: true,
        attributes: false,
      });
    }
  }

  /**
   * Opens the dropdown
   */
  public open(): void {
    if (this.isDestroyed) return;
    this.detailsElement.open = true;
  }

  /**
   * Closes the dropdown
   */
  public close(): void {
    if (this.isDestroyed) return;
    this.detailsElement.open = false;
  }

  /**
   * Toggles the dropdown
   */
  public toggle(): void {
    if (this.isDestroyed) return;
    this.detailsElement.open = !this.detailsElement.open;
  }

  /**
   * Updates positioning options
   */
  public configure(options: Partial<AnchorOptions>): void {
    Object.assign(this.options, options);
    this.handleUpdatePosition();
  }

  /**
   * Destroys the anchor and removes all observers
   */
  public destroy(): void {
    // Restore dropdown to original position if portaled
    this.disablePortal();

    // Remove event listeners
    this.detailsElement.removeEventListener("toggle", this.toggleHandler);
    document.removeEventListener("click", this.clickOutsideHandler);
    globalThis.removeEventListener("scroll", this.handleUpdatePosition);
    globalThis.removeEventListener("resize", this.handleUpdatePosition);

    // Disconnect observers
    this.resizeObserver?.disconnect();
    this.mutationObserver?.disconnect();

    this.isDestroyed = true;
  }
}

/**
 * Utility function to quickly anchor a dropdown to work with HTMLDetailsElement
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
