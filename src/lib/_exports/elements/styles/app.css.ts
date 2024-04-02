import { css } from 'lit';

export default css`
	@layer web-components {
		:host {
			/* local vars */
			--bg: var(--clr-background);
			--clr: var(--clr-text);

			/* theming */
			background-color: var(--bg);
			color: var(--clr);

			/* base styles */
			display: flex;
			flex-direction: row;
			height: 100dvh;
			inset: 0;
			isolation: isolate;
			margin: auto;
			overflow: clip;
			place-content: center;
			position: fixed;
			width: 100dvw;
		}
	}
`;
