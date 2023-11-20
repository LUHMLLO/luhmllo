import { css } from 'lit';

export default [
	css`
		:host {
			cursor: pointer;
			place-items: center;
			display: flex;
			gap: var(--scale-5xs);
			height: max-content;
			width: max-content;

			transition: color var(--animSettings),
				background-color var(--animSettings), outline-color var(--animSettings);
		}
	`,
	css`
		:host {
			--idle-background: transparent;

			background-color: var(--idle-background);
			color: var(--idle-txt);
			outline-color: var(--idle-bord);
		}

		@media (hover: hover) {
			:host(:hover) {
				--hover-background: transparent;
				--hover-txt: var(--clr-accent);

				background-color: var(--hover-background);
				color: var(--hover-txt);
				outline-color: var(--hover-bord);
			}
		}

		:host(:focus) {
			--focus-background: transparent;

			background-color: var(--focus-background);
			color: var(--focus-txt);
			outline-color: var(--focus-bord);
		}

		:host(:active) {
			--active-background: transparent;
			--active-txt: var(--clr-primary);

			background-color: var(--active-background);
			color: var(--active-txt);
			outline-color: var(--active-bord);
		}

		:host(:visited) {
			--visited-background: transparent;
			--visited-txt: var(--clr-tertiary);

			background-color: var(--visited-background);
			color: var(--visited-txt);
			outline-color: var(--visited-bord);
		}
	`,
];
