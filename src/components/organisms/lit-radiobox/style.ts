import { css } from 'lit';

export default css`
	:host {
		border-radius: var(--bordRadius);
		cursor: pointer;
		display: inline-block;
		height: max-content;
		isolation: isolate;
		overflow: hidden;
		position: relative;
		user-select: none;
		border: none;
		outline: none;
	}

	:host([checked]):after {
		content: '';
		inset: 0;
		position: absolute;
		z-index: 1;

		border-radius: inherit;

		outline-color: var(--clr-accent);
		outline-offset: var(--bordOffset);
		outline-style: var(--bordStyle);
		outline-width: var(--bordWidth);
	}
`;
