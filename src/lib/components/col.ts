import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './styles/col.css.ts';

@customElement('wc-col')
export class Col extends LitElement {
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
