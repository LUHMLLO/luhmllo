import { css } from 'lit';

export default css`
	@layer web-components {
		:host {
			display: flex;
			flex-direction: column;
			gap: var(--scale-sm);
		}
	}
`;
