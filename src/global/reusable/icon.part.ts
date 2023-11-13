import { css } from 'lit';

export default css`
	:host::part(lead),
	:host::part(trail) {
		display: block;
		height: max-content;
		width: max-content;

		font-family: var(--iconFontFamily);
		font-size: 1.481544rem;
		font-style: normal;
		font-weight: normal;

		letter-spacing: normal;
		line-height: 1;
		text-transform: none;
		text-rendering: optimizeLegibility;
		user-select: none;

		white-space: nowrap;
		word-wrap: normal;
		direction: ltr;

		-webkit-font-feature-settings: 'liga';
		-moz-font-feature-settings: 'liga';
		font-feature-settings: 'liga';

		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		-moz-font-smoothing: grayscale;
	}
`;
