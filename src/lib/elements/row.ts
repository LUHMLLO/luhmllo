import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './styles/row.css.ts';

@customElement('wc-row')
export class Row extends LitElement {
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
