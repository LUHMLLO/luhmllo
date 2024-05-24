import { LitElement, css, html, nothing } from 'lit';
import {
	customElement,
	property,
	query,
	queryAssignedNodes,
} from 'lit/decorators.js';

import {
	computePosition,
	autoUpdate,
	offset,
	shift,
	detectOverflow,
	autoPlacement,
	type Alignment,
	size,
} from '@floating-ui/dom';

@customElement('ly-dropdown')
export class Dropdown extends LitElement {
	@property({ type: Boolean, reflect: true }) open = false;

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
			outline: solid 0.125rem
				color-mix(
					in var(--prefers-colorSpace, srgb),
					var(--outln-clr),
					gray 16%
				);
			outline-offset: -0.125rem;
			overflow: clip;
			padding: var(--spacing);
			place-content: center;
			position: fixed;
			/*width: fit-content;*/
			z-index: 1000000;
		}

		:host(:is(ly-dropdown[open]))::part(dropmenu__inner) {
			--percent: 16%;

			background-color: var(--bg);
			border-radius: calc(var(--radius) / 2);
			/*clip-path: inset(0% round var(--radius));*/
			display: grid;
			grid-auto-flow: row;
			grid-auto-rows: max-content;
			/*mask: linear-gradient(
				90deg,
				transparent,
				black var(--percent),
				black calc(100% - var(--percent)),
				transparent
			);*/
			/*mask: radial-gradient(circle at center, transparent, var(--bg) var(--percent));*/
			overflow-x: clip;
			overflow-y: auto;
			transition: inset var(--animDefaults), margin var(--animDefaults),
				transform var(--animDefaults), translate var(--animDefaults);
		}

		div::-webkit-scrollbar {
			display: none;
		}

		div ::slotted(button) {
			--radius: calc(var(--scale-sm) / 2) !important;
			width: 100% !important;
		}
	`;

	@queryAssignedNodes({ slot: 'summary', flatten: true })
	private _dropsummary!: HTMLElement[];
	@query('div[part="dropmenu"]') private _dropmenu!: HTMLElement;
	private _cleanup?: any;

	override firstUpdated() {
		document.addEventListener('click', this.clickOutsideHandler.bind(this));
	}

	override async updated(): Promise<void> {
		this._handleFloatingStyles();
	}

	override async disconnectedCallback(): Promise<void> {
		super.disconnectedCallback();
		document.removeEventListener('click', this.clickOutsideHandler.bind(this));

		if (this._cleanup) {
			this._cleanup();
		}
	}

	protected override render() {
		return html`
			<slot name="summary" @click=${this._toggleOpen}></slot>
			${this.open
				? html`
						<div part="dropmenu">
							<div part="dropmenu__inner">
								<slot></slot>
							</div>
						</div>
				  `
				: nothing}
		`;
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
				this._dropsummary[0]!,
				this._dropmenu,
				async () => {
					const { x, y } = await computePosition(
						this._dropsummary[0]!,
						this._dropmenu,
						{
							middleware: [
								autoPlacement({
									autoAlignment: true,
									alignment: 'bottom' as Alignment,
									allowedPlacements: ['top','bottom'],
									crossAxis: true,
									padding: 3,
								}),
								offset(3),
								shift({
									crossAxis: true,
									mainAxis: true,
									// limiter: limitShift({
									// 	offset: ({ rects }) => ({
									// 		crossAxis: rects.floating.width,
									// 		mainAxis: rects.reference.height,
									// 	}),
									// }),
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
									name: 'detectOverflow',
									async fn(state) {
										await detectOverflow(state, {
											altBoundary: true,
											boundary: document.documentElement,
											elementContext: 'floating',
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
							],
							placement: 'bottom',
							strategy: 'fixed',
						}
					);
					Object.assign(this._dropmenu.style, {
						inset: '0',
						transform: `translate(${this._roundByDPR(x)}px, ${this._roundByDPR(
							y
						)}px)`,
					});
				},
				{ animationFrame: true }
			);
		} else if (this._cleanup) {
			this._cleanup();
			this._cleanup = undefined;
		}
	}

	clickOutsideHandler(event: MouseEvent) {
		const target = event.composedPath()[0] as Node;
		const isOutside =
			!this.shadowRoot?.contains(target) && !this.contains(target);

		if (this.open && isOutside) {
			this.open = false;
		}
	}
}
