import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import initialCss from '@global/initial.ts';
import expandableCss from './style.ts';
import expandableToggleCss from './style.toggle.ts';
import expandableContentCss from './style.content.ts';

const allowedEmphasis: readonly string[] = ['low', 'medium', 'high'];

@customElement('lit-expandable')
export class Expandable extends LitElement {
	@property({ type: String }) emphasis = 'low';
	@property({ type: Boolean }) rounded = false;

	@property({ type: String }) lead = '';
	@property({ type: Boolean }) lead_fill = false;
	@property({ type: String }) trail = 'chevron_right';
	@property({ type: Boolean }) trail_fill = false;

	@property({ type: Boolean, reflect: true }) open = false;
	@property({ type: String }) title = '';

	static styles = [
		initialCss,
		expandableCss,
		expandableToggleCss,
		expandableContentCss,
	];

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
			<span part="toggle" @click=${this.handleOpen} emphasis=${this.emphasis}>
				<span part="lead">${this.lead}</span>
				${this.title}
				<span part="trail">${this.trail}</span>
			</span>

			<div part="content">
				<slot>
					<small>No content . . .</small>
				</slot>
			</div>
		`;
	}
}
