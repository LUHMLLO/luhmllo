import { css } from 'lit';

export default css`
	:host {
		display: flex;
		gap: var(--scale-5xs);
		height: auto;
		isolation: isolate;
		overflow: hidden;
		outline-color: #333;
		outline-offset: -0.0625rem;
		outline-style: solid;
		outline-width: 0.0625rem;
		padding: var(--scale-xs) var(--scale-sm);
		place-items: center;
		position: relative;
		width: 100%;

		transition: color var(--animSettings), background-color var(--animSettings),
			outline-color var(--animSettings);
	}

	:host > div {
		display: flex;
		border: none;
		flex-grow: 1;
		flex-shrink: 1;
		inset: 0;
		outline: none;
		overflow: hidden;
		place-items: center;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	:host(:focus) {
		outline-color: var(--clr-accent);
	}
`;
