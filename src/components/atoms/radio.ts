import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('lit-radio')
export class Radio extends LitElement {
	@property({ type: String }) _icon = '';
	@property({ type: Boolean, reflect: true }) checked = false;
	@property({ type: String, reflect: true }) group = '';

	static styles = css`
		:host {
			box-sizing: border-box;
			cursor: pointer;
			display: block;
			height: max-content;
			width: max-content;
		}
	`;

	connectedCallback() {
		super.connectedCallback();
		this.toggleIcon();
		this.addEventListener('click', this.toggleChecked);
	}

	protected render() {
		return html` <lit-icon name=${this._icon} ?fill=${this.checked} /> `;
	}

	private toggleIcon() {
		this._icon = this.checked ? 'check_circle' : 'radio_button_unchecked';
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
