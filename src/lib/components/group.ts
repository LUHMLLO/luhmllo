import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './styles/group.css.ts';

@customElement('wc-group')
export class Group extends LitElement {
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
