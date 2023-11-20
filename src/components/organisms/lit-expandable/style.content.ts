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

		border-radius: var(--bordRadius);

		pointer-events: none;
		user-select: none;

		overflow: hidden;

		transition: var(--animToggle);
	}

	:host([variant='dropdown'])::part(content) {
		position: absolute;
		top: 100%;
		left: 0;
		right: 0;
		margin-top: var(--scale-5xs);
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
		background-color: var(--idle-bg, transparent);
		color: var(--idle-txt);
		outline-color: var(--idle-bord);
	}

	:host(:focus)::part(content),
	:host([emphasis='low']:focus)::part(content) {
		/* background-color: var(--focus-bg);
		color: var(--focus-txt); */
		outline-color: var(--clr-accent);
	}

	@media (hover: hover) {
		:host(:hover)::part(content),
		:host([emphasis='low']:hover)::part(content) {
			/* background-color: var(--hover-bg);
			color: var(--hover-txt); */
			outline-color: var(--hover-bord);
		}
	}

	:host(:active)::part(content),
	:host([emphasis='low']:active)::part(content) {
		/* background-color: var(--active-bg);
		color: var(--active-txt); */
		outline-color: var(--active-bord);
	}
`;
