import { css } from 'lit';

export default css`
	@layer web-components {
		:host {
			/* local vars */
			--gap: 0;
			--minWidth: clamp(6rem, 16vmin, 24rem);
			--maxWidth: 1fr;
			--repeat: auto-fill;

			/* base styles */
			display: grid;
			gap: var(--gap);
			grid-template-columns: var(--maxWidth);
		}

		:host([max='2']) {
			--max: 2;
			grid-template-columns: repeat(
				var(--repeat),
				minmax(
					max(var(--minWidth), calc(100% / var(--max) - var(--gap))),
					var(--maxWidth)
				)
			);
		}

		:host([max='3']) {
			--max: 3;
			grid-template-columns: repeat(
				var(--repeat),
				minmax(
					max(var(--minWidth), calc(100% / var(--max) - var(--gap))),
					var(--maxWidth)
				)
			);
		}

		:host([max='4']) {
			--max: 4;
			grid-template-columns: repeat(
				var(--repeat),
				minmax(
					max(var(--minWidth), calc(100% / var(--max) - var(--gap))),
					var(--maxWidth)
				)
			);
		}
	}
`;
