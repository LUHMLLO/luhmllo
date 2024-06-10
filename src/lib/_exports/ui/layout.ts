import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import type { Axis } from 'src/lib/shared/types/zod'

@customElement( 'ly-flex' )
export class Flex extends LitElement {
	static override readonly styles = css`
		:host(:is(ly-flex)) {
			display: flex;
			height: max-content;
		}

		:host(:is(ly-flex)[axis='y']) {
			flex-direction: column;
		}

		:host(:is(ly-flex)[axis='x']) {
			flex-direction: row;
		}
	`;

	@property( { type: String, reflect: true } ) axis = <Axis> 'x';

	protected override render() {
		return html` <slot></slot> `
	}
}

@customElement( 'ly-grid' )
export class Grid extends LitElement {
	static override readonly styles = css`
		:host(:is(ly-grid)) {
			/* local vars */
			--tmpl: 1;
			--gap: 0rem;
			--maxWidth: 1fr;
			--minWidth: clamp(12rem, 16vmin, 24rem);
			--repeat: auto-fill;

			/* base styles */
			display: grid;
			gap: var(--gap);
			grid-template-columns: repeat(
				var(--repeat),
				minmax(
					max(var(--minWidth), calc(100% / var(--tmpl) - var(--gap))),
					var(--maxWidth)
				)
			);
			height: max-content;
		}

		:host(:is(ly-grid[tmpl='2'])) {
			--tmpl: 2;
		}

		:host(:is(ly-grid[tmpl='3'])) {
			--tmpl: 3;
		}

		:host(:is(ly-grid[tmpl='4'])) {
			--tmpl: 4;
		}

		:host(:is(ly-grid[tmpl='5'])) {
			--tmpl: 5;
		}

		:host(:is(ly-grid[tmpl='6'])) {
			--tmpl: 6;
		}

		:host(:is(ly-grid[tmpl='7'])) {
			--tmpl: 7;
		}

		:host(:is(ly-grid[tmpl='8'])) {
			--tmpl: 8;
		}

		:host(:is(ly-grid[tmpl='9'])) {
			--tmpl: 9;
		}

		:host(:is(ly-grid[tmpl='10'])) {
			--tmpl: 10;
		}

		:host(:is(ly-grid[tmpl='11'])) {
			--tmpl: 11;
		}

		:host(:is(ly-grid[tmpl='12'])) {
			--tmpl: 12;
		}

		:host(:is(ly-grid[tmpl='container'])) {
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

		:host(:is(ly-grid[tmpl='container'])) ::slotted(*) {
			grid-column: contain;
		}

		:host(:is(ly-grid[tmpl='container'])) ::slotted([tmpl-expand]) {
			grid-column: expand;
		}

		:host(:is(ly-grid[tmpl='container']))
			::slotted([tmpl-expand]:not([tmpl-expand='uncontained'])) {
			/* (100vw - widthToMatch) / 2 , the min in the minmax() + the gap */
			padding-inline: max(
				((100% - var(--prefers-containerWidth)) / 2),
				var(--prefers-containerOutterWidth) + 1px
			) !important;
		}

		:host(:is(ly-grid[tmpl='container'])) ::slotted([tmpl-subgrid]) {
			grid-auto-rows: inherit;
			grid-template-columns: subgrid;
			grid-column: expand;
		}

		:host(:is(ly-grid[tmpl='row'])) {
			grid-auto-flow: column;
			grid-auto-columns: minmax(0, 1fr);
		}

		:host(:is(ly-grid[tmpl='col'])) {
			grid-auto-flow: row;
			grid-auto-rows: minmax(0, 1fr);
		}
	`;
	@property( { type: String, reflect: true } ) tmpl = '';

	protected override render() {
		return html` <slot></slot> `
	}
}

@customElement( 'ly-group' )
export class Group extends LitElement {
	static override readonly styles = css`
		:host(:is(ly-group)) {
			/* base styles */
			display: flex;
			flex-direction: column;
			height: max-content;
		}
	`;

	protected override render() {
		return html` <slot></slot> `
	}
}
