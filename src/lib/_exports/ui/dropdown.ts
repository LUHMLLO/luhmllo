import { LitElement, css, html, nothing } from 'lit'
import { customElement, property, query } from 'lit/decorators.js'

import {
    computePosition,
    autoUpdate,
    offset,
    shift,
    flip,
} from '@floating-ui/dom'

@customElement( 'ly-dropdown' )
export class Dropdown extends LitElement {
    @property( { type: Boolean, reflect: true } ) open = false;

    static override readonly styles = css`
		:host(:is(ly-dropdown))::part(dropmenu) {
			--bg: var(--clr-background);
            --gap: 0;
			--outln-clr: var(--bg);
            --radius: var(--scale-sm);

            border-radius: var(--radius);
            /*clip-path: inset(0% round var(--radius));*/
			max-height: calc(clamp(16dvh, 25dvh, 32dvh) + var(--scale-5xl));
			max-width: calc(100dvw - var(--scale-sm));
			min-height: max-content;
			min-width: max-content;
			outline: solid 0.125rem
				color-mix(
					in var(--prefers-colorSpace, srgb),
					var(--outln-clr),
					white 3%
				);
			/*outline-offset: -0.125rem;*/
			position: absolute;
			width: 100%;
			z-index: 100000;
		}
        
		:host(:is(ly-dropdown)) > ly-slider::-webkit-scrollbar {
            display: none;
        }
	`;

    @query( 'summary' ) private _dropsummary!: HTMLElement
    @query( 'ly-slider' ) private _dropmenu!: HTMLElement
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
						<ly-slider axis="col" part="dropmenu">
							<slot></slot>
						</ly-slider>
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
