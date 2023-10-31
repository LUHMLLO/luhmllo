import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import initialCss from '../../common/styles/lit/initial.ts';
import layoutCss from '../../common/styles/lit/modules/atom.layout.ts';

@customElement('lit-layout')
export class Layout extends LitElement {
	@property({ type: String }) align = '';
	@property({ type: String }) variant = '';

	static styles = [initialCss, layoutCss];

	connectedCallback(): void {
		super.connectedCallback();

		if (this.variant) {
			const value = this.variant;

			if (
				!['column', 'column-reverse', 'row', 'row-reverse', 'grid'].includes(
					value
				)
			) {
				console.warn(
					`Invalid layout value: ${value}. Valid options are 'column', 'column-reverse', 'row', 'row-reverse', 'grid'.`
				);
			}
		}
	}

	protected render() {
		return html` <slot /> `;
	}
}
