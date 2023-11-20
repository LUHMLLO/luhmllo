import { css } from 'lit';

export default css`
	:host {
		background-color: var(--idle-background, transparent);
		border-radius: var(--bordRadius);
		display: flex;
		flex-direction: column;
		position: relative;
	}

	:host([emphasis='medium']) {
		--idle-background: hsl(0, 0%, 93%);
		--idle-txt: hsl(0, 0%, 6%);
		--idle-bord: transparent;

		--hover-background: hsl(0, 0%, 96%);
		--hover-txt: hsl(0, 0%, 6%);
		--hover-bord: transparent;

		--active-background: hsl(0, 0%, 87%);
		--active-txt: hsl(0, 0%, 6%);
		--active-bord: transparent;

		--focus-background: hsl(0, 0%, 90%);
		--focus-txt: hsl(0, 0%, 6%);
		--focus-bord: var(--clr-accent);
	}

	:host([emphasis='high']) {
		--idle-background: hsl(0, 0%, 15%);
		--idle-txt: hsl(0, 0%, 96%);
		--idle-bord: transparent;

		--hover-background: hsl(0, 0%, 21%);
		--hover-txt: hsl(0, 0%, 96%);
		--hover-bord: transparent;

		--active-background: hsl(0, 0%, 9%);
		--active-txt: hsl(0, 0%, 96%);
		--active-bord: transparent;

		--focus-background: hsl(0, 0%, 12%);
		--focus-txt: hsl(0, 0%, 96%);
		--focus-bord: var(--clr-accent);
	}
`;
