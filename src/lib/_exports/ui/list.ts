import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import styles from './styles/list.ts'

/**
 * Todo: calculate the amount of columns based on the amount of cells in each row, the row with the higher amount of cells will determine the amount of columns just like a regular table
 */

@customElement( 'ly-list' )
export class List extends LitElement {
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

@customElement( 'ly-list-header' )
export class ListHeader extends LitElement {
	static override readonly styles = styles;

	protected override render() {
		return html` <slot></slot> `
	}
}

@customElement( 'ly-list-row' )
export class ListRow extends LitElement {
	static override readonly styles = styles;

	protected override render() {
		return html` <slot></slot> `
	}
}

@customElement( 'ly-list-footer' )
export class ListFooter extends LitElement {
	static override readonly styles = styles;

	protected override render() {
		return html` <slot></slot> `
	}
}

@customElement( 'ly-list-cell' )
export class ListCell extends LitElement {
	static override readonly styles = styles;

	protected override render() {
		return html` <slot></slot> `
	}
}
