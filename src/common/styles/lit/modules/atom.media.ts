import { css } from 'lit';

export default css`
	:host {
		display: block;
		height: max-content;
		margin: 0;
		max-width: 100%;
		overflow: hidden;
		padding: 0;
		position: relative;
	}

	:host > * {
		display: block;
		margin: 0;
		max-width: 100%;
		object-fit: cover;
		overflow: hidden;
	}
`;
