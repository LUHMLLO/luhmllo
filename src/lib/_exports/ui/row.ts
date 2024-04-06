import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import styles from './styles/row.css.ts'

@customElement( 'ly-row' )
export class Row extends LitElement {
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
