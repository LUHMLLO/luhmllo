/// <reference lib="dom" />
/// <reference lib="es6" />

import {
  autoPlacement,
  autoUpdate,
  computePosition,
  detectOverflow,
  hide,
  type Middleware,
  offset,
  type Placement,
  shift,
  type Strategy,
} from "https://esm.sh/@floating-ui/dom";

/**
 * Custom dropdown web component that provides floating UI positioning
 * with automatic placement, overflow detection, and click-outside handling.
 *
 * @example
 * ```html
 * <x-dropdown>
 *   <button slot="summary">Toggle Dropdown</button>
 *   <div>Dropdown content here</div>
 * </x-dropdown>
 * ```
 */
export class XDropdown extends HTMLElement {
  private _open: boolean = false;
  private _cleanup: (() => void) | null = null;
  private _boundClickHandler: (event: Event) => void;

  constructor() {
    super();
    this.attachShadow({ mode: "open", delegatesFocus: true });
    this._boundClickHandler = this.clickOutsideHandler.bind(this);
  }

  /**
   * Observed attributes for the dropdown component
   * @returns Array of attribute names to observe
   */
  static get observedAttributes(): string[] {
    return ["open"];
  }

  /**
   * Gets the current open state of the dropdown
   * @returns {boolean} True if dropdown is open
   */
  get open(): boolean {
    return this._open;
  }

  /**
   * Sets the open state of the dropdown
   * @param {boolean} value - The open state to set
   */
  set open(value: boolean) {
    this._open = value;
    if (value) {
      this.setAttribute("open", "");
    } else {
      this.removeAttribute("open");
    }
    this.render();
    this._handleFloatingStyles();
  }

  /**
   * Called when the element is added to the DOM
   */
  connectedCallback(): void {
    this.render();
    this.addEventListener("focus", this._handleFocus.bind(this));
    document.addEventListener("click", this._boundClickHandler);
  }

  /**
   * Called when the element is removed from the DOM
   */
  disconnectedCallback(): void {
    this.removeEventListener("focus", this._handleFocus.bind(this));
    document.removeEventListener("click", this._boundClickHandler);
    this._cleanupFloating();
  }

  /**
   * Called when observed attributes change
   * @param {string} name - The attribute name
   * @param {string | null} _oldValue - Previous value
   * @param {string | null} newValue - New value
   */
  attributeChangedCallback(
    name: string,
    _oldValue: string | null,
    newValue: string | null,
  ): void {
    if (name === "open") {
      this._open = newValue !== null;
      this.render();
      this._handleFloatingStyles();
    }
  }

  /**
   * Renders the dropdown component's shadow DOM
   */
  private render(): void {
    const styles = `
      :root {
        interpolate-size: allow-keywords;
      }
      
      :host {
        flex-shrink: 0;
        height: calc-size(max-content, size);
        min-height: 0;
        min-width: 0;
        position: relative;
        transition-property: height, width;
        transition-duration: var(--animDuration);
        transition-timing-function: var(--animTiming);
        width: calc-size(max-content, size);
        z-index: auto;
      }

      ::slotted(summary),
      ::slotted([slot="summary"]) {
        align-items: center;
        cursor: pointer;
        display: flex;
        flex-shrink: 0;
    
        &::marker {
          content: "";
          display: none;
        }
      }

      [part="dropmenu"] {
        background-color: var(--clr-background__base);
        border: solid 2px var(--clr-border__base);
        display: flex;
        flex-direction: column;
        isolation: isolate;
        max-height: calc(100dvh - var(--translate-y));
        max-width: calc(100dvw - var(--translate-x));
        min-height: 0;
        min-width: 0;
        overflow-x: clip;
        overflow-y: auto;
        padding: var(--space-sm);
        position: fixed;
        transform: translate3d(var(--translate-x),var(--translate-y),0) scale3d(1,1,1);
        transition-property: top, bottom, opacity, visibility;
        transition-duration: var(--animDuration);
        transition-timing-function: var(--animTiming);
        z-index: 1000000;
      }

      ::slotted(*) {
        flex-shrink: 0;
        width: 100%;
      }
    `;

    if (!this.shadowRoot) {
      throw new Error("shadowRoot is null");
    }

    this.shadowRoot.innerHTML = `
      <style>${styles}</style>
      <slot name="summary" tabindex="0"></slot>
      ${
      this._open
        ? `<div part="dropmenu">
            <slot></slot>
          </div>`
        : ""
    }
    `;

    // Add event listeners after rendering
    const summarySlot = this.shadowRoot.querySelector(
      'slot[name="summary"]',
    ) as HTMLSlotElement;
    if (summarySlot) {
      summarySlot.addEventListener("click", this._toggleOpen.bind(this));
      summarySlot.addEventListener("keydown", this._handleKeydown.bind(this));
    }
  }

