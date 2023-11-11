import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import initialCss from '@global/initial.ts';
import localCss from './style.ts';

const allowedVariants: readonly string[] = [
	'column',
	'column-reverse',
	'row',
	'row-reverse',
	'grid',
	'main',
];

const allowedAlignments: readonly string[] = [
	'top-left',
	'top',
	'top-right',
	'center-left',
	'center',
	'center-right',
	'bottom-left',
	'bottom',
	'bottom-right',
];

@customElement('lit-layout')
export class Layout extends LitElement {
	@property({ type: String, reflect: true }) variant = 'column';
	@property({ type: String }) align = 'top-left';

	static styles = [initialCss, localCss];

	async connectedCallback(): Promise<void> {
		super.connectedCallback();

		if (this.variant) {
			const value = this.variant;

			if (!allowedVariants.includes(value)) {
				console.warn(
					`Invalid variant value: ${value}. Valid options are [${allowedVariants}].`
				);
			}
		}

		if (this.align) {
			const value = this.align;

			if (!allowedAlignments.includes(value)) {
				console.warn(
					`Invalid align value: ${value}. Valid options are [${allowedAlignments}].`
				);
			}
		}
	}

	protected render() {
		return html` <slot></slot> `;
	}
}
