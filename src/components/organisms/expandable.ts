import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('lit-expandable')
export class Expandable extends LitElement {
	@property({ type: String }) emphasis = 'low';
	@property({ type: Boolean }) rounded = false;

	@property({ type: String }) leading = '';
	@property({ type: Boolean }) leading_fill = false;
	@property({ type: String }) trailing = 'chevron_right';
	@property({ type: Boolean }) trailing_fill = false;

	@property({ type: Boolean, reflect: true }) open = false;
	@property({ type: String }) title = '';

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

				box-sizing: border-box;
				margin: 0;
				max-width: 100%;

				display: flex;
				flex-direction: column;
				overflow: hidden;
			}

			:host([rounded]) {
				border-radius: var(--bord-radius);
			}

			lit-button {
				flex-grow: 1;
				width: 100%;
			}

			:host([open]) > lit-button::part(trail) {
				transform: rotate(90deg);
			}

			:host > content {
				display: flex;
				flex-direction: column;
				gap: var(--scale-5xs);

				height: 0;
				min-height: 0;
				opacity: 0;
				padding: 0;

				pointer-events: none;
				user-select: none;

				overflow: hidden;

				transition: opacity var(--transition-settings),
					padding var(--transition-settings);
			}

			:host([open]) > content {
				height: max-content;
				opacity: 1;
				padding: var(--scale-xs) var(--scale-sm);

				pointer-events: revert;
				user-select: revert;
			}
		`,
		css`
			:host,
			:host([emphasis='low']) > content > p{
				background-color: var(--idle-bg);
				color: var(--idle-clr);
				outline-color: var(--idle-bord);
			}

			:host(:focus),
			:host([emphasis='low']:focus) > content > p {
				background-color: var(--focus-bg);
				color: var(--focus-clr);
				outline-color: var(--focus-bord);
			}

			@media (hover: hover) {
				:host(:hover),
				:host([emphasis='low']:hover) > content > p {
					background-color: var(--hover-bg);
					color: var(--hover-clr);
					outline-color: var(--hover-bord);
				}
			}

			:host(:active),
			:host([emphasis='low']:active) > content > p {
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

				--active-bg: hsl(0, 0%, 87%);
				--active-clr: hsl(0, 0%, 6%);
				--active-bord: transparent;

				--focus-bg: hsl(0, 0%, 90%);
				--focus-clr: hsl(0, 0%, 6%);
				--focus-bord: var(--clr-accent);
			}
		`,
		css`
			:host([emphasis='high']) {
				--idle-bg: hsl(0, 0%, 15%);
				--idle-clr: hsl(0, 0%, 96%);
				--idle-bord: transparent;

				--hover-bg: hsl(0, 0%, 21%);
				--hover-clr: hsl(0, 0%, 96%);
				--hover-bord: transparent;

				--active-bg: hsl(0, 0%, 9%);
				--active-clr: hsl(0, 0%, 96%);
				--active-bord: transparent;

				--focus-bg: hsl(0, 0%, 12%);
				--focus-clr: hsl(0, 0%, 96%);
				--focus-bord: var(--clr-accent);
			}
		`,
	];

	protected render() {
		return html`
			<lit-button
				@click=${this.handleOpen}
				emphasis=${this.emphasis}
				leading=${this.leading}
				trailing=${this.trailing}>
				${this.title}
			</lit-button>

			<content><slot></slot></content>
		`;
	}

	private handleOpen() {
		this.open = !this.open;
	}
}
