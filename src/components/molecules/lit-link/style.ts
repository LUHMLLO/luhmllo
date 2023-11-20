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
			background-color: var(--idle-bg);
			color: var(--idle-txt);
			outline-color: var(--idle-bord);
		}

		@media (hover: hover) {
			:host(:hover) {
				--hover-txt: var(--clr-accent);

				background-color: var(--hover-bg);
				color: var(--hover-txt);
				outline-color: var(--hover-bord);
			}
		}

		:host(:focus) {
			background-color: var(--focus-bg);
			color: var(--focus-txt);
			outline-color: var(--focus-bord);
		}

		:host(:active) {
			--active-txt: var(--clr-primary);

			background-color: var(--active-bg);
			color: var(--active-txt);
			outline-color: var(--active-bord);
		}

		:host(:visited) {
			--visited-txt: var(--clr-tertiary);

			background-color: var(--visited-bg);
			color: var(--visited-txt);
			outline-color: var(--visited-bord);
		}
	`,
];
