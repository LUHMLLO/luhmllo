import { css } from 'lit';

export default css`
	@layer web-components {
		:host(:is(ly-slider)) {
			/* local vars */
			--gap: var(--scale-2xl);

			/* base styles */
			display: flex;
			flex-direction: row;
			gap: var(--gap);
			height: max-content;
		}

		:host(:is(ly-slider)) ::slotted(*) {
			flex-shrink: 0;
			min-height: max-content;
			min-width: max-content;
			scroll-snap-align: start;
		}

		:host(:is(ly-slider)[direction='row']) {
			overflow-x: auto;
			scroll-snap-type: x proximity;
		}

		:host(:is(ly-slider)[direction='column']) {
			overflow-y: auto;
			scroll-snap-type: y proximity;
		}
	}
`;
