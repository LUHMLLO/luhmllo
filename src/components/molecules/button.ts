import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../atoms/icon.ts';

@customElement('lit-button')
export class Button extends LitElement {
	static properties = {
		delegatesFocus: { type: Boolean, reflect: true },
	};

	@property({ type: Boolean }) emphasis = false;
	@property({ type: Boolean }) rounded = false;
	@property({ type: String }) leading = '';
	@property({ type: Boolean }) leading_fill = false;
	@property({ type: String }) trailing = '';
	@property({ type: Boolean }) trailing_fill = false;

	static styles = [
		css`
			:host {
				appeareance: none;
				box-sizing: border-box;
				cursor: pointer;

				align-items: center;
				display: inline-flex;
				gap: var(--scale-5xs);

				font-size: var(--scale-md);
				padding: var(--scale-xs) var(--scale-sm);

				outline-color: transparent;
				outline-style: solid;
				outline-width: 1px;
				outline-offset: -1px;

				height: max-content;
				width: max-content;
				overflow: hidden;

				transition: color var(--transition-settings),
					background-color var(--transition-settings);
			}

			:host * {
				margin: 0;
				transition: none;
			}

			:host(:not([leading], [trailing])) {
				padding: var(--scale-xs);
			}

			:host([rounded]) {
				border-radius: var(--bord-radius);
			}
		`,
		css`
			:host,
			:host([emphasis='low']) {
				background-color: var(--clr-tertiary);
				color: var(--clr-onTertiary);
			}

			:host(:focus),
			:host([emphasis='low']:focus) {
				outline-color: var(--clr-tertiary--focus);
				color: var(--clr-onTertiary--focus);
			}

			@media (hover: hover) {
				:host(:hover),
				:host([emphasis='low']:hover) {
					background-color: var(--clr-tertiary--hover);
					color: var(--clr-onTertiary--hover);
				}
			}

			:host(:active),
			:host([emphasis='low']:active) {
				background-color: var(--clr-tertiary--active);
				color: var(--clr-onTertiary--active);
			}
		`,
		css`
			:host([emphasis='medium']) {
				background-color: var(--clr-secondary);
				color: var(--clr-onSecondary);
			}

			:host([emphasis='medium']:focus) {
				outline-color: var(--clr-secondary--focus);
				color: var(--clr-onSecondary--focus);
			}

			@media (hover: hover) {
				:host([emphasis='medium']:hover) {
					background-color: var(--clr-secondary--hover);
					color: var(--clr-onSecondary--hover);
				}
			}

			:host([emphasis='medium']:active) {
				background-color: var(--clr-secondary--active);
				color: var(--clr-onSecondary--active);
			}
		`,
		css`
			:host([emphasis='high']) {
				background-color: var(--clr-primary);
				color: var(--clr-onPrimary);
			}

			:host([emphasis='high']:focus) {
				background-color: var(--clr-primary--focus);
				outline-color: var(--clr-onPrimary--focus);
			}

			@media (hover: hover) {
				:host([emphasis='high']:hover) {
					background-color: var(--clr-primary--hover);
					color: var(--clr-onPrimary--hover);
				}
			}

			:host([emphasis='high']:active) {
				background-color: var(--clr-primary--active);
				color: var(--clr-onPrimary--active);
			}
		`,
	];

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
				?fill=${this.leading_fill}></lit-icon>`}

			<slot></slot>

			${this.trailing &&
			html`<lit-icon
				name=${this.trailing}
				?fill=${this.trailing_fill}></lit-icon>`}
		`;
	}
}
