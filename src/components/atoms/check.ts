import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('lit-check')
export class Check extends LitElement {
	@property({ type: String }) _icon = '';
	@property({ type: Boolean }) checked = false;

	static styles = css`
		:host {
			box-sizing: border-box;
			cursor: pointer;
		}
	`;

	connectedCallback() {
		super.connectedCallback();
		this.toggleIcon();
		this.addEventListener('click', this.toggleChecked);
	}

	render() {
		return html` <lit-icon name=${this._icon} ?fill=${this.checked}/> `;
	}

	private toggleIcon() {
		this._icon = this.checked ? 'check_box' : 'check_box_outline_blank';
	}

	private toggleChecked() {
		this.checked = !this.checked;
		this.toggleIcon();

		this.dispatchEvent(
			new CustomEvent('change', {
				bubbles: true,
				detail: { checked: this.checked },
			})
		);
	}
}
