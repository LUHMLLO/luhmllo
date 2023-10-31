import '/node_modules/material-symbols/rounded.css';
import { css } from 'lit';

export default css`
	@font-face {
		font-display: block;
		font-family: 'Material Symbols Rounded';
		font-style: normal;
		font-weight: 100 200 300 400 500 600 700 800 900;
		src: url('/node_modules/material-symbols/material-symbols-rounded.woff2')
			format('woff2');
	}

	:host {
		display: block;
		height: max-content;
		width: max-content;

		font-family: 'Material Symbols Rounded';
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

	:host([fill]) {
		font-variation-settings: 'FILL' 1;
	}
`;
