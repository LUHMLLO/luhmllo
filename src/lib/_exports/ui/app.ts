import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import styles from './styles/app.css.ts'
@customElement( 'ly-app' )
export class App extends LitElement {
	@property( { type: String, reflect: true } ) layout = 'default';

	static override readonly styles = styles;

	protected override render() {
		return html` <slot></slot> `
	}
}
