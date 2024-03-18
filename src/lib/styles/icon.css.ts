import { css } from 'lit';

export default css`
	icon {
		aspect-ratio: 1;
		cursor: pointer;
		flex-shrink: 0;
		font-family: 'Material Symbols Outlined', 'Material Symbols Rounded',
			'Material Symbols Sharp', sans-serif;
		-webkit-font-feature-settings: 'liga';
		font-feature-settings: 'liga';
		font-weight: normal;
		font-size: var(--fontSize, 1rem);
		font-style: normal;
		font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 400, 'opsz' 48;
		height: max-content;
		line-height: 1;
		letter-spacing: normal;
		overflow: clip;
		text-transform: none;
		user-select: none;
		width: max-content;

		&[fill] {
			font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 400, 'opsz' 48;
		}
	}
`;
