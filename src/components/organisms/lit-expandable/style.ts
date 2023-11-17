import { css } from 'lit';

export default css`
	:host {
		background-color: var(--idle-bg);
		border-radius: var(--bordRadius);
		display: flex;
		flex-direction: column;
		position: relative;
	}

	:host([emphasis='medium']) {
		--idle-bg: hsl(0, 0%, 93%);
		--idle-clr: hsl(0, 0%, 6%);
		--idle-bord: transparent;

		--hover-bg: hsl(0, 0%, 96%);
		--hover-clr: hsl(0, 0%, 6%);
		--hover-bord: transparent;

		--active-bg: hsl(0, 0%, 87%);
		--active-clr: hsl(0, 0%, 6%);
		--active-bord: transparent;

		--focus-bg: hsl(0, 0%, 90%);
		--focus-clr: hsl(0, 0%, 6%);
		--focus-bord: var(--clr-accent);
	}

	:host([emphasis='high']) {
		--idle-bg: hsl(0, 0%, 15%);
		--idle-clr: hsl(0, 0%, 96%);
		--idle-bord: transparent;

		--hover-bg: hsl(0, 0%, 21%);
		--hover-clr: hsl(0, 0%, 96%);
		--hover-bord: transparent;

		--active-bg: hsl(0, 0%, 9%);
		--active-clr: hsl(0, 0%, 96%);
		--active-bord: transparent;

		--focus-bg: hsl(0, 0%, 12%);
		--focus-clr: hsl(0, 0%, 96%);
		--focus-bord: var(--clr-accent);
	}
`;
