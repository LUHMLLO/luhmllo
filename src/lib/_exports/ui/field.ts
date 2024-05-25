import { LitElement, css, html, nothing, type TemplateResult } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement( 'ly-field' )
export class Field extends LitElement {
	static override readonly styles = css`
		:host(:is(ly-field)) {
			/* local vars */
			--gap: var(--scale-3xs);

			/* base styles */
			display: flex;
			flex-direction: column;
			gap: var(--gap);
			height: max-content;
		}

		:host(:is(ly-field)) ::slotted(:where(input, select, textarea)) {
			width: 100% !important;
		}

		:host(:is(ly-field)[status='debug'])
			::slotted(:where(input, select, textarea)) {
			--outln-clr: var(--clr-debug) !important;
		}

		:host(:is(ly-field)[status='error'])
			::slotted(:where(input, select, textarea)) {
			--outln-clr: var(--clr-error) !important;
		}

		:host(:is(ly-field)[status='info'])
			::slotted(:where(input, select, textarea)) {
			--outln-clr: var(--clr-info) !important;
		}

		:host(:is(ly-field)[status='success'])
			::slotted(:where(input, select, textarea)) {
			--outln-clr: var(--clr-success) !important;
		}

		:host(:is(ly-field)[status='warning'])
			::slotted(:where(input, select, textarea)) {
			--outln-clr: var(--clr-warning) !important;
		}

		:host(:is(ly-field))::part(label) {
			align-items: center;
			display: flex;
			flex-direction: row;
			font-size: var(--scale-md);
			gap: var(--scale-3xs);
		}

		:host(:is(ly-field))::part(required-icon) {
			color: var(--clr-error);
			font-size: var(--scale-xs);
			margin: auto 0;
		}

		:host(:is(ly-field))::part(caption) {
			align-items: center;
			color: var(--clr-subtext);
			gap: var(--scale-3xs);
		}

		:host(:is(ly-field))::part(caption-text) {
			font-size: clamp(72%, 0.5vw, 88%);
			font-weight: 500;
			margin: auto 0;
		}

		:host(:is(ly-field)[status='debug'])::part(caption) {
			color: var(--clr-debug);
		}

		:host(:is(ly-field)[status='error'])::part(caption) {
			color: var(--clr-error);
		}

		:host(:is(ly-field)[status='info'])::part(caption) {
			color: var(--clr-info);
		}

		:host(:is(ly-field)[status='success'])::part(caption) {
			color: var(--clr-success);
		}

		:host(:is(ly-field)[status='warning'])::part(caption) {
			color: var(--clr-warning);
		}
	`;

	@property( { type: String } ) label = '';
	@property( { type: String } ) caption = '';
	@property( { type: String } ) name = '';
	@property( { type: String } ) ref = '';
	@property( { type: Boolean, reflect: true } ) required = false;
	@property( { type: 'debug' || 'error' || 'info' || 'success' || 'warning' } )
	status = '';
	@property( { type: String } ) type = 'text';

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
						<ly-flex axis='x' part="caption">
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
