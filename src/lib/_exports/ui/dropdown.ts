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
	flip,
	detectOverflow,
} from '@floating-ui/dom';

@customElement('ly-dropdown')
export class Dropdown extends LitElement {
	@property({ type: Boolean, reflect: true }) open = false;

	static override readonly styles = css`
		:host(:is(ly-dropdown)) {
			display: inline-flex;
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
					white 3%
				);
			outline-offset: -0.125rem;
			overflow: clip;
			padding: var(--spacing);
			place-content: center;
			position: absolute;
			width: 100%;
			z-index: 100000;
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
								offset(3),
								flip(),
								shift(),
								{
									name: 'detectOverflowMiddleware',
									async fn(state) {
										await detectOverflow(state, {
											altBoundary: true,
											padding: 5,
											boundary: document.documentElement,
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
						left: `${x}px`,
						top: `${y}px`,
					});
				}
			);
		} else if (this._cleanup) {
			this._cleanup();
			this._cleanup = undefined;
		}
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

	// Added clickOutside handler
	clickOutsideHandler(event: MouseEvent) {
		const target = event.composedPath()[0] as Node; // Use composedPath to get the correct event target
		const isOutside =
			!this.shadowRoot?.contains(target) && !this.contains(target); // Check if the target is outside both shadow root and light DOM

		// console.log(event.composed); // For debugging purposes
		// console.log(event.composedPath()); // For debugging purposes

		if (this.open && isOutside) {
			this.open = false;
		}
	}
}
