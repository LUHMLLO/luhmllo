import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement( 'ly-fragment' )
export class Fragment extends LitElement {
    static override readonly styles = css`
		:host() {
			--bg: none;
			background-color: var(--bg);

			--clr: inherit;
			color: var(--clr);

			--gap: 0;
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

		:host(:is(ly-fragment)) {
			display: contents;
		}
	`;

    protected override render() {
        return html` <slot></slot> `
    }
}
