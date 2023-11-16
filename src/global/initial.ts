import { css } from 'lit';

export default css`
	:host,
	:host * {
		box-sizing: border-box;
		margin: 0;
		max-width: 100%;
	}

	:host {
		//idle
		--idle-bg: transparent;
		--idle-clr: hsl(0, 0%, 4%);
		--idle-bord: hsl(0, 0%, 6%);

		//focused
		--focus-bg: transparent;
		--focus-clr: hsl(0, 0%, 4%);
		--focus-bord: hsl(0, 50%, 50%);

		//hovered
		--hover-bg: hsl(0, 0%, 96%);
		--hover-clr: hsl(0, 0%, 4%);
		--hover-bord: hsl(0, 0%, 9%);

		//active / pressed
		--active-bg: hsl(0, 0%, 93%);
		--active-clr: hsl(0, 0%, 4%);
		--active-bord: hsl(0, 0%, 3%);

		//focused
		--disabled-bg: hsl(0, 0%, 90%);
		--disabled-clr: hsl(0, 0%, 9%);
		--disabled-bord: hsl(0, 0%, 9%);
	}

	:host {
		/* scaling */
		--scale-5xs: 0.3996373225rem;
		--scale-4xs: 0.4555865477rem;
		--scale-3xs: 0.5193686644rem;
		--scale-2xs: 0.5920802774rem;
		--scale-xs: 0.6749715162rem;
		--scale-sm: 0.7694675285rem;
		--scale-md: 0.8771929825rem;
		--scale-nm: 1rem;
		--scale-lg: 1.14rem;
		--scale-xl: 1.2996rem;
		--scale-2xl: 1.481544rem;
		--scale-3xl: 1.68896016rem;
		--scale-4xl: 1.9254145824rem;
		--scale-5xl: 2.1949726239rem;
		/* theming */
		--bordRadius: var(--scale-5xs);
		--clr-accent: hsl(120, 88%, 50%);
		--clr-primary: hsl(0, 0%, 6%);
		--clr-secondary: hsl(0, 0%, 96%);
		--clr-tertiary: hsl(0, 0%, 90%);
		/* settings */
		--animSettings: var(--animDuration) var(--animTimingFunction);
		--animDuration: 360ms;
		--animTimingFunction: cubic-bezier(0.2, 0, 0, 1);
		--fontFamily: sans-serif;
		--iconFontFamily: 'Material Symbols Rounded';
	}
`;
