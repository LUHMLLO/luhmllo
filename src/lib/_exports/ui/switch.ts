import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './styles/switch.css.ts';

@customElement('ly-switch')
export class Switch extends LitElement {
	@property({ type: Boolean, reflect: true }) checked = false;

	static override readonly properties = {
		delegatesFocus: { type: Boolean, reflect: true },
	};

	static override readonly styles = styles;

	private toggleChecked() {
		this.checked = !this.checked;

		this.dispatchEvent(
			new CustomEvent('change', {
				bubbles: true,
				detail: { checked: this.checked },
			})
		);
	}

	override async connectedCallback(): Promise<void> {
		super.connectedCallback();
		this.setAttribute('tabindex', '0');
		this.addEventListener('focus', () => this.focus());
		this.addEventListener('click', () => this.toggleChecked());
	}

	override async disconnectedCallback(): Promise<void> {
		super.disconnectedCallback();
		this.removeAttribute('tabindex');
		this.removeEventListener('focus', () => this.focus());
		this.removeEventListener('click', () => this.toggleChecked());
	}

	protected override render() {
		return html`
			<ly-icon ?solid="${this.checked}">
				${this.checked ? 'toggle_on' : 'toggle_off'}
			</ly-icon>
		`;
	}
}
