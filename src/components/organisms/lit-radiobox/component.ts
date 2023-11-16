import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import initialCss from '@global/initial.ts';
import localCss from './style.ts';

@customElement('lit-radiobox')
export class RadioBox extends LitElement {
	@property({ type: String }) _icon = '';
	@property({ type: Boolean, reflect: true }) checked = false;
	@property({ type: String, reflect: true }) group = '';

	static properties = {
		delegatesFocus: { type: Boolean, reflect: true },
	};

	static styles = [initialCss, localCss];

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

		this.dispatchEvent(
			new CustomEvent('selected', {
				bubbles: true,
				detail: { selected: this },
			})
		);
	}

	async connectedCallback(): Promise<void> {
		super.connectedCallback();
		this.setAttribute('tabindex', '0');
		this.addEventListener('focus', () => this.focus());
		this.addEventListener('click', () => this.toggleChecked());
	}

	async disconnectedCallback(): Promise<void> {
		super.disconnectedCallback();
		this.removeAttribute('tabindex');
		this.removeEventListener('focus', () => this.focus());
		this.removeEventListener('click', () => this.toggleChecked());
	}

	protected render() {
		return html` <slot></slot> `;
	}
}
