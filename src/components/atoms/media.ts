import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('lit-media')
export class Media extends LitElement {
	@property({ type: String }) is = '';
	@property({ type: String }) alt = '';
	@property({ type: String }) src = '';
	@property({ type: String }) type = '';
	@property({ type: Boolean }) controls = false;
	@property({ type: Boolean }) autoplay = false;
	@property({ type: Boolean }) loop = false;

	static styles = css`
		:host {
			box-sizing: border-box;
			display: block;
			margin: 0;
			max-width: 100%;
			overflow: hidden;
			padding: 0;
		}

		:host > * {
			display: block;
			margin: 0;
			max-width: 100%;
			object-fit: cover;
			overflow: hidden;
			width: 100%;
		}
	`;

	connectedCallback(): void {
		super.connectedCallback();

		if (!this.is) {
			console.warn(
				`No media tag was selected. Valid options are 'audio', 'image', or 'video'.`
			);
		}

		if (!['audio', 'image', 'video'].includes(this.is)) {
			console.warn(
				`Invalid tag: ${this.is}. Valid options are 'audio', 'image', or 'video'.`
			);
		}
	}

	render() {
		return this.setTag();
	}

	private setTag() {
		switch (this.is) {
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
