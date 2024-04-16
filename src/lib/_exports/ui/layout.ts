import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import stylesCol from './styles/col.css.ts'
import stylesRow from './styles/row.css.ts'
import stylesGrid from './styles/grid.css.ts'
import stylesGroup from './styles/group.css.ts'

@customElement( 'ly-col' )
export class Col extends LitElement {
	static override readonly styles = stylesCol;

	protected override render() {
		return html` <slot></slot> `
	}
}

@customElement( 'ly-row' )
export class Row extends LitElement {
	static override readonly styles = stylesRow;

	protected override render() {
		return html` <slot></slot> `
	}
}

@customElement( 'ly-grid' )
export class Grid extends LitElement {
	static override readonly styles = stylesGrid;

	protected override render() {
		return html` <slot></slot> `
	}
}

@customElement( 'ly-group' )
export class Group extends LitElement {
	static override readonly styles = stylesGroup;

	protected override render() {
		return html` <slot></slot> `
	}
}
