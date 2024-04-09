import { LitElement, html, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import styles from './styles/checkbox.css.ts'

@customElement( 'ly-checkbox' )
export class Checkbox extends LitElement {
	@property( { type: Boolean, reflect: true } ) checked = false;
	@property( { type: String } ) label = '';

	static override readonly properties = {
		delegatesFocus: { type: Boolean, reflect: true },
	};

	static override readonly styles = styles;

	private toggleChecked() {
		this.checked = !this.checked

		this.dispatchEvent(
			new CustomEvent( 'change', {
				bubbles: true,
				detail: { checked: this.checked },
			} )
		)
	}

	override async connectedCallback(): Promise<void> {
		super.connectedCallback()
		this.setAttribute( 'tabindex', '0' )
		this.addEventListener( 'focus', () => this.focus() )
		this.addEventListener( 'click', () => this.toggleChecked() )
	}

	override async disconnectedCallback(): Promise<void> {
		super.disconnectedCallback()
		this.removeAttribute( 'tabindex' )
		this.removeEventListener( 'focus', () => this.focus() )
		this.removeEventListener( 'click', () => this.toggleChecked() )
	}

	protected override render() {
		return html`
			<ly-row part="row">
				<ly-icon ?solid="${ this.checked }">
					${ this.checked ? 'check_box' : 'check_box_outline_blank' }
				</ly-icon>
				${ this.label
				? html`<label part="label">${ this.label }</label>`
				: nothing }
			</ly-row>
			${ this.checked ? html`<slot></slot>` : nothing }
		`
	}
}
