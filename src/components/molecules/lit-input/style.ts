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
		flex-grow: 1;
		flex-shrink: 1;
		min-height: 1.481544rem;
		height: 100%;
		line-height: 1.5;
		inset: 0;
		overflow: hidden;
		place-items: center;
		position: relative;
		text-overflow: ellipsis;
		white-space: nowrap;
		width: 100%;
	}

	:host > div > span {
		border: none;
		outline: none;
		display: flex;
		min-height: 1.481544rem;
		height: 100%;
		inset: 0;
		line-height: 1.5;
		position: absolute;
		width: 100%;
		transition: opacity var(--animSettings);
	}

	:host > div > span:first-of-type {
		z-index: 1;
	}

	:host > div > span:last-of-type {
		pointer-events: none;
		user-select: none;
		z-index: 2;
		opacity: 0.8;
	}

	:host > div > span:first-of-type:not(:empty) ~ span {
		opacity: 0;
	}

	:host(:focus) {
		outline-color: var(--clr-accent);
	}
`;
