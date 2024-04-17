import { LitElement, html, nothing, type TemplateResult } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { CheckVariant, SelectVariant } from './_sharedTypes.ts'

import stylesCheck from './styles/check.css.ts'
import stylesSelect from './styles/select.css.ts'

@customElement( 'ly-check' )
export class Check extends LitElement {
	@property( { type: Boolean, reflect: true } ) checked = false;
	@property( { type: String, reflect: true } ) group = '';
	@property( { type: String, reflect: true } ) label = '';
	@property( { type: CheckVariant, reflect: true } ) variant = '';

	static override readonly properties = {
		delegatesFocus: { type: Boolean, reflect: true },
	};

	static override readonly styles = stylesCheck;

	private toggleChecked() {
		let groupChecks

		if ( this.group ) {
			groupChecks = document.querySelectorAll(
				`ly-check[group="${ this.group }"]`
			)

			for ( const check of [ ...groupChecks ] ) {
				( check as Check ).checked = false;
				( check as Check ).dispatchEvent(
					new CustomEvent( 'change', {
						bubbles: true,
						detail: { checked: false },
					} )
				)
			}
		}

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
			<ly-flex axis="row" part="row">
				<ly-icon ?solid="${ this.checked }"> ${ this.handleVariant() } </ly-icon>
				${ this.label
				? html`<label part="label">${ this.label }</label>`
				: nothing }
			</ly-flex>
			${ this.checked ? html`<slot></slot>` : nothing }
		`
	}

	private handleVariant(): TemplateResult {
		switch ( this.variant ) {
			case 'checkbox':
				return html`${ this.checked ? 'check_box' : 'check_box_outline_blank' }`

			case 'switch':
				return html`${ this.checked ? 'toggle_on' : 'toggle_off' }`

			case 'radio':
				return html`${ this.checked
					? 'check_circle'
					: 'radio_button_unchecked' }`
			default:
				return html``
		}
	}
}

@customElement( 'ly-select' )
export class Select extends LitElement {
	@property( { type: SelectVariant, reflect: true } ) mode = 'picker';

	static override readonly styles = stylesSelect;

	protected override render() {
		return html` <slot></slot> `
	}
}
