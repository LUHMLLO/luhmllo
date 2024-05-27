import { LitElement, css, html, nothing, type TemplateResult } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement( 'ly-check' )
export class Check extends LitElement {
	static override readonly styles = css`
		:host() {
			--bg: none;
			background-color: var(--bg);

			--clr: inherit;
			color: var(--clr);

			--gap: var(--scale-5xs);
			gap: var(--gap);

			--inset: 0;
			inset: var(--inset);

			--margin: 0;
			margin: var(--margin);

			--placement: relative;
			position: var(--placement);

			--radius: 0;
			border-radius: var(--radius);

			--spacing: 0;
			padding: var(--spacing);
		}

		:host(:is(ly-check)) {
			cursor: pointer;
			display: inline-flex;
			flex-direction: column;
			flex-shrink: 0;
			height: max-content;
			overflow: clip;
		}

		:host(:is(ly-check):focus-visible) {
			outline: solid var(--clr-accent);
		}

		:host(:is(ly-check))::part(row) {
			gap: inherit;
		}

		:host(:is(ly-check))::part(label) {
			display: inline-flex;
			flex-shrink: 1;
		}

		:host(:is(ly-check)) > ly-icon {
			cursor: pointer;
		}
	`;

	static override readonly properties = {
		delegatesFocus: { type: Boolean, reflect: true },
	};

	static override readonly shadowRootOptions = {
		...LitElement.shadowRootOptions,
		delegatesFocus: true,
	};

	@property( { type: Boolean, reflect: true } ) checked = false;
	@property( { type: String, reflect: true } ) group = '';
	@property( { type: String, reflect: true } ) label = '';
	@property( { type: 'checkbox' || 'box' || 'switch', reflect: true } ) variant =
		'';

	override async connectedCallback(): Promise<void> {
		super.connectedCallback()
		this.setAttribute( 'tabindex', '0' )
		this.addEventListener( 'focus', () => this.focus() )
		this.addEventListener( 'click', this._toggleChecked )
		this.addEventListener( 'keydown', ( event ) => {
			if ( event.key === 'Enter' || event.key === ' ' ) {
				this._toggleChecked()
			}
		} )
	}

	override async disconnectedCallback(): Promise<void> {
		super.disconnectedCallback()
		this.removeAttribute( 'tabindex' )
		this.removeEventListener( 'focus', () => this.focus() )
		this.removeEventListener( 'click', this._toggleChecked )
		this.removeEventListener( 'keydown', ( event ) => {
			if ( event.key === 'Enter' || event.key === ' ' ) {
				this._toggleChecked()
			}
		} )
	}

	protected override render() {
		return html`
			<ly-flex axis="x" part="row">
				<ly-icon ?solid="${ this.checked }"> ${ this._handleVariant() } </ly-icon>
				${ this.label
				? html`<label part="label">${ this.label }</label>`
				: nothing }
			</ly-flex>
			${ this.checked ? html`<slot></slot>` : nothing }
		`
	}

	private _toggleChecked() {
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

	private _handleVariant(): TemplateResult {
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
