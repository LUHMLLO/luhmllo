import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('lit-layout')
export class Layout extends LitElement {
	@property({ type: String }) layout = '';

	static styles = css`
		:host {
			box-sizing: border-box;
			max-width: 100%;
			width: 100%;
		}

		:host([layout='column']) {
			display: flex;
			flex-direction: column;
		}

		:host([layout='column-reverse']) {
			display: flex;
			flex-direction: column-reverse;
		}

		:host([layout='row']) {
			display: flex;
			flex-direction: row;
		}

		:host([layout='row-reverse']) {
			display: flex;
			flex-direction: row-reverse;
		}

		:host([layout='grid']) {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
		}
	`;

	connectedCallback(): void {
		super.connectedCallback();

		if (this.layout) {
			const value = this.layout;

			if (
				!['column', 'column-reverse', 'row', 'row-reverse', 'grid'].includes(
					value
				)
			) {
				console.warn(
					`Invalid layout value: ${value}. Valid options are 'column', 'column-reverse', 'row', 'row-reverse', 'grid'.`
				);
			}
		}
	}

	render() {
		return html` <slot /> `;
	}
}
