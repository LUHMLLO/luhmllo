import { css } from 'lit';

export default [
	css`
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
		}

		:host * {
			transition: none;
		}

		:host(:empty) {
			padding: var(--scale-xs);
		}
	`,
	css`
		:host {
			--idle-background: transparent;
			--idle-bord: transparent;

			background-color: var(--idle-background);
			color: var(--idle-txt);
			outline-color: var(--idle-bord);
		}

		:host(:focus) {
			--focus-background: transparent;

			background-color: var(--focus-background);
			color: var(--focus-txt);
			outline-color: var(--focus-bord);
		}

		@media (hover: hover) {
			:host(:hover) {
				--hover-background: transparent;
				--hover-bord: var(--clr-tertiary);

				background-color: var(--hover-background);
				color: var(--hover-txt);
				outline-color: var(--hover-bord);
			}
		}

		:host(:active) {
			--active-background: var(--clr-background);
			--active-bord: var(--clr-secondary);

			background-color: var(--active-background);
			color: var(--active-txt);
			outline-color: var(--active-bord);
		}
	`,
];
