import { css } from 'lit';

export default css`
	:host {
		cursor: pointer;
	}

	:host([checked]) {
		color: var(--clr-accent);
		font-variation-settings: 'FILL' 1;
	}
`;
