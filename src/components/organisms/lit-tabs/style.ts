import { css } from 'lit';

export default css`
	:host {
		align-items: center;
		display: flex;
		flex-direction: row;
		overflow-x: auto;
		max-width: 100%;
		white-space: nowrap;
		position: relative;
		isolation: isolate;
	}

	::slotted(*) {
		flex-shrink: 0 !important;
	}

	:host::part(lead),
	:host::part(trail) {
		color: var(--idle-txt) !important;
		margin-top: auto;
		margin-bottom: auto;
		top: 0;
		bottom: 0;
		position: sticky;
		vertical-align: middle;
		z-index: 2;
	}

	:host::part(lead) {
		left: 0;
	}

	:host::part(trail) {
		right: 0;
	}

	:host {
		background-color: var(--idle-background);
	}
`;
