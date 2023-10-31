import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '../atoms/icon.ts';

import initialCss from '../../common/styles/lit/initial.ts';
import buttonCss from '../../common/styles/lit/modules/molecule.button.ts';

@customElement('lit-button')
export class Button extends LitElement {
	@property({ type: Boolean }) emphasis = false;
	@property({ type: Boolean }) rounded = false;
	@property({ type: String }) leading = '';
	@property({ type: Boolean }) leading_fill = false;
	@property({ type: String }) trailing = '';
	@property({ type: Boolean }) trailing_fill = false;

	static properties = {
		delegatesFocus: { type: Boolean, reflect: true },
	};

	static styles = [initialCss, buttonCss];

	connectedCallback() {
		super.connectedCallback();
		this.setAttribute('tabindex', '0');
		this.addEventListener('focus', () => this.focus());
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
