import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement( 'ly-slider' )
export class Slider extends LitElement {
	static override readonly styles = css`
		:host() {
			--bg: none;
			background-color: var(--bg);

			--clr: var(--clr-text);
			color: var(--clr);

			--gap: var(--scale-2xl);
			gap: var(--gap);

			--inset: 0;
			inset: var(--inset);

			--margin: auto;
			margin: var(--margin);

			--placement: fixed;
			position: var(--placement);

			--radius: 0;
			border-radius: var(--radius);

			--spacing: 0;
			padding: var(--spacing);
		}

		:host(:is(ly-slider)) {
			display: grid;
			height: max-content;
			/*scroll-snap-padding-block: var(--gap);*/
		}

		:host(:is(ly-slider)) ::slotted(*) {
			min-height: max-content;
			min-width: max-content;
			/*scroll-snap-align: start;*/
		}

		:host(:is(ly-slider)[axis='x']) {
			grid-auto-flow: column;
			grid-auto-columns: max-content;
			overflow-x: auto;
			overflow-y: visible;
			/*scroll-snap-type: x proximity;*/
		}

		:host(:is(ly-slider)[axis='y']) {
			grid-auto-flow: row;
			grid-auto-rows: max-content;
			overflow-x: visible;
			overflow-y: auto;
			/*scroll-snap-type: y proximity;*/
		}
	`;

	@property( { type: 'col' || 'row', reflect: true } ) axis = 'x';

	protected override render() {
		return html` <slot></slot> `
	}
}
