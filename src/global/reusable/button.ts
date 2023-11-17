import { css } from 'lit';

export default css`
	:host {
		cursor: pointer;

		align-items: center;
		display: inline-flex;

		font-size: var(--scale-md);
		gap: var(--scale-5xs);
		padding: var(--scale-xs) var(--scale-sm);

		border-radius: var(--bordRadius);

		outline-color: transparent;
		outline-offset: var(--bordOffset);
		outline-style: var(--bordStyle);
		outline-width: var(--bordWidth);

		height: max-content;
		width: max-content;
		overflow: hidden;

		transition: color var(--animSettings), background-color var(--animSettings),
			outline-color var(--animSettings);
	}

	:host * {
		transition: none;
	}

	:host(:empty) {
		padding: var(--scale-xs);
	}

	:host,
	:host([emphasis='low']) {
		background-color: var(--idle-bg, transparent);
		color: var(--idle-clr);
		outline-color: var(--idle-bord, transparent);
	}

	:host(:focus),
	:host([emphasis='low']:focus) {
		background-color: var(--focus-bg);
		color: var(--focus-clr);
		outline-color: var(--focus-bord);
	}

	@media (hover: hover) {
		:host(:hover),
		:host([emphasis='low']:hover) {
			background-color: var(--hover-bg);
			color: var(--hover-clr);
			outline-color: var(--hover-bord);
		}
	}

	:host(:active),
	:host([emphasis='low']:active) {
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
