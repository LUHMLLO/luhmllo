import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './styles/col.css.ts';

@customElement('ly-col')
export class Col extends LitElement {
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
