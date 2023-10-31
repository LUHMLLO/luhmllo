import { css } from 'lit';

export default css`
	:host {
		cursor: pointer;
		display: inline-block;
		height: max-content;

		isolation: isolate;
		overflow: hidden;
		position: relative;
		user-select: none;
	}

	:host([checked]):after {
		content: '';
		inset: 0;
		position: absolute;
		z-index: -1;

		outline: red 1px solid;
		outline-offset: -1px;
	}
`;
