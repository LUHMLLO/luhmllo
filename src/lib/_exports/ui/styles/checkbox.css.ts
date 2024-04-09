import { css } from 'lit';

export default css`
	@layer web-components {
		:host(:is(ly-checkbox)) {
			/* local vars */
			--gap: var(--scale-5xs);

			/* base styles */
			cursor: pointer;
			display: inline-flex;
			flex-direction: column;
			gap: var(--gap);
			height: max-content;
			overflow: clip;
		}

		:host(:is(ly-checkbox))::part(row) {
			gap: inherit;
		}

		:host(:is(ly-checkbox))::part(label) {
			display: inline-flex;
			flex-shrink: 1;
		}
	}
`;
