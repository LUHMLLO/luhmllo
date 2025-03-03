import {
  autoPlacement,
  autoUpdate,
  computePosition,
  detectOverflow,
  hide,
  offset,
  shift,
  size,
} from "https://esm.sh/@floating-ui/dom@1.6.11";

if (typeof window !== "undefined") {
  class Dropdown extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open", delegatesFocus: true });
      this.open = false;
      this._cleanup = null;
    }

    static get observedAttributes() {
      return ["open"];
    }

    connectedCallback() {
      this.render();
      this.addEventListener("focus", () => this.focus());
      document.addEventListener("click", this.clickOutsideHandler.bind(this));
    }

    disconnectedCallback() {
      this.removeEventListener("focus", () => this.focus());
      document.removeEventListener(
        "click",
        this.clickOutsideHandler.bind(this),
      );
      if (this._cleanup) {
        this._cleanup();
      }
    }

    /**
     * @param {string} name
     * @param {any} _oldValue
     * @param {null} newValue
     */
    attributeChangedCallback(name, _oldValue, newValue) {
      if (name === "open") {
        this.open = newValue !== null;
        this.render();
        this._handleFloatingStyles();
      }
    }

    render() {
      const styles = css`
      :host {
        display: inline-flex;
        min-height: 0;
        position: relative;
        width: fit-content;
        visibility: hidden;
      }

      :host > * {
        visibility: visible;
      }

      [part="dropmenu"] {
        background-color: var(--clr-surface);
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        height: max-content;
        isolation: isolate;
        max-height: calc(clamp(16dvh, 25dvh, 32dvh) + var(--xl));
        max-width: calc(100dvw - var(--sm));
        min-height: max-content;
        min-width: max-content;
        outline: solid hsl(from var(--clr-surface) h s calc(l + 5));
        overflow: clip;
        padding: var(--xs);
        place-content: center;
        position: fixed;
        transition-property: top, bottom, opacity, visibility;
        transition-duration: var(--animDuration);
        transition-timing-function: var(--animTiming);
        z-index: 1000000;
      }

      [part="dropmenu__inner"] {
        --percent: 16%;

        background-color: var(--clr-surface);
        display: grid;
        grid-auto-flow: row;
        grid-auto-rows: max-content;
        overflow-x: clip;
        overflow-y: auto;
        transition-delay: var(--animDuration);
      }

      div::-webkit-scrollbar {
        display: none;
      }

      ::slotted(button) {
        --radius: calc(var(--sm) / 2) !important;
        width: 100% !important;
      }
    `;

      if (!this.shadowRoot) {
        throw Error("shadowroot is null");
      }

      this.shadowRoot.innerHTML = `
      <style>${styles}</style>
      <slot name="summary" tabindex="0"></slot>
      ${
        this.open
          ? `
        <div part="dropmenu">
          <div part="dropmenu__inner">
            <slot></slot>
          </div>
        </div>
      `
          : ""
      }
    `;

      this.shadowRoot.querySelector('slot[name="summary"]').addEventListener(
        "click",
        this._toggleOpen.bind(this),
      );
    }

    /**
     * @param {{ composedPath: () => any[]; }} event
     */
    clickOutsideHandler(event) {
      const target = event.composedPath()[0];
      const isOutside = !this.shadowRoot.contains(target) &&
        !this.contains(target);

      if (this.open && isOutside) {
        this.open = false;
        this.removeAttribute("open");
      }
    }

    _toggleOpen() {
      if (this._cleanup) {
        this._cleanup();
      }

      this.open = !this.open;
      if (this.open) {
        this.setAttribute("open", "");
      } else {
        this.removeAttribute("open");
      }
    }

    /**
     * @param {number} value
     */
    _roundByDPR(value) {
      const dpr = globalThis.devicePixelRatio || 1;
      return Math.round(value * dpr) / dpr;
    }

    _handleFloatingStyles() {
      const summary = this.shadowRoot.querySelector('slot[name="summary"]')
        .assignedElements()[0];
      const menu = this.shadowRoot.querySelector('[part="dropmenu"]');

      if (summary && menu && this.open) {
        this._cleanup = autoUpdate(
          summary,
          menu,
          async () => {
            const { x, y, middlewareData } = await computePosition(
              summary,
              menu,
              {
                middleware: [
                  autoPlacement({
                    autoAlignment: true,
                    alignment: "bottom",
                    allowedPlacements: ["top", "bottom"],
                    crossAxis: true,
                    padding: 3,
                  }),
                  offset(3),
                  shift({
                    crossAxis: true,
                    mainAxis: true,
                    padding: 3,
                  }),
                  size({
                    apply({ rects, elements }) {
                      Object.assign(elements.floating.style, {
                        width: `${rects.reference.width}px`,
                      });
                    },
                  }),
                  {
                    name: "detectOverflow",
                    async fn(state) {
                      await detectOverflow(state, {
                        altBoundary: true,
                        boundary: document.documentElement,
                        elementContext: "floating",
                        padding: 3,
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
                ],
                placement: "bottom",
                strategy: "fixed",
              },
            );

            if (middlewareData.hide) {
              Object.assign(menu.style, {
                opacity: middlewareData.hide.referenceHidden ? "0" : "1",
                pointerEvents: middlewareData.hide.referenceHidden
                  ? "none"
                  : "initial",
              });
            }
            Object.assign(menu.style, {
              left: "0",
              top: "0",
              transform: `translate(${this._roundByDPR(x)}px, ${
                this._roundByDPR(y)
              }px)`,
            });
          },
          { animationFrame: true },
        );
      } else if (this._cleanup) {
        console.log("cleaning");
        this._cleanup();
        this._cleanup = null;
      }
    }
  }

  customElements.define("cat-dropdown", Dropdown);
}
