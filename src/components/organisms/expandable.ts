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

	static styles = css`
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

		:host > content {
			display: flex;
			flex-direction: column;
			gap: var(--scale-5xs);
			padding: var(--scale-xs) var(--scale-sm);
		}
	`;

	protected render() {
		return html`
			<lit-button
				@click=${this.handleOpen}
				emphasis=${this.emphasis}
				leading=${this.leading}
				trailing=${this.trailing}>
				${this.title}
			</lit-button>

			${this.open ? html`<content><slot></slot></content>` : ``}
		`;
	}

	private handleOpen() {
		this.open = !this.open;
	}
}
