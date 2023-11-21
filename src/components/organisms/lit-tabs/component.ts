import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import initialCss from '@global/initial.ts';
import localCss from './style.ts';
import iconCss from '@global/reusable/icon.part.ts';

@customElement('lit-tabs')
export class Tabs extends LitElement {
	static styles = [initialCss, localCss, iconCss];

	async connectedCallback(): Promise<void> {
		super.connectedCallback();
	}

	async disconnectedCallback(): Promise<void> {
		super.disconnectedCallback();
	}

	protected render() {
		return html`
			<span part="lead">chevron_left</span>

			<slot></slot>

			<span part="trail">chevron_right</span>
		`;
	}
}
