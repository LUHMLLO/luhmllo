import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './styles/icon.css.ts';

@customElement('wc-icon')
export class Icon extends LitElement {
	@property({ type: Boolean, reflect: true }) solid = false;

	static readonly styles = styles;

	async connectedCallback(): Promise<void> {
		super.connectedCallback();
	}

	async disconnectedCallback(): Promise<void> {
		super.disconnectedCallback();
	}

	protected render() {
		return html` <slot></slot> `;
	}
}
