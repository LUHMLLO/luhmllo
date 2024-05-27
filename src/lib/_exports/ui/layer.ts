import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement( 'ly-layer' )
export class Layer extends LitElement {
	static override readonly styles = css`
		:host(:is(ly-layer)) {
			/* local vars */
			--bg: none;
			--clr: var(--clr-text);
			--m: auto;
			--ps: fixed;

			background-color: var(--bg);
			color: var(--clr);
			display: flex;
			flex-direction: column;
			height: 100dvh;
			inset: 0;
			isolation: isolate;
			margin: var(--m) !important;
			overflow: clip;
			position: var(--ps) !important;
			visibility: hidden;
			width: 100dvw;
		}

		:host(:is(ly-layer)) ::slotted(*) {
			visibility: visible;
		}

		:host(:is(ly-layer[stacked='under'])) {
			z-index: -1;
		}

		:host(:is(ly-layer[stacked='over'])) {
			z-index: 2;
		}
	`;

	@property( { type: 'over' || 'under', reflect: true } ) stacked = 'over';

	protected override render() {
		return html` <slot></slot> `
	}
}
