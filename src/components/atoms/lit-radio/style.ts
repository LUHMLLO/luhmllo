import { css } from 'lit';

export default css`
	:host {
		cursor: pointer;
	}

	:host([checked]) {
		font-variation-settings: 'FILL' 1;
	}
`;
