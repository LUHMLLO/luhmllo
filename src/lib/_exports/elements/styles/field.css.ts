import { css } from 'lit';

export default css`
	@layer web-components {
		:host(:is(ly-field)) {
			/* base styles */
			display: flex;
			flex-direction: column;
		}
	}
`;
