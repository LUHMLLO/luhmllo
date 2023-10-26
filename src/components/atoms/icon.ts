import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '/node_modules/material-symbols/rounded.css';

@customElement('lit-icon')
export class Icon extends LitElement {
	@property({ type: String }) name = '';
	@property({ type: Boolean, reflect: true }) fill = false;

	static styles = css`
		:host {
			box-sizing: border-box;
			display: block;
			font-family: 'Material Symbols Rounded';
			font-size: 1.481544rem;
			height: max-content;
			line-height: 1;
			user-select: none;
			width: max-content;
		}

		:host([fill]) {
			font-variation-settings: 'FILL' 1;
		}
	`;

	protected render() {
		return html`${this.name.trim().toLowerCase()}`;
	}
}
