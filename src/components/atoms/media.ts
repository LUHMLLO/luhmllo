import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('lit-media')
export class Media extends LitElement {
	@property({ type: String }) variant = '';
	@property({ type: String }) src = '';
	@property({ type: String }) type = '';
	@property({ type: String }) alt = '';
	@property({ type: Boolean, reflect: true }) controls = false;
	@property({ type: Boolean, reflect: true }) autoplay = false;
	@property({ type: Boolean, reflect: true }) loop = false;

	static styles = css`
		:host {
			box-sizing: border-box;
			display: block;
			height: max-content;
			margin: 0;
			max-width: 100%;
			overflow: hidden;
			padding: 0;
			position: relative;
		}

		:host > * {
			display: block;
			margin: 0;
			max-width: 100%;
			object-fit: cover;
			overflow: hidden;
		}
	`;

	connectedCallback(): void {
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

	render() {
		return this.setTag();
	}

	private setTag() {
		switch (this.variant) {
			case 'audio':
				return html`
					<audio
						?autoplay=${this.autoplay}
						?controls=${this.controls}
						?loop=${this.loop}>
						<source src=${this.src} ?type=${this.type} />
						Your browser does not support the audio element.
					</audio>
				`;

			case 'image':
				return html` <img src=${this.src} ?alt=${this.alt} /> `;

			case 'video':
				return html`
					<video
						?autoplay=${this.autoplay}
						?controls=${this.controls}
						?loop=${this.loop}>
						<source src=${this.src} ?type=${this.type} />
						Your browser does not support the video tag.
					</video>
				`;
		}
	}
}
