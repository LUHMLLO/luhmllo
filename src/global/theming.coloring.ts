import { css } from 'lit';

export default css`
	:host {
		--clr-accent: hsl(11, 100%, 35%);
		--clr-background: hsl(0, 0%, 96%);
		--clr-txt: hsl(0, 0%, 3%);

		--clr-primary: hsl(11, 100%, 59%);
		--clr-secondary: hsl(0, 0%, 90%);
		--clr-tertiary: hsl(0, 0%, 93%);
	}

	@media (prefers-color-scheme: dark) {
		:host {
			--clr-accent: hsl(11, 100%, 59%);
			--clr-background: hsl(0, 0%, 3%);
			--clr-txt: hsl(0, 0%, 95%);

			--clr-primary: hsl(11, 100%, 35%);
			--clr-secondary: hsl(0, 0%, 6%);
			--clr-tertiary: hsl(0, 0%, 9%);
		}
	}

	:host {
		/* idle */
		--idle-background: var(--clr-background);
		--idle-txt: var(--clr-txt);
		--idle-bord: var(--clr-secondary);

		/* focused */
		--focus-background: var(--clr-background);
		--focus-txt: var(--clr-txt);
		--focus-bord: var(--clr-accent);

		/* hovered */
		--hover-background: var(--clr-secondary);
		--hover-txt: var(--clr-txt);
		--hover-bord: var(--clr-tertiary);

		/* active */
		--active-background: var(--clr-background);
		--active-txt: var(--clr-txt);
		--active-bord: var(--clr-secondary);

		/* focused */
		--disabled-background: hsl(0, 0%, 90%);
		--disabled-txt: hsl(0, 0%, 9%);
		--disabled-bord: hsl(0, 0%, 9%);
	}
`;
