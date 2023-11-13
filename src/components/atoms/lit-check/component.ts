import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import initialCss from '@global/initial.ts';
import iconCss from '@global/reusable/icon.ts';
import localCss from './style.ts';

@customElement('lit-check')
export class Check extends LitElement {
	@property({ type: String }) _icon = '';
	@property({ type: Boolean, reflect: true }) _checked = false;

	static properties = {
		delegatesFocus: { type: Boolean, reflect: true },
	};

	static styles = [initialCss, iconCss, localCss];

	private toggleChecked() {
		this._checked = !this._checked;

		this.dispatchEvent(
			new CustomEvent('change', {
				bubbles: true,
				detail: { checked: this._checked },
			})
		);
	}

	async connectedCallback(): Promise<void> {
		super.connectedCallback();
		this.setAttribute('tabindex', '0');
		this.addEventListener('focus', () => this.focus());
		this.addEventListener('click', () => this.toggleChecked);
	}

	async disconnectedCallback(): Promise<void> {
		super.disconnectedCallback();
		this.removeAttribute('tabindex');
		this.removeEventListener('focus', () => this.focus());
		this.removeEventListener('click', () => this.toggleChecked);
	}

	protected render() {
		return html` ${this._checked ? 'check_box' : 'check_box_outline_blank'} `;
	}
}
