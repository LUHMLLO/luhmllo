import { LitElement, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './styles/field.css.ts';

@customElement('ly-field')
export class Field extends LitElement {
	@property({ type: String, reflect: true }) label = '';
	@property({ type: String, reflect: true }) 'if-error' = '';
	@property({ type: String, reflect: true }) name = '';

	static override readonly styles = styles;

	override async connectedCallback(): Promise<void> {
		super.connectedCallback();
	}

	override async disconnectedCallback(): Promise<void> {
		super.disconnectedCallback();
	}

	protected override render() {
		return html`
			${this.label ? html`<label for=${this.name}>${this.label}</label>` : nothing}
			<slot></slot>
			${this['if-error'] ? html`<small>${this['if-error']}</small>` : nothing}
		`;
	}
}
