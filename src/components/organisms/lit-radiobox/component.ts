import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import initialCss from '@global/initial.ts';
import radioboxCss from './style.ts';

@customElement('lit-radiobox')
export class RadioBox extends LitElement {
	@property({ type: String }) _icon = '';
	@property({ type: Boolean, reflect: true }) checked = false;
	@property({ type: String, reflect: true }) group = '';

	static properties = {
		delegatesFocus: { type: Boolean, reflect: true },
	};

	static styles = [initialCss, radioboxCss];

	private toggleChecked() {
		if (!this.checked) {
			const radios = document.querySelectorAll(
				`lit-radiobox[group="${this.group}"]`
			) as NodeListOf<RadioBox>;

			for (const radio of [...radios]) {
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

	async connectedCallback(): Promise<void> {
		super.connectedCallback();
		this.setAttribute('tabindex', '0');
		this.addEventListener('focus', () => this.focus());
		this.addEventListener('click', this.toggleChecked);
	}

	protected render() {
		return html` <slot></slot> `;
	}
}
