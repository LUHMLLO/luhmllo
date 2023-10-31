import { css } from 'lit';

export default css`
	:host {
		box-sizing: border-box;
		cursor: pointer;
		display: inline-block;

		height: max-content;

		isolation: isolate;
		overflow: hidden;
		position: relative;
	}

	:host([checked]):after {
		content: '';

		outline: red 1px solid;
		outline-offset: -1px;

		position: absolute;
		inset: 0;

		width: 100%;
		height: 100%;
	}
`;
