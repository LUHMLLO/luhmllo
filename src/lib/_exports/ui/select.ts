import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './styles/select.css.ts';

enum SelectMode {
	'picker',
	'combobox',
}

@customElement('ly-select')
export class Select extends LitElement {
	@property({ type: SelectMode, reflect: true }) mode = 'picker';

	static override readonly styles = styles;

	override async connectedCallback(): Promise<void> {
		super.connectedCallback();
	}

	override async disconnectedCallback(): Promise<void> {
		super.disconnectedCallback();
	}

	protected override render() {
		return html` <slot></slot> `;
	}
}
