import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('lit-icon')
export class Icon extends LitElement {
	@property({ type: String }) name = '';

	static styles = css`
		:host {
			font-family: 'Material Symbols Rounded';
			font-size: 1.481544rem;
			width: 1.481544rem;
			height: 1.481544rem;
			line-height: 1;
			display: block;
			user-select: none;
		}
	`;

	render() {
		return html`<span> ${this.name} </span>`;
	}
}
