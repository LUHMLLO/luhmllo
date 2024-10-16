import { css, html, LitElement, nothing } from "lit";
import {
  customElement,
  property,
  query,
  queryAssignedElements,
} from "lit/decorators.js";

import {
  type Alignment,
  autoPlacement,
  autoUpdate,
  computePosition,
  detectOverflow,
  hide,
  offset,
  shift,
  size,
} from "@floating-ui/dom";

@customElement("ly-dropdown")
export class Dropdown extends LitElement {
  static override readonly styles = css`
		:host(:is(ly-dropdown)) {
			display: inline-flex;
			min-height: 0;
			position: relative;
			width: fit-content;
			visibility: hidden;
		}

		:host(:is(ly-dropdown)) > * {
			visibility: visible;
		}

		:host(:is(ly-dropdown[open]))::part(dropmenu) {
			--bg: var(--clr-background);
			--gap: 0;
			--outln-clr: var(--bg);
			--radius: var(--scale-sm);
			--spacing: var(--scale-5xs);

			background-color: var(--bg);
			border-radius: var(--radius);
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: 1fr;
			height: max-content;
			isolation: isolate;
			max-height: calc(clamp(16dvh, 25dvh, 32dvh) + var(--scale-5xl));
			max-width: calc(100dvw - var(--scale-sm));
			min-height: max-content;
			min-width: max-content;
			outline: solid
				color-mix(
					in var(--prefers-colorSpace, srgb),
					var(--outln-clr),
					gray 16%
				);
			overflow: clip;
			padding: var(--spacing);
			place-content: center;
			position: fixed;
			transition: top var(--animDefaults), bottom var(--animDefaults),
				opacity var(--animDefaults), visbility var(--animDefaults);
			z-index: 1000000;
		}

		:host(:is(ly-dropdown[open]))::part(dropmenu__inner) {
			--percent: 16%;

			background-color: var(--bg);
			border-radius: calc(var(--radius) / 2);
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

		div ::slotted(button) {
			--radius: calc(var(--scale-sm) / 2) !important;
			width: 100% !important;
		}
	`;

  static override readonly properties = {
    delegatesFocus: { type: Boolean, reflect: true },
  };

  static override readonly shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };

  @property({ type: Boolean, reflect: true })
  open = <true | false> false;
  @queryAssignedElements({ slot: "summary", flatten: true })
  _dropsummary!: Array<HTMLElement>;
  @query('div[part="dropmenu"]')
  _dropmenu!: HTMLElement;
  private _cleanup?: any;

  override firstUpdated() {
    this.addEventListener("focus", () => this.focus());
    document.addEventListener("click", this.clickOutsideHandler.bind(this));
  }

  override async updated(): Promise<void> {
    this._handleFloatingStyles();
  }

  override async disconnectedCallback(): Promise<void> {
    super.disconnectedCallback();
    this.removeEventListener("focus", () => this.focus());
    document.removeEventListener("click", this.clickOutsideHandler.bind(this));

    if (this._cleanup) {
      this._cleanup();
    }
  }

  protected override render() {
    return html`
			<slot name="summary" tabindex="0" @click=${this._toggleOpen}></slot>
			${
      this.open
        ? html`
						<div part="dropmenu">
							<div part="dropmenu__inner">
								<slot></slot>
							</div>
						</div>
				  `
        : nothing
    }
		`;
  }

  public clickOutsideHandler(event: MouseEvent) {
    const target = event.composedPath()[0] as HTMLElement;
    const isOutside = !this.shadowRoot?.contains(target) &&
      !this.contains(target);

    if (this.open && isOutside) {
      this.open = false;
    }
  }

  private _toggleOpen() {
    if (this._cleanup) {
      this._cleanup();
    }

    this.open = !this.open;
  }

  private _roundByDPR(value: number) {
    const dpr = window.devicePixelRatio || 1;
    return Math.round(value * dpr) / dpr;
  }

  private _handleFloatingStyles() {
    if (this._dropsummary && this._dropmenu && this.open) {
      this._cleanup = autoUpdate(
        this._dropsummary[0],
        this._dropmenu,
        async () => {
          await computePosition(this._dropsummary[0], this._dropmenu, {
            middleware: [
              autoPlacement({
                autoAlignment: true,
                alignment: "bottom" as Alignment,
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
          }).then(({ x, y, middlewareData }) => {
            if (middlewareData.hide) {
              Object.assign(this._dropmenu.style, {
                opacity: middlewareData.hide.referenceHidden ? "0" : "1",
                pointerEvents: middlewareData.hide.referenceHidden
                  ? "none"
                  : "initial",
                // visibility: middlewareData.hide.referenceHidden
                // 	? 'hidden'
                // 	: 'visible',
              });
            }
            Object.assign(this._dropmenu.style, {
              inset: "0",
              transform: `translate(${
                this._roundByDPR(
                  x,
                )
              }px, ${this._roundByDPR(y)}px)`,
            });
          });
        },
        { animationFrame: true },
      );
    } else if (this._cleanup) {
      this._cleanup();
      this._cleanup = undefined;
    }
  }
}
