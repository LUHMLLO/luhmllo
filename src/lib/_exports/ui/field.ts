import { LitElement, html, nothing, type TemplateResult } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import styles from './styles/field.css.ts'

enum Status {
	'debug',
	'error',
	'info',
	'success',
	'warning',
}

@customElement( 'ly-field' )
export class Field extends LitElement {
	@property( { type: String, reflect: true } ) label = '';
	@property( { type: String, reflect: true } ) caption = '';
	@property( { type: String, reflect: true } ) name = '';
	@property( { type: Boolean, reflect: true } ) required = false;
	@property( { type: Status, reflect: true } ) status = '';
	@property( { type: String, reflect: true } ) type = 'text';

	static override readonly styles = styles;

	override async connectedCallback(): Promise<void> {
		super.connectedCallback()
	}

	override firstUpdated() {
		const slot = this.renderRoot?.querySelector( 'slot' )
		let inputs = slot?.assignedElements()
		if ( inputs ) {
			inputs.forEach( ( input ) => {
				input.setAttribute( 'name', this.name )
				input.setAttribute( 'title', this.name )
				input.setAttribute( 'type', this.type )
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
							<small part="caption-text">${ this.caption }</small>
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
				return html`<ly-icon>bug_report</ly-icon>`
			case 'error':
				return html`<ly-icon>report</ly-icon>`
			case 'info':
				return html`<ly-icon>info</ly-icon>`
			case 'success':
				return html`<ly-icon>check</ly-icon>`
			case 'warning':
				return html`<ly-icon>emergency_home</ly-icon>`
			default:
				return html``
		}
	}
}
