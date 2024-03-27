import { css } from 'lit';

export default css`
	:host {
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

	:host {
		background-color: var(--clr-background);
		color: var(--clr-text);
	}
`;
