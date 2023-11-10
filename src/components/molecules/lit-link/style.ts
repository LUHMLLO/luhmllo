import { css } from 'lit';

export default css`
	:host {
		cursor: pointer;
		place-items: center;
		display: flex;
		gap: var(--scale-5xs);
		height: max-content;
		width: max-content;

		transition: color var(--animSettings), background-color var(--animSettings),
			outline-color var(--animSettings);
	}

	:host(:hover) {
		color: var(--clr-accent);
	}
`;
