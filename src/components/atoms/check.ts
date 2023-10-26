import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('lit-check')
export class Check extends LitElement {
	@property({ type: String }) _icon = '';
	@property({ type: Boolean, reflect: true }) checked = false;

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
