import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import styles from './styles/card.css.ts'

@customElement( 'ly-card' )
export class Card extends LitElement {
	static override readonly styles = styles;

	protected override render() {
		return html` <slot></slot> `
	}
}
