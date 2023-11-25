import { css } from 'lit';

export default css`
	:host {
		align-items: center;
		border-radius: var(--bordRadius);
		display: flex;
		flex-direction: row;
		isolation: isolate;
		max-width: 100%;
		overflow-x: auto;
		position: relative;
		white-space: nowrap;
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