  /**
   * Handles focus events on the dropdown
   */
  private _handleFocus(): void {
    // Focus handling logic can be added here if needed
  }

  /**
   * Handles keydown events for accessibility
   * @param {KeyboardEvent} event - The keyboard event
   */
  private _handleKeydown(event: KeyboardEvent): void {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      this._toggleOpen();
    } else if (event.key === "Escape" && this._open) {
      event.preventDefault();
      this.open = false;
    }
  }

  /**
   * Handles clicks outside the dropdown to close it
   * @param {Event} event - The click event
   */
  private clickOutsideHandler(event: Event): void {
    const composedPath = event.composedPath();
    const target = composedPath[0] as Node;
    const isOutside = !this.shadowRoot?.contains(target) &&
      !this.contains(target);

    if (this._open && isOutside) {
      this.open = false;
    }
  }

  /**
   * Toggles the open state of the dropdown
   */
  private _toggleOpen(): void {
    this.open = !this._open;
  }

  /**
   * Rounds a value by device pixel ratio for crisp positioning
   * @param {number} value - Value to round
   * @returns {number} Rounded value
   */
  private _roundByDPR(value: number): number {
    const dpr = globalThis.devicePixelRatio || 1;
    return Math.round(value * dpr) / dpr;
  }

  /**
   * Cleans up floating UI positioning
   */
  private _cleanupFloating(): void {
    if (this._cleanup) {
      this._cleanup();
      this._cleanup = null;
    }
  }

  /**
   * Handles floating UI positioning and updates
   */
  private _handleFloatingStyles(): void {
    const summarySlot = this.shadowRoot?.querySelector(
      'slot[name="summary"]',
    ) as HTMLSlotElement;
    const summary = summarySlot?.assignedElements()[0] as HTMLElement;
    const menu = this.shadowRoot?.querySelector(
      '[part="dropmenu"]',
    ) as HTMLElement;

    if (summary && menu && this._open) {
      this._cleanup = autoUpdate(
        summary,
        menu,
        async () => {
          const middleware: Middleware[] = [
            autoPlacement({
              autoAlignment: true,
              alignment: "start" as const,
              allowedPlacements: ["top", "bottom"] as Placement[],
              crossAxis: true,
              padding: 8,
            }),
            offset(8),
            shift({
              crossAxis: true,
              mainAxis: true,
              padding: 8,
            }),
            {
              name: "detectOverflow",
              async fn(state) {
                await detectOverflow(state, {
                  altBoundary: true,
                  boundary: document.documentElement,
                  elementContext: "floating" as const,
                  padding: 8,
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
            hide(),
          ];

          const { x, y, middlewareData } = await computePosition(
            summary,
            menu,
            {
              middleware,
              placement: "bottom-start" as Placement,
              strategy: "fixed" as Strategy,
            },
          );

          // Handle visibility based on overflow detection
          if (middlewareData.hide) {
            const isHidden = middlewareData.hide.referenceHidden ||
              middlewareData.hide.escaped;
            Object.assign(menu.style, {
              opacity: isHidden ? "0" : "1",
              pointerEvents: isHidden ? "none" : "auto",
              visibility: isHidden ? "hidden" : "visible",
            });
          } else {
            Object.assign(menu.style, {
              opacity: "1",
              pointerEvents: "auto",
              visibility: "visible",
            });
          }

          // Apply positioning
          Object.assign(
            menu.style,
            {
              left: "0",
              top: "0",
            },
          );

          menu.style.setProperty(
            "--translate-x",
            `${this._roundByDPR(x)}px`,
          );
          menu.style.setProperty(
            "--translate-y",
            `${this._roundByDPR(y)}px`,
          );
        },
        { animationFrame: true },
      );
    } else {
      this._cleanupFloating();
    }
  }
}

// Register the custom element only once
if (typeof window !== "undefined" && !customElements.get("x-dropdown")) {
  customElements.define("x-dropdown", XDropdown);
}
