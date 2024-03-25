import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './styles/grid.css.ts';

@customElement('lm-grid')
export class Grid extends LitElement {
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
