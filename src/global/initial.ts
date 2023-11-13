import { css } from 'lit';

export default css`
	* {
		box-sizing: border-box;
		margin: 0;
		max-width: 100%;
	}

	:root {
		--idle-bg: transparent;
		--idle-clr: hsl(0, 0%, 6%);
		--idle-bord: transparent;

		--hover-bg: transparent;
		--hover-clr: hsl(0, 0%, 6%);
		--hover-bord: hsl(0, 0%, 96%);

		--active-bg: transparent;
		--active-clr: hsl(0, 0%, 6%);
		--active-bord: hsl(0, 0%, 90%);

		--focus-bg: transparent;
		--focus-clr: hsl(0, 0%, 6%);
		--focus-bord: var(--clr-accent);
	}
`;
