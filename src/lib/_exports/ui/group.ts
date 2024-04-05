import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './styles/group.css.ts';

@customElement('ly-group')
export class Group extends LitElement {
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
