import { LitElement, html, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import stylesCheckbox from './styles/checkbox.css.ts'
import stylesRadio from './styles/radio.css.ts'
import stylesSelect from './styles/select.css.ts'
import stylesSwitch from './styles/switch.css.ts'

/**
 * Todo: Reduce redundancy and enhance readability by merging ly-checkbox, ly-radio and ly-switch into ly-check
 * Todo: Allow user to group by ly-check[group]
 * Todo: Allow user to specify if ly-check can be deselected or not
 */

@customElement( 'ly-checkbox' )
export class Checkbox extends LitElement {
	@property( { type: Boolean, reflect: true } ) checked = false;
	@property( { type: String } ) label = '';

	static override readonly properties = {
		delegatesFocus: { type: Boolean, reflect: true },
	};

	static override readonly styles = stylesCheckbox;

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

@customElement( 'ly-radio' )
export class Radio extends LitElement {
	@property( { type: Boolean, reflect: true } ) checked = false;
	@property( { type: String } ) group = '';
	@property( { type: String } ) label = '';

	static override readonly properties = {
		delegatesFocus: { type: Boolean, reflect: true },
	};

	static override readonly styles = stylesRadio;

	private toggleChecked() {
		if ( !this.checked ) {
			const radios = document.querySelectorAll(
				`ly-radio[group="${ this.group }"]`
			)

			for ( const radio of [ ...radios ] ) {
				( radio as Radio ).checked = false;
				( radio as Radio ).dispatchEvent(
					new CustomEvent( 'change', {
						bubbles: true,
						detail: { checked: false },
					} )
				)
			}

			this.checked = true
		} else {
			this.checked = !this.checked
		}

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
					${ this.checked ? 'check_circle' : 'radio_button_unchecked' }
				</ly-icon>
				${ this.label
				? html`<label part="label">${ this.label }</label>`
				: nothing }
			</ly-row>
			${ this.checked ? html`<slot></slot>` : nothing }
		`
	}
}
@customElement( 'ly-switch' )
export class Switch extends LitElement {
	@property( { type: Boolean, reflect: true } ) checked = false;

	static override readonly properties = {
		delegatesFocus: { type: Boolean, reflect: true },
	};

	static override readonly styles = stylesSwitch;

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
			<ly-icon ?solid="${ this.checked }">
				${ this.checked ? 'toggle_on' : 'toggle_off' }
			</ly-icon>
		`
	}
}

enum SelectMode {
	'picker',
	'combobox',
}

@customElement( 'ly-select' )
export class Select extends LitElement {
	@property( { type: SelectMode, reflect: true } ) mode = 'picker';

	static override readonly styles = stylesSelect;

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
