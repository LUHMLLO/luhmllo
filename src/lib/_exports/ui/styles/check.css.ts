import { css } from 'lit'

export default css`
	@layer web-components {
		:host(:is(ly-check)) {
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

		:host(:is(ly-check))::part(row) {
			gap: inherit;
		}

		:host(:is(ly-check))::part(label) {
			display: inline-flex;
			flex-shrink: 1;
		}

		:host(:is(ly-check)) > ly-icon {
			cursor: pointer;
		}
	}
`
