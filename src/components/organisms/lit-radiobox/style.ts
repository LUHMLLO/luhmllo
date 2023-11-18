import { css } from 'lit';

export default css`
	:host {
		border-radius: var(--bordRadius);
		border: none;
		cursor: pointer;
		display: inline-block;
		height: max-content;
		isolation: isolate;
		overflow: hidden;
		outline: none;
		position: relative;
		user-select: none;
	}

	:host(:focus):after,
	:host([checked]):after {
		border-radius: var(--bordRadius);
		content: '';
		inset: 0;
		opacity: 0;
		overflow: hidden;
		outline-color: var(--clr-accent);
		outline-offset: var(--bordOffset);
		outline-style: var(--bordStyle);
		outline-width: var(--bordWidth);
		position: absolute;
		z-index: 1;
		transition: color var(--animSettings), opacity var(--animSettings),
			outline-color var(--animSettings);
	}

	:host(:focus):after {
		opacity: 0.3;
	}

	:host([checked]):after {
		opacity: 1;
	}
`;
