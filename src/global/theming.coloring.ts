import { css } from 'lit';

export default [
	css`
		:host {
			--clr-accent: hsl(11, 100%, 35%);
			--clr-bg: hsl(0, 85%, 95%);
			--clr-txt: hsl(0, 0%, 2%);

			--clr-primary: hsl(11, 100%, 59%);
			--clr-secondary: hsl(60, 2%, 90%);
			--clr-tertiary: hsl(90, 0%, 96%);
		}

		@media (prefers-color-scheme: dark) {
			:host {
				--clr-accent: hsl(11, 100%, 59%);
				--clr-bg: hsl(0, 0%, 2%);
				--clr-txt: hsl(0, 85%, 95%);

				--clr-primary: hsl(11, 100%, 35%);
				--clr-secondary: hsl(60, 2%, 10%);
				--clr-tertiary: hsl(90, 0%, 6%);
			}
		}
	`,
	css`
		:host {
			// idle
			--idle-bg: transparent;
			--idle-txt: var(--clr-txt);
			--idle-bord: var(--clr-secondary);

			// focused
			--focus-bg: transparent;
			--focus-txt: var(--clr-txt);
			--focus-bord: var(--clr-accent);

			// hovered
			--hover-bg: var(--clr-secondary);
			--hover-txt: var(--clr-txt);
			--hover-bord: var(--clr-tertiary);

			// active
			--active-bg: var(--clr-primary);
			--active-txt: var(--clr-txt);
			--active-bord: var(--clr-secondary);

			// focused
			--disabled-bg: hsl(0, 0%, 90%);
			--disabled-txt: hsl(0, 0%, 9%);
			--disabled-bord: hsl(0, 0%, 9%);
		}
	`,
];
