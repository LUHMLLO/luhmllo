import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement( 'ly-slider' )
export class Slider extends LitElement {
	@property( { type: 'col' || 'row', reflect: true } ) axis = 'x';

	static override readonly styles = css`
		:host(:is(ly-slider)) {
			/* local vars */
			--bg: none;
			--display: grid;
			--gap: var(--scale-2xl);
			--padding: 0;

			/* base styles */
			background-color: var(--bg);
			display: grid;
			gap: var(--gap);
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

	protected override render() {
		return html` <slot></slot> `
	}
}
