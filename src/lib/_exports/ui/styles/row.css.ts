import { css } from 'lit'

export default css`
	@layer web-components {
		:host(:is(ly-row)) {
			/* base styles */
			display: flex;
			flex-direction: row;
			height: max-content;
		}
	}
`
