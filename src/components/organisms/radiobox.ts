import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('lit-radiobox')
export class RadioBox extends LitElement {
	@property({ type: String }) _icon = '';
	@property({ type: Boolean, reflect: true }) checked = false;
	@property({ type: String, reflect: true }) group = '';

	static styles = css`
		:host {
			box-sizing: border-box;
			cursor: pointer;
			display: inline-block;

			height: max-content;

			isolation: isolate;
			overflow: hidden;
			position: relative;
		}

		:host([checked]):after {
			content: '';

			outline: red 1px solid;
			outline-offset: -1px;

			position: absolute;
			inset: 0;

			width: 100%;
			height: 100%;
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
