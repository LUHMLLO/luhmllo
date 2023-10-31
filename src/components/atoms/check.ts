import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import initialCss from '../../common/styles/lit/initial.ts';
import checkCss from '../../common/styles/lit/modules/atom.check.ts';

@customElement('lit-check')
export class Check extends LitElement {
	@property({ type: String }) _icon = '';
	@property({ type: Boolean, reflect: true }) checked = false;

	static properties = {
		delegatesFocus: { type: Boolean, reflect: true },
	};

	static styles = [initialCss, checkCss];

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

	connectedCallback() {
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
