import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { Axis } from './_sharedTypes.ts'
import styles from './styles/slider.css.ts'

/**
 * TODO: mouse grap scrolling
 */

@customElement( 'ly-slider' )
export class Slider extends LitElement {
	@property( { type: Axis, reflect: true } ) axis = 'row';

	static override readonly styles = styles;

	protected override render() {
		return html` <slot></slot> `
	}
}
