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
	}

	:host([checked]):after {
		border-radius: var(--bordRadius);
		content: '';

		inset: 0;

		outline-color: var(--focus-bord);
		outline-offset: -1px;
		outline-style: solid;
		outline-width: 1px;

		position: absolute;

		z-index: 1;
	}
`;
