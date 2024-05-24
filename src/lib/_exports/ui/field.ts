import { LitElement, html, nothing, type TemplateResult } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import styles from './styles/field.css.ts'

@customElement( 'ly-field' )
export class Field extends LitElement {
	@property( { type: String } ) label = '';
	@property( { type: String } ) caption = '';
	@property( { type: String } ) name = '';
	@property( { type: String } ) ref = '';
	@property( { type: Boolean, reflect: true } ) required = false;
	@property( { type: 'debug' || 'error' || 'info' || 'success' || 'warning' } )
	status = '';
	@property( { type: String } ) type = 'text';

	static override readonly styles = styles;

	override async connectedCallback(): Promise<void> {
		super.connectedCallback()
	}

	override updated() {
		const slot = this.renderRoot?.querySelector( 'slot' )
		let inputs = slot?.assignedElements()
		if ( inputs ) {
			inputs.forEach( ( input ) => {
				if (
					input instanceof HTMLInputElement ||
					input instanceof HTMLTextAreaElement
				) {
					this.ref && input.setAttribute( 'id', this.ref )
					this.name && input.setAttribute( 'name', this.name )
					this.required && input.setAttribute( 'required', `${ this.required }` )
					this.type && input.setAttribute( 'type', this.type )
				}
			} )
		}
	}

	override async disconnectedCallback(): Promise<void> {
		super.disconnectedCallback()
	}

	protected override render() {
		return html`
			${ this.label
				? html`
						<label for=${ this.name } part="label">
							${ this.label } ${ this.setRequiredIcon() }
						</label>
				  `
				: nothing }

			<slot></slot>

			${ this.caption
				? html`
						<ly-flex axis="row" part="caption">
							${ this.setStatusIcon() }
							<small part="caption-text" html>${ this.caption }</small>
						</ly-flex>
				  `
				: nothing }
		`
	}

	private setRequiredIcon(): TemplateResult {
		if ( this.required ) {
			return html`<ly-icon part="required-icon">asterisk</ly-icon>`
		} else {
			return html``
		}
	}

	private setStatusIcon(): TemplateResult {
		switch ( this.status ) {
			case 'debug':
				return html`<ly-icon part="caption-icon">bug_report</ly-icon>`
			case 'error':
				return html`<ly-icon part="caption-icon">report</ly-icon>`
			case 'info':
				return html`<ly-icon part="caption-icon">info</ly-icon>`
			case 'success':
				return html`<ly-icon part="caption-icon">check</ly-icon>`
			case 'warning':
				return html`<ly-icon part="caption-icon">emergency_home</ly-icon>`
			default:
				return html``
		}
	}
}
