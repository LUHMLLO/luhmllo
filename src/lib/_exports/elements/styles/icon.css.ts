import { css } from 'lit';

export default css`
	@layer web-components {
		:host(:is(ly-icon)) {
			/* base styles */
			-webkit-user-select: none;
			aspect-ratio: 1;
			flex-grow: 0;
			flex-shrink: 0;
			font-family: 'Material Symbols Outlined', 'Material Symbols Rounded',
				'Material Symbols Sharp', sans-serif;
			-webkit-font-feature-settings: 'liga';
			font-feature-settings: 'liga';
			font-weight: normal;
			font-size: var(--sttng-iconScale);
			font-style: normal;
			font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 400, 'opsz' 48;
			height: max-content;
			letter-spacing: normal;
			overflow: clip;
			place-content: center;
			text-align: center;
			text-transform: none;
			user-select: none;
			width: max-content;
		}

		:host(:is(ly-icon[solid])) {
			font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 400, 'opsz' 48;
		}
	}
`;
