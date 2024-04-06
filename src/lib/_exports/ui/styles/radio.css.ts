import { css } from 'lit'

export default css`
	@layer web-components {
		:host(:is(ly-radio)) {
			/* base styles */
			cursor: pointer;
			display: flex;
			flex-direction: column;
			height: max-content;
		}
	}
`
