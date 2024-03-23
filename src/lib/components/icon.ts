import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

const localCSS = css`
	host:not(:defined) {
		display: none;
		opacity: 0;
		visibility: hidden;
	}

	:host {
		aspect-ratio: 1;
		flex-shrink: 0;
		font-family: 'Material Symbols Outlined', 'Material Symbols Rounded',
			'Material Symbols Sharp', sans-serif;
		-webkit-font-feature-settings: 'liga';
		font-feature-settings: 'liga';
		font-weight: normal;
		font-size: var(--iconSize, 1rem);
		font-style: normal;
		font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 400, 'opsz' 48;
		height: max-content;
		line-height: 1;
		letter-spacing: normal;
		overflow: clip;
		text-transform: none;
		user-select: none;
		width: max-content;
	}

	:host([solid]) {
		font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 400, 'opsz' 48;
	}
`;

@customElement('lm-icon')
export class Icon extends LitElement {
	@property({ type: String }) icon = '';
	@property({ type: Boolean, reflect: true }) solid = false;

	static readonly styles = [localCSS];

	async connectedCallback(): Promise<void> {
		super.connectedCallback();
	}

	async disconnectedCallback(): Promise<void> {
		super.disconnectedCallback();
	}

	protected render() {
		return html` <slot></slot> `;
	}
}
