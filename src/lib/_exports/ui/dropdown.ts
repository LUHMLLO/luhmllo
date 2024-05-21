import { LitElement, html, nothing } from 'lit'
import { customElement, property, query } from 'lit/decorators.js'

import {
    computePosition,
    autoUpdate,
    offset,
    shift,
    flip,
} from '@floating-ui/dom'

import styles from './styles/dropdown.css.ts'

@customElement( 'ly-dropdown' )
export class Dropdown extends LitElement {
    @property( { type: Boolean, reflect: true } ) open = false;

    static override readonly styles = styles;

    @query( 'summary' ) private _dropsummary!: HTMLDetailsElement
    @query( 'ly-group' ) private _dropmenu!: HTMLElement
    private _cleanup?: any

    protected override async firstUpdated(): Promise<void> {
        // this.renderRoot.addEventListener(
        //     'click',
        //     ( e: Event ) => this._clickOutside( e as MouseEvent ),
        //     { composed: true } as CustomEventOptions
        // )
    }

    override async updated(): Promise<void> {
        if ( this._dropsummary && this._dropmenu && this.open ) {
            this._cleanup = autoUpdate(
                this._dropsummary,
                this._dropmenu,
                async () => {
                    await computePosition( this._dropsummary, this._dropmenu, {
                        middleware: [ offset( 3 ), flip(), shift() ],
                        placement: 'bottom',
                        strategy: 'fixed',
                    } ).then( ( { x, y } ) => {
                        Object.assign( this._dropmenu.style, {
                            left: `${ x }px`,
                            top: `${ y }px`,
                        } )
                    } )
                },
                {
                    ancestorResize: true,
                    ancestorScroll: true,
                    animationFrame: true,
                    elementResize: true,
                    layoutShift: true,
                }
            )
        } else if ( this._cleanup ) {
            this._cleanup()
            this._cleanup = undefined
        }
    }

    override async disconnectedCallback(): Promise<void> {
        super.disconnectedCallback()
        // window.removeEventListener( 'click', () => this._clickOutside )

        if ( this._cleanup ) {
            this._cleanup()
        }
    }

    protected override render() {
        return html`
			<slot name="summary" @click=${ this._toggleOpen }></slot>
			${ this.open
                ? html`
						<ly-group>
							<slot></slot>
						</ly-group>
				  `
                : nothing }
		`
    }

    private _toggleOpen() {
        if ( this._cleanup ) {
            this._cleanup()
        }

        this.open = !this.open
    }

    // private _clickOutside( e: MouseEvent ): void {
    //     if ( this.shadowRoot?.contains( e.target as HTMLElement ) ) return // Consider clicks within shadow DOM as "inside"

    //     console.log( e.target )
    //     if ( this.open ) this.open = false
    // }
}
