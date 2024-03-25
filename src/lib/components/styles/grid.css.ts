import { css } from 'lit';

export default css`
	:host {
		--gap: var(--scale-sm);
		--minWidth: clamp(6rem, 16vmin, 24rem);
		--maxWidth: 1fr;
		--repeat: auto-fill;
		display: grid;
		gap: var(--gap);
		grid-template-columns: var(--maxWidth);

		&[max='2'] {
			--max: 2;
			grid-template-columns: repeat(
				var(--repeat),
				minmax(
					max(var(--minWidth), calc(100% / var(--max) - var(--gap))),
					var(--maxWidth)
				)
			);
		}

		&[max='3'] {
			--max: 3;
			grid-template-columns: repeat(
				var(--repeat),
				minmax(
					max(var(--minWidth), calc(100% / var(--max) - var(--gap))),
					var(--maxWidth)
				)
			);
		}

		&[max='4'] {
			--max: 4;
			grid-template-columns: repeat(
				var(--repeat),
				minmax(
					max(var(--minWidth), calc(100% / var(--max) - var(--gap))),
					var(--maxWidth)
				)
			);
		}

		&[demo] {
			grid-auto-rows: 1fr;

			> lm-col {
				outline: dashed 0.125rem var(--clr-primary);
				outline-offset: -0.125rem;
				padding: var(--scale-sm);
				place-items: center center;
				place-content: center center;
			}
		}
	}
`;
