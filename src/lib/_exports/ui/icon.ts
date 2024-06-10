import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import type { IconSolid } from 'src/lib/shared/types/zod'

@customElement( 'ly-icon' )
export class Icon extends LitElement {
	static override readonly styles = css`
		:host(:is(ly-icon)) {
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

			--radius: 50%;
			border-radius: var(--radius);

			--spacing: 0;
			padding: var(--spacing);
		}

		:host(:is(ly-icon)) {
			aspect-ratio: 1/1;
			display: inline-grid;
			flex-grow: 0;
			flex-shrink: 0;
			font-family: var(--prefers-iconFontFamily);
			font-feature-settings: 'liga';
			font-size: calc(var(--prefers-iconScale) * 0.75);
			font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 400, 'opsz' 48;
			height: var(--prefers-iconScale);
			overflow: clip;
			place-content: center center;
			shape-margin: var(--scale-5xs);
			shape-outside: circle(50%);
			user-select: none;
			width: auto;
		}

		:host(:is(ly-icon[solid])) {
			font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 400, 'opsz' 48;
		}
	`;

	@property( { type: Boolean, reflect: true } ) solid = <IconSolid> false;

	protected override render() {
		return html` <slot></slot> `
	}
}
