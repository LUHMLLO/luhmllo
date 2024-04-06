import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import styles from './styles/app.css.ts'
@customElement( 'ly-app' )
export class App extends LitElement {
	@property( { type: String, reflect: true } ) layout = 'default';

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
