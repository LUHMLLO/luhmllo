import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('lit-radiobox')
export class RadioBox extends LitElement {
	@property({ type: String }) _icon = '';
	@property({ type: Boolean, reflect: true }) checked = false;
	@property({ type: String }) group = '';

	static styles = css`
		:host {
			display: inline-block;
			box-sizing: border-box;
			cursor: pointer;
			overflow: hidden;
			height: max-content;
			isolation: isolate;
			position: relative;
		}

		:host([checked]) {
			outline: solid 1px red !important;
			outline-offset: -1px;
		}
	`;

	connectedCallback() {
		super.connectedCallback();
		this.addEventListener('click', this.toggleChecked);
	}

	render() {
		return html` <slot></slot> `;
	}

	private toggleChecked() {
		if (!this.checked) {
			const radios = document.querySelectorAll(
				`lit-radiobox[group="${this.group}"]`
			) as NodeListOf<RadioBox>;

			for (const radio of Array.from(radios)) {
				(radio as RadioBox).checked = false;
				(radio as RadioBox).dispatchEvent(
					new CustomEvent('change', {
						bubbles: true,
						detail: { checked: false },
					})
				);
			}

			this.checked = true;
		}

		this.dispatchEvent(
			new CustomEvent('change', {
				bubbles: true,
				detail: { checked: this.checked },
			})
		);
	}
}
