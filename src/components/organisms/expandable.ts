import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('lit-expandable')
export class Expandable extends LitElement {
	@property({ type: Boolean }) open = false;

	static styles = css`
		:host {
			box-sizing: border-box;
			margin: 0;
			max-width: 100%;
		}

		:host {
			display: flex;
			flex-direction: column;
		}

		:host {
			border-radius: var(--bord-radius);
			overflow: hidden;
		}

		::slotted(*[slot='heading']) {
			background-color: var(--clr-secondary);
			color: red;

			display: flex;
			align-items: center;

			margin: 0;
			padding: var(--scale-xs) var(--scale-sm);
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

	render() {
		return this.setExpandableTag();
	}

	private setExpandableTag() {
		return html`
			<slot name="heading"></slot>
			<slot name="content"></slot>
		`;
	}
}
