import { LitElement, css, html, nothing } from 'lit'
import { customElement, property, query } from 'lit/decorators.js'

import {
    computePosition,
    autoUpdate,
    offset,
    shift,
    flip,
} from '@floating-ui/dom'

@customElement( 'ly-dropmenu' )
export class Dropmenu extends LitElement {
    static override readonly styles = css`
		:host(:is(ly-dropmenu)) {
			position: fixed;
			z-index: 100000;
		}
	`;

    protected override render() {
        return html` <slot></slot> `
    }
}

@customElement( 'ly-dropdown' )
export class Dropdown extends LitElement {
    @property( { type: Boolean, reflect: true } ) open = false;

    @query( 'summary' ) private _dropsummary!: HTMLElement
    @query( 'ly-dropmenu' ) private _dropmenu!: HTMLElement
    private _cleanup?: any

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

        if ( this._cleanup ) {
            this._cleanup()
        }
    }

    protected override render() {
        return html`
			<summary>
				<slot name="summary" @click=${ this._toggleOpen }></slot>
			</summary>
			${ this.open
                ? html`
						<ly-dropmenu>
							<slot></slot>
						</ly-dropmenu>
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
}
