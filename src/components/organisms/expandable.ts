import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import initialCss from '../../common/styles/lit/initial.ts';
import expandableCss from '../../common/styles/lit/modules/molecule.expandable.ts';

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

			<content><slot></slot></content>
		`;
	}

	private handleOpen() {
		this.open = !this.open;
	}
}
