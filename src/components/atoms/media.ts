import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import initialCss from '../../common/styles/lit/initial.ts';
import mediaCss from '../../common/styles/lit/modules/atom.media.ts';

@customElement('lit-media')
export class Media extends LitElement {
	@property({ type: String }) variant = '';
	@property({ type: String }) src = '';
	@property({ type: String }) type = '';
	@property({ type: String }) alt = '';
	@property({ type: Boolean, reflect: true }) controls = false;
	@property({ type: Boolean, reflect: true }) autoplay = false;
	@property({ type: Boolean, reflect: true }) loop = false;

	static styles = [initialCss, mediaCss];

	private setTag() {
		switch (this.variant) {
			case 'audio':
				return html`
					<audio
						?autoplay=${this.autoplay}
						?controls=${this.controls}
						?loop=${this.loop}>
						<source src=${this.src} type=${this.type} />
						Your browser does not support the audio element.
					</audio>
				`;

			case 'image':
				return html` <img src=${this.src} alt=${this.alt} /> `;

			case 'video':
				return html`
					<video
						?autoplay=${this.autoplay}
						?controls=${this.controls}
						?loop=${this.loop}>
						<source src=${this.src} type=${this.type} />
						Your browser does not support the video tag.
					</video>
				`;
		}
	}

	async connectedCallback(): Promise<void> {
		super.connectedCallback();

		if (!this.variant) {
			console.warn(
				`No media tag was selected. Valid options are 'audio', 'image', or 'video'.`
			);
		}

		if (!['audio', 'image', 'video'].includes(this.variant)) {
			console.warn(
				`Invalid tag: ${this.variant}. Valid options are 'audio', 'image', or 'video'.`
			);
		}
	}

	protected render() {
		return this.setTag();
	}
}
