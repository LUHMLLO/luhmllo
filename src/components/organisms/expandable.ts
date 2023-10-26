import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('lit-expandable')
export class Expandable extends LitElement {
	@property({ type: String }) leading = '';
	@property({ type: String }) trailing = '';
	@property({ type: String }) title = '';
	@property({ type: Boolean, reflect: true }) open = false;

	static styles = css`
		:host {
			box-sizing: border-box;
			margin: 0;
			max-width: 100%;

			display: flex;
			flex-direction: column;

			border-radius: var(--bord-radius);
			overflow: hidden;
		}

		lit-button {
			flex-grow: 1;
			width: 100%;
		}

		::slotted(*[slot='heading']):focus {
			background-color: map.get(colors.$Surface, 600);
		}

		@media (hover: hover) {
			::slotted(*[slot='heading']):hover {
				background-color: map.get(colors.$Surface, 600);
			}
		}

		::slotted(*[slot='heading']):active {
			background-color: map.get(colors.$Surface, 800);
		}

		::slotted(*[slot='content']) {
			background-color: map.get(colors.$Surface, 800);
			display: flex;
			flex-direction: column;
			gap: map.get($Scale, 5xs);
			padding: map.get($Scale, 5xs);
		}
	`;

	connectedCallback() {
		super.connectedCallback();
	}

	protected render() {
		return this.setExpandableTag();
	}

	private setExpandableTag() {
		return html`
			<lit-button
				leading=${this.leading}
				trailing=${this.trailing}>
				${this.title}
			</lit-button>
			<slot name="content"></slot>
		`;
	}
}
