import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { Axis } from './_sharedTypes.ts'

import stylesFlex from './styles/flex.css.ts'
import stylesGrid from './styles/grid.css.ts'
import stylesGroup from './styles/group.css.ts'

@customElement( 'ly-flex' )
export class Flex extends LitElement {
	@property( { type: Axis, reflect: true } ) axis = 'row';

	static override readonly styles = stylesFlex;

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
