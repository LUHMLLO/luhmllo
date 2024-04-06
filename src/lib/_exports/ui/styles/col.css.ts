import { css } from 'lit'

export default css`
	@layer web-components {
		:host(:is(ly-col)) {
			/* base styles */
			display: flex;
			flex-direction: column;
			height: max-content;
		}
	}
`
