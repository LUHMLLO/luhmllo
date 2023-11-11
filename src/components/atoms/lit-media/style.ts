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
	:host > audio {
		display: block;
		margin: 0;
		max-width: 100%;
		object-fit: cover;
		overflow: hidden;
	}

	:host > img {
		background-repeat: no-repeat;
		background-size: cover;
		display: block;
		font-style: italic;
		height: auto;
		margin: 0;
		max-width: 100%;
		min-height: 0;
		object-fit: cover;
		overflow: hidden;
		shape-margin: 1rem;
		width: 100%;
	}

	:host > video {
		display: block;
		height: auto;
		max-height: 100%;
		margin: 0;
		max-width: 100%;
		min-height: 0;
		object-fit: cover;
		overflow: hidden;
		width: 100%;
	}
`;
