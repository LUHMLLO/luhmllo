import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '../../atoms/lit-icon/component.ts';

import initialCss from '@global/initial.ts';
import buttonCss from './style.ts';

const allowedEmphasis: readonly string[] = ['low', 'medium', 'high'];

@customElement('lit-button')
export class Button extends LitElement {
	@property({ type: String }) emphasis = 'low';
	@property({ type: Boolean }) rounded = false;
	@property({ type: String }) leading = '';
	@property({ type: Boolean }) leading_fill = false;
	@property({ type: String }) trailing = '';
	@property({ type: Boolean }) trailing_fill = false;

	static properties = {
		delegatesFocus: { type: Boolean, reflect: true },
	};

	static styles = [initialCss, buttonCss];

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
			${this.leading &&
			html`<lit-icon
				name=${this.leading}
				?fill=${this.leading_fill}
				part="lead"></lit-icon>`}

			<slot></slot>

			${this.trailing &&
			html`<lit-icon
				name=${this.trailing}
				?fill=${this.trailing_fill}
				part="trail"></lit-icon>`}
		`;
	}
}
