import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import initialCss from '@global/initial.ts';
import iconCss from '@global/reusable/icon.part.ts';
import buttonCss from '@global/reusable/button.ts';
import localButtonCss from './style.ts';

const allowedEmphasis: readonly string[] = ['low', 'medium', 'high'];

@customElement('lit-button')
export class Button extends LitElement {
	@property({ type: String }) emphasis = 'low';
	@property({ type: Boolean }) rounded = false;

	@property({ type: String }) lead = '';
	@property({ type: Boolean }) lead_fill = false;

	@property({ type: String }) trail = '';
	@property({ type: Boolean }) trail_fill = false;

	static properties = {
		delegatesFocus: { type: Boolean, reflect: true },
	};

	static styles = [initialCss, iconCss, buttonCss, localButtonCss];

	async connectedCallback(): Promise<void> {
		super.connectedCallback();
		this.setAttribute('tabindex', '0');
		this.addEventListener('focus', () => this.focus());

		if (this.emphasis) {
			const value = this.emphasis;

			if (!allowedEmphasis.includes(value)) {
				console.warn(
					`Invalid emphasis value: ${value}. Valid options are [${allowedEmphasis}].`
				);
			}
		}
	}

	protected render() {
		return html`
			${this.lead &&
			html`<span ?fill=${this.lead_fill} part="lead">${this.lead}</span>`}

			<slot></slot>

			${this.trail &&
			html`<span ?fill=${this.trail_fill} part="trail">${this.trail}</span>`}
		`;
	}
}
