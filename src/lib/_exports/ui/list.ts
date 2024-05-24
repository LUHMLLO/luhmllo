import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

const styles = css`
	:host(:is(ly-list)) {
		/* local vars */
		--bg: var(--clr-primary);
		--clr: var(--clr-text);
		--cols: 1;
		--gap: calc(var(--scale-5xs) * 0.1625);
		--radius: var(--scale-3xs);

		/* theming */
		background-color: var(--bg);
		color: var(--clr);

		/* base styles */
		border-radius: var(--radius);
		display: flex;
		flex-direction: column;
		flex-shrink: 0;
		height: max-content;
		gap: var(--gap);
		isolation: isolate;
		overflow: auto;
		outline: revert !important;
		outline-color: var(--bg) !important;
		outline-style: solid !important;
	}

	:host(:is(ly-list-header, ly-list-row, ly-list-footer)) {
		/* base styles */
		display: grid;
		flex-shrink: 0;
		gap: var(--gap);
		grid-template-columns: repeat(
			var(--cols),
			minmax(max(10rem, calc(100% / var(--cols) - 0.125rem)), 1fr)
		);
	}

	:host(:is(ly-list-cell)) {
		/* base styles */
		background-color: color-mix(
			in var(--prefers-colorSpace, srgb),
			var(--bg),
			black 50%
		);
		display: flex;
		flex-direction: column;
		overflow: clip;
		padding: var(--scale-sm) !important;
		place-content: center;
		z-index: 1;
	}
`

@customElement( 'ly-list' )
export class List extends LitElement {
	static override readonly styles = styles;

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

@customElement( 'ly-list-header' )
export class ListHeader extends LitElement {
	static override readonly styles = styles;

	protected override render() {
		return html` <slot></slot> `
	}
}

@customElement( 'ly-list-row' )
export class ListRow extends LitElement {
	static override readonly styles = styles;

	protected override render() {
		return html` <slot></slot> `
	}
}

@customElement( 'ly-list-footer' )
export class ListFooter extends LitElement {
	static override readonly styles = styles;

	protected override render() {
		return html` <slot></slot> `
	}
}

@customElement( 'ly-list-cell' )
export class ListCell extends LitElement {
	static override readonly styles = styles;

	protected override render() {
		return html` <slot></slot> `
	}
}
