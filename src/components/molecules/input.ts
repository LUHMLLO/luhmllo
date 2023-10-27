import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../atoms/icon.ts';

@customElement('lit-button')
export class Button extends LitElement {
	static properties = {
		delegatesFocus: { type: Boolean, reflect: true },
	};

	@property({ type: String }) emphasis = 'low';
	@property({ type: Boolean }) rounded = false;
	@property({ type: String }) leading = '';
	@property({ type: Boolean }) leading_fill = false;
	@property({ type: String }) trailing = '';
	@property({ type: Boolean }) trailing_fill = false;

	static styles = [
		css`
			:host {
				--idle-bg: transparent;
				--idle-clr: hsl(0, 0%, 6%);
				--idle-bord: transparent;

				--hover-bg: transparent;
				--hover-clr: hsl(0, 0%, 6%);
				--hover-bord: hsl(0, 0%, 96%);

				--active-bg: transparent;
				--active-clr: hsl(0, 0%, 6%);
				--active-bord: hsl(0, 0%, 90%);

				--focus-bg: transparent;
				--focus-clr: hsl(0, 0%, 6%);
				--focus-bord: var(--clr-accent);

				appeareance: none;
				box-sizing: border-box;
				cursor: pointer;

				align-items: center;
				display: inline-flex;

				font-size: var(--scale-md);
				gap: var(--scale-5xs);
				padding: var(--scale-xs) var(--scale-sm);

				outline-style: solid;
				outline-width: 0.0938rem;
				outline-offset: -0.0938rem;

				height: max-content;
				width: max-content;
				overflow: hidden;

				transition: color var(--transition-settings),
					background-color var(--transition-settings),
					outline-color var(--transition-settings);
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
				background-color: var(--idle-bg);
				color: var(--idle-clr);
				outline-color: var(--idle-bord);
			}

			:host(:focus),
			:host([emphasis='low']:focus) {
				background-color: var(--focus-bg);
				color: var(--focus-clr);
				outline-color: var(--focus-bord);
			}

			@media (hover: hover) {
				:host(:hover),
				:host([emphasis='low']:hover) {
					background-color: var(--hover-bg);
					color: var(--hover-clr);
					outline-color: var(--hover-bord);
				}
			}

			:host(:active),
			:host([emphasis='low']:active) {
				background-color: var(--active-bg);
				color: var(--active-clr);
				outline-color: var(--active-bord);
			}
		`,
		css`
			:host([emphasis='medium']) {
				--idle-bg: hsl(0, 0%, 93%);
				--idle-clr: hsl(0, 0%, 6%);
				--idle-bord: transparent;

				--hover-bg: hsl(0, 0%, 96%);
				--hover-clr: hsl(0, 0%, 6%);
				--hover-bord: transparent;

				--active-bg: hsl(0, 0%, 90%);
				--active-clr: hsl(0, 0%, 6%);
				--active-bord: transparent;

				--focus-bg: hsl(0, 0%, 93%);
				--focus-clr: hsl(0, 0%, 6%);
				--focus-bord: var(--clr-accent);
			}
		`,
		css`
			:host([emphasis='high']) {
				--idle-bg: hsl(0, 0%, 6%);
				--idle-clr: hsl(0, 0%, 96%);
				--idle-bord: transparent;

				--hover-bg: hsl(0, 0%, 9%);
				--hover-clr: hsl(0, 0%, 96%);
				--hover-bord: transparent;

				--active-bg: hsl(0, 0%, 3%);
				--active-clr: hsl(0, 0%, 96%);
				--active-bord: transparent;

				--focus-bg: hsl(0, 0%, 6%);
				--focus-clr: hsl(0, 0%, 96%);
				--focus-bord: var(--clr-accent);
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
