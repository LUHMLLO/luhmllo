import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('lit-radio')
export class Radio extends LitElement {
	@property({ type: String }) _icon = '';
	@property({ type: String }) group = '';
	@property({ type: Boolean }) checked = false;

	static styles = css`
		:host {
			cursor: pointer;
		}
	`;

	private toggleIcon() {
		this._icon = this.checked
			? 'radio_button_checked'
			: 'radio_button_unchecked';
	}

	connectedCallback() {
		super.connectedCallback();
		this.toggleIcon();
		this.addEventListener('click', this.toggleChecked);
	}

	render() {
		return html` <lit-icon name=${this._icon}></lit-icon> `;
	}

	private toggleChecked() {
		if (!this.checked) {
			const radios = document.querySelectorAll(
				`lit-radio[group="${this.group}"]`
			) as NodeListOf<Radio>;

			for (const radio of Array.from(radios)) {
				(radio as Radio).checked = false;
				(radio as Radio).toggleIcon();
				(radio as Radio).dispatchEvent(
					new CustomEvent('change', {
						bubbles: true,
						detail: { checked: false },
					})
				);
			}

			this.checked = true;
			this.toggleIcon();
		}

		this.dispatchEvent(
			new CustomEvent('change', {
				bubbles: true,
				detail: { checked: this.checked },
			})
		);
	}
}
