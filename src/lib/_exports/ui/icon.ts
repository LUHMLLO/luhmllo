import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import styles from './styles/icon.css.ts'

@customElement( 'ly-icon' )
export class Icon extends LitElement {
	@property( { type: Boolean, reflect: true } ) solid = false;

	static override readonly styles = styles;

	protected override render() {
		return html` <slot></slot> `
	}
}
