import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import initialCss from '@global/initial.ts';
import expandableCss from './style.ts';

const allowedEmphasis: readonly string[] = ['low', 'medium', 'high'];

@customElement('lit-expandable')
export class Expandable extends LitElement {
	@property({ type: String }) emphasis = 'low';
	@property({ type: Boolean }) rounded = false;

	@property({ type: String }) leading = '';
	@property({ type: Boolean }) leading_fill = false;
	@property({ type: String }) trailing = 'chevron_right';
	@property({ type: Boolean }) trailing_fill = false;

	@property({ type: Boolean, reflect: true }) open = false;
	@property({ type: String }) title = '';

	static styles = [initialCss, expandableCss];

	private handleOpen() {
		this.open = !this.open;
	}

	async connectedCallback(): Promise<void> {
		super.connectedCallback();

		if (this.emphasis) {
			const value = this.emphasis;

			if (!allowedEmphasis.includes(value)) {
				console.warn(
					`Invalid emphasis value: ${value}. Valid options are [${allowedEmphasis}].`
				);
			}
		}
	}

	protected render() {
		return html`
			<lit-button
				part="toggle"
				@click=${this.handleOpen}
				emphasis=${this.emphasis}
				leading=${this.leading}
				trailing=${this.trailing}>
				${this.title}
			</lit-button>

			<div part="content">
				<slot></slot>
			</div>
		`;
	}
}
