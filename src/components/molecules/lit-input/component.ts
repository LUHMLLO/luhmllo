import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import initialCss from '@global/initial.ts';
import iconCss from '@global/reusable/icon.part.ts';
import localCss from './style.ts';

const allowedEmphasis: readonly string[] = ['low', 'medium', 'high'];

@customElement('lit-input')
export class Input extends LitElement {
	@property({ type: String }) emphasis = 'low';
	@property({ type: Boolean }) rounded = false;

	@property({ type: String }) lead = '';
	@property({ type: Boolean }) lead_fill = false;

	@property({ type: String }) trail = '';
	@property({ type: Boolean }) trail_fill = false;

	@property({ type: String }) value = '';

	static properties = {
		delegatesFocus: { type: Boolean, reflect: true },
	};

	static styles = [initialCss, iconCss, localCss];

	async connectedCallback(): Promise<void> {
		super.connectedCallback();
		this.querySelector('div')!.setAttribute('tabindex', '0');
		this.querySelector('div')!.addEventListener('focus', () => this.focus());

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
			<div contenteditable>${this.value}</div>
			${this.trail &&
			html`<span ?fill=${this.trail_fill} part="trail">${this.trail}</span>`}
		`;
	}
}
