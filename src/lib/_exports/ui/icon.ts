import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import styles from './styles/icon.css.ts'

@customElement( 'ly-icon' )
export class Icon extends LitElement {
	@property( { type: Boolean, reflect: true } ) solid = false;

	static override readonly styles = styles;

	override async connectedCallback(): Promise<void> {
		super.connectedCallback()
	}

	override async disconnectedCallback(): Promise<void> {
		super.disconnectedCallback()
	}

	protected override render() {
		return html` <slot></slot> `
	}
}
