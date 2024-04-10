import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './styles/slider.css.ts';

@customElement('ly-slider')
export class Slider extends LitElement {
	@property({ type: String, reflect: true }) direction = 'row';

	static override readonly styles = styles;

	override async connectedCallback(): Promise<void> {
		super.connectedCallback();
	}

	override async disconnectedCallback(): Promise<void> {
		super.disconnectedCallback();
	}

	protected override render() {
		return html` <slot></slot> `;
	}
}
