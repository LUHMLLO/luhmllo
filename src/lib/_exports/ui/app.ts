import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
@customElement( 'ly-app' )
export class App extends LitElement {
	static override readonly styles = css`
		:host(:is(ly-app)) {
			--bg: var(--clr-background);
			background-color: var(--bg);

			--clr: var(--clr-text);
			color: var(--clr);

			--gap: 0;
			gap: var(--gap);

			--inset: 0;
			inset: var(--inset);

			--margin: 0;
			margin: var(--margin);

			--placement: fixed;
			position: var(--placement);

			--radius: 0;
			border-radius: var(--radius);

			--spacing: 0;
			padding: var(--spacing);
		}

		:host(:is(ly-app)) {
			color: var(--clr);
			display: grid;
			height: 100dvh;
			isolation: isolate;
			overflow: clip;
			width: 100dvw;
			z-index: 1;
		}

		:host(:is(ly-app[tmpl='default-x'])) {
			grid-auto-columns: max-content;
			grid-auto-flow: column;
			overflow-x: auto;
			overflow-y: clip;
		}

		:host(:is(ly-app[tmpl='default-y'])) {
			grid-auto-columns: max-content;
			grid-auto-flow: column;
			overflow-x: clip;
			overflow-y: auto;
		}

		:host(:is(ly-app[tmpl='container'])) {
			display: grid;
			grid-auto-rows: max-content;
			grid-template-columns:
				[expand-start] minmax(var(--prefers-containerOutterWidth), 1fr)
				[contain-start] minmax(0, var(--prefers-containerWidth))
				[contain-end] minmax(var(--prefers-containerOutterWidth), 1fr)
				[expand-end];
			overflow-x: clip;
			overflow-y: auto;
		}

		:host(:is(ly-app[tmpl='container'])) ::slotted(*) {
			grid-column: contain;
		}

		:host(:is(ly-app[tmpl='container'])) ::slotted([tmpl-expand]) {
			grid-column: expand;
		}

		:host(:is(ly-app[tmpl='container']))
			::slotted([tmpl-expand]:not([tmpl-expand='uncontained'])) {
			/* (100vw - widthToMatch) / 2 , the min in the minmax() + the gap */
			padding-inline: max(
				((100% - var(--prefers-containerWidth)) / 2),
				var(--prefers-containerOutterWidth) + 1px
			) !important;
		}

		:host(:is(ly-app[tmpl='container'])) ::slotted([tmpl-subgrid]) {
			grid-auto-rows: inherit;
			grid-template-columns: subgrid;
			grid-column: expand;
		}

		:host(:is(ly-app[tmpl='row'])) {
			display: flex;
			flex-direction: row;
		}

		:host(:is(ly-app[tmpl='col'])) {
			display: flex;
			flex-direction: column;
		}
	`;

	@property( { type: String, reflect: true } ) tmpl = 'default-y';

	protected override render() {
		return html` <slot></slot> `
	}
}
