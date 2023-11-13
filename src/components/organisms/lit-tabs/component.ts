import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import initialCss from '@global/initial.ts';
import localCss from './style.ts';

@customElement('lit-tabs')
export class Tabs extends LitElement {
	static styles = [initialCss, localCss];

	async connectedCallback(): Promise<void> {
		super.connectedCallback();
	}

	async disconnectedCallback(): Promise<void> {
		super.disconnectedCallback();
	}

	protected render() {
		return html` not implemented yet `;
	}
}
