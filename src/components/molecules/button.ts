import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../atoms/icon.ts';

@customElement('lit-button')
export class Button extends LitElement {
	@property({ type: String }) left_icon = '';
	@property({ type: Boolean }) left_fill = '';
	@property({ type: String }) right_icon = '';
	@property({ type: Boolean }) right_fill = '';

	static styles = css`
		:host {
			appeareance: none;
			box-sizing: border-box;
			cursor: pointer;

			align-items: center;
			display: inline-flex;
			gap: var(--scale-5xs);

			font-size: var(--scale-sm);
			padding: var(--scale-xs) var(--scale-sm);

			height: max-content;
			width: max-content;

			outline: solid 1px var(--clr-primary);
			outline-offset: -1px;
		}

		:host {
			transition: color var(--transition-settings),
				background-color var(--transition-settings);
		}

		:host * {
			transition: none;
		}

		:host(:focus) {
			color: hsl(0, 0%, 0%);
			outline-color: hsl(0, 0%, 0%);
		}

		@media (hover: hover) {
			:host(:hover) {
				background-color: hsl(0, 0%, 90%);
			}
		}

		:host(:active) {
			color: hsl(0, 0%, 100%);
			background-color: hsl(0, 0%, 0%);
		}
	`;

	protected render() {
		return html`
			<lit-icon name=${this.left_icon} ?fill=${this.left_fill}></lit-icon>
			<slot></slot>
			<lit-icon name=${this.right_icon} ?fill=${this.right_fill}></lit-icon>
		`;
	}
}
