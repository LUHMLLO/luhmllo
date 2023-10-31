import { css } from 'lit';

export default css`
	:host {
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}

	:host([rounded]) {
		border-radius: var(--bordRadius);
	}

	:host::part(toggle) {
		flex-grow: 1;
		width: 100%;
	}

	:host([open]) ::part(trail) {
		transform: rotate(90deg);
	}

	:host > content {
		display: flex;
		flex-direction: column;
		gap: var(--scale-5xs);

		height: 0;
		min-height: 0;
		opacity: 0;
		padding: 0;

		pointer-events: none;
		user-select: none;

		overflow: hidden;

		transition: opacity var(--animSettings), padding var(--animSettings);
	}

	:host([open]) > content {
		height: max-content;
		opacity: 1;
		padding: var(--scale-xs) var(--scale-sm);

		pointer-events: revert;
		user-select: revert;
	}

	:host,
	:host([emphasis='low']) > content > p {
		background-color: var(--idle-bg);
		color: var(--idle-clr);
		outline-color: var(--idle-bord);
	}

	:host(:focus),
	:host([emphasis='low']:focus) > content > p {
		background-color: var(--focus-bg);
		color: var(--focus-clr);
		outline-color: var(--focus-bord);
	}

	@media (hover: hover) {
		:host(:hover),
		:host([emphasis='low']:hover) > content > p {
			background-color: var(--hover-bg);
			color: var(--hover-clr);
			outline-color: var(--hover-bord);
		}
	}

	:host(:active),
	:host([emphasis='low']:active) > content > p {
		background-color: var(--active-bg);
		color: var(--active-clr);
		outline-color: var(--active-bord);
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
