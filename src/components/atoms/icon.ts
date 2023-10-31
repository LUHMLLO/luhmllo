import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import initialCss from '../../common/styles/lit/initial.ts';
import iconCss from '../../common/styles/lit/modules/atom.icon.ts';

@customElement('lit-icon')
export class Icon extends LitElement {
	@property({ type: Boolean, reflect: true }) fill = false;
	@property({ type: String }) name = '';

	static styles = [initialCss, iconCss];

	protected render() {
		return html`${this.name.trim().toLowerCase()}`;
	}
}
