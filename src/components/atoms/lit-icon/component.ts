import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import initialCss from '@global/initial.ts';
import iconCss from '@global/reusable/icon.ts';
import localCss from './style.ts';

@customElement('lit-icon')
export class Icon extends LitElement {
	@property({ type: Boolean, reflect: true }) fill = false;
	@property({ type: String }) name = '';

	static styles = [initialCss, iconCss, localCss];

	async connectedCallback(): Promise<void> {
		super.connectedCallback();
	}

	async disconnectedCallback(): Promise<void> {
		super.disconnectedCallback();
	}

	protected render() {
		return html`${this.name.trim().toLowerCase()}`;
	}
}
