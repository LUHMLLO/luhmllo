import { css } from 'lit';

export default css`
	:host::part(content) {
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

	:host([open])::part(content) {
		height: max-content;
		opacity: 1;
		padding: var(--scale-xs) var(--scale-sm);

		pointer-events: revert;
		user-select: revert;
	}

	:host::part(content),
	:host([emphasis='low'])::part(content) {
		background-color: var(--idle-bg);
		color: var(--idle-clr);
		outline-color: var(--idle-bord);
	}

	:host(:focus)::part(content),
	:host([emphasis='low']:focus)::part(content) {
		/* background-color: var(--focus-bg);
		color: var(--focus-clr); */
		outline-color: var(--focus-bord);
	}

	@media (hover: hover) {
		:host(:hover)::part(content),
		:host([emphasis='low']:hover)::part(content) {
			/* background-color: var(--hover-bg);
			color: var(--hover-clr); */
			outline-color: var(--hover-bord);
		}
	}

	:host(:active)::part(content),
	:host([emphasis='low']:active)::part(content) {
		/* background-color: var(--active-bg);
		color: var(--active-clr); */
		outline-color: var(--active-bord);
	}
`;
