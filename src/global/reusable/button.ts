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

		transition: var(--animColors);
	}

	:host * {
		transition: none;
	}

	:host(:empty) {
		padding: var(--scale-xs);
	}

	:host {
		background-color: var(--idle-bg);
		color: var(--idle-txt);
		outline-color: var(--idle-bord);
	}

	:host(:focus) {
		background-color: var(--focus-bg);
		color: var(--focus-txt);
		outline-color: var(--clr-accent);
	}

	@media (hover: hover) {
		:host(:hover) {
			background-color: var(--hover-bg);
			color: var(--hover-txt);
			outline-color: var(--hover-bord);
		}
	}

	:host(:active) {
		background-color: var(--active-bg);
		color: var(--active-txt);
		outline-color: var(--active-bord);
	}
`;
