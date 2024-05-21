import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement( 'ly-fragment' )
export class Fragment extends LitElement {
    static override readonly styles = css`
		:host {
			display: contents;
		}
	`;

    protected override render() {
        return html` <slot></slot> `
    }
}
