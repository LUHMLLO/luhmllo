import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import initialCss from '@global/initial.ts';
import radioCss from './style.ts';

@customElement('lit-radio')
export class Radio extends LitElement {
	@property({ type: String }) _icon = '';
	@property({ type: Boolean, reflect: true }) checked = false;
	@property({ type: String, reflect: true }) group = '';

	static properties = {
		delegatesFocus: { type: Boolean, reflect: true },
	};

	static styles = [initialCss, radioCss];

	private toggleIcon() {
		this._icon = this.checked ? 'check_circle' : 'radio_button_unchecked';
	}

	private toggleChecked() {
		if (!this.checked) {
			const radios = document.querySelectorAll(
				`lit-radio[group="${this.group}"]`
			) as NodeListOf<Radio>;

			for (const radio of [...radios]) {
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

	async connectedCallback(): Promise<void> {
		super.connectedCallback();

		this.toggleIcon();

		this.setAttribute('tabindex', '0');
		this.addEventListener('focus', () => this.focus());
		this.addEventListener('click', this.toggleChecked);
	}

	protected render() {
		return html`
			<lit-icon name=${this._icon} ?fill=${this.checked}></lit-icon>
		`;
	}
}
