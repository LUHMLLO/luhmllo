import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import initialCss from '@global/initial.ts';
import iconCss from '@global/reusable/icon.ts';
import localIconCss from './style.ts';

@customElement('lit-icon')
export class Icon extends LitElement {
	@property({ type: Boolean, reflect: true }) fill = false;
	@property({ type: String }) name = '';

	static styles = [initialCss, iconCss, localIconCss];

	protected render() {
		return html`${this.name.trim().toLowerCase()}`;
	}
}
