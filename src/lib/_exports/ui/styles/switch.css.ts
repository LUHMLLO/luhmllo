import { css } from 'lit'

export default css`
	@layer web-components {
		:host(:is(ly-switch)) {
			/* base styles */
			cursor: pointer;
			display: flex;
			height: max-content;
		}
	}
`
