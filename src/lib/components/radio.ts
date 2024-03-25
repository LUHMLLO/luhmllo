import { LitElement, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './styles/radio.css.ts';

@customElement('lm-radio')
export class Radio extends LitElement {
	@property({ type: String }) _icon = '';
	@property({ type: Boolean, reflect: true }) checked = false;
	@property({ type: String }) group = '';
	@property({ type: String }) label = '';

	static readonly properties = {
		delegatesFocus: { type: Boolean, reflect: true },
	};

	static readonly styles = styles;

	private toggleChecked() {
		if (!this.checked) {
			const radios = document.querySelectorAll(
				`lm-radio[group="${this.group}"]`
			);

			for (const radio of [...radios]) {
				(radio as Radio).checked = false;
				(radio as Radio).dispatchEvent(
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
		this.addEventListener('click', () => this.toggleChecked());
	}

	async disconnectedCallback(): Promise<void> {
		super.disconnectedCallback();
		this.removeAttribute('tabindex');
		this.removeEventListener('focus', () => this.focus());
		this.removeEventListener('click', () => this.toggleChecked());
	}

	protected render() {
		return html`
			<label>${this.label}</label>
			<lm-icon ?solid="${this.checked}">
				${this.checked ? 'check_circle' : 'radio_button_unchecked'}
			</lm-icon>
			${this.checked ? html`<slot></slot>` : nothing}
		`;
	}
}
