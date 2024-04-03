import { css } from 'lit';

export default css`
	@layer web-components {
		:host(:is(ly-grid)) {
			/* local vars */
			--gap: 0rem;
			--max: 1;
			--maxWidth: 1fr;
			--minWidth: clamp(6rem, 16vmin, 24rem);
			--repeat: auto-fill;

			/* base styles */
			display: grid;
			gap: var(--gap);
			grid-template-columns: repeat(
				var(--repeat),
				minmax(
					max(var(--minWidth), calc(100% / var(--max) - var(--gap))),
					var(--maxWidth)
				)
			);
		}

		:host(:is(ly-grid[max='2'])) {
			--max: 2;
		}

		:host(:is(ly-grid[max='3'])) {
			--max: 3;
		}

		:host(:is(ly-grid[max='4'])) {
			--max: 4;
		}
	}
`;
