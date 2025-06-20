import {
  autoPlacement,
  autoUpdate,
  computePosition,
  detectOverflow,
  hide,
  offset,
  shift,
} from "https://esm.sh/@floating-ui/dom@1.6.13"

if (typeof window !== "undefined" && !customElements.get("x-dropdown")) {
  class Dropdown extends HTMLElement {
    constructor () {
      super()
      this.attachShadow({ mode: "open", delegatesFocus: true })
      this.open = false
      this._cleanup = null
    }

    static get observedAttributes() {
      return [ "open" ]
    }

    connectedCallback() {
      this.render()
      this.addEventListener("focus", () => this.focus())
      document.addEventListener("click", this.clickOutsideHandler.bind(this))
    }

    disconnectedCallback() {
      this.removeEventListener("focus", () => this.focus())
      document.removeEventListener(
        "click",
        this.clickOutsideHandler.bind(this),
      )
      if (this._cleanup) {
        this._cleanup()
      }
    }

    /**
     * @param {string} name
     * @param {any} _oldValue
     * @param {null} newValue
     */
    attributeChangedCallback(name, _oldValue, newValue) {
      if (name === "open") {
        this.open = newValue !== null
        this.render()
        this._handleFloatingStyles()
      }
    }

    render() {
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
        display: flex;
        flex-direction: column;
        height: calc-size(max-content, size);
        isolation: isolate;
        max-height: clamp(40dvh, 150px, 70dvh);
        max-width: calc(100dvw - var(--space-md));
        min-height: 0;
        min-width: 0;
        outline: solid 2px var(--clr-border__base);
        outline-offset: -2px;
        overflow-x: clip;
        overflow-y: auto;
        padding: var(--space-sm);
        position: fixed;
        transition-property: top, bottom, opacity, visibility;
        transition-duration: var(--animDuration);
        transition-timing-function: var(--animTiming);
        width: calc-size(max-content, size);
        z-index: 1000000;
      }

      ::slotted(*) {
        flex-shrink: 0;
        width: 100%;
      }
    `

      if (!this.shadowRoot) {
        throw Error("shadowroot is null")
      }

      this.shadowRoot.innerHTML = `
      <style>${ styles }</style>
      <slot name="summary" tabindex="0"></slot>
      ${ this.open
          ? `
        <div part="dropmenu">
            <slot></slot>
        </div>
      `
          : ""
        }
    `

      this.shadowRoot.querySelector('slot[name="summary"]').addEventListener(
        "click",
        this._toggleOpen.bind(this),
      )
    }

    /**
     * @param {{ composedPath: () => any[]; }} event
     */
    clickOutsideHandler(event) {
      const target = event.composedPath()[ 0 ]
      const isOutside = !this.shadowRoot.contains(target) &&
        !this.contains(target)

      if (this.open && isOutside) {
        this.open = false
        this.removeAttribute("open")
      }
    }

    _toggleOpen() {
      if (this._cleanup) {
        this._cleanup()
      }

      this.open = !this.open
      if (this.open) {
        this.setAttribute("open", "")
      } else {
        this.removeAttribute("open")
      }
    }

    /**
     * @param {number} value
     */
    _roundByDPR(value) {
      const dpr = globalThis.devicePixelRatio || 1
      return Math.round(value * dpr) / dpr
    }

    _handleFloatingStyles() {
      const summary = this.shadowRoot.querySelector('slot[name="summary"]')
        .assignedElements()[ 0 ]
      const menu = this.shadowRoot.querySelector('[part="dropmenu"]')

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
                    allowedPlacements: [ "top", "bottom" ],
                    crossAxis: true,
                    padding: 3,
                  }),
                  offset(3),
                  shift({
                    crossAxis: true,
                    mainAxis: true,
                    padding: 3,
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
                      })
                      return {}
                    },
                  },
                  hide(),
                ],
                placement: "bottom",
                strategy: "fixed",
              },
            )

            if (middlewareData.hide) {
              Object.assign(menu.style, {
                opacity: middlewareData.hide.referenceHidden ? "0" : "1",
                pointerEvents: middlewareData.hide.referenceHidden
                  ? "none"
                  : "initial",
              })
            }
            Object.assign(menu.style, {
              left: "0",
              top: "0",
              transform: `translate(${ this._roundByDPR(x) }px, ${ this._roundByDPR(y)
                }px)`,
            })
          },
          { animationFrame: true },
        )
      } else if (this._cleanup) {
        console.log("cleaning")
        this._cleanup()
        this._cleanup = null
      }
    }
  }

  customElements.define("x-dropdown", Dropdown)
}

// Register only once
if (typeof window !== "undefined" && !customElements.get("x-dropdown")) {
  customElements.define("x-dropdown", XDropdown)
}