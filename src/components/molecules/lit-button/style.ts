import { css } from 'lit';

export default css`
	:host([lead_fill])::part(lead),
	:host([trail_fill])::part(trail) {
		font-variation-settings: 'FILL' 1;
	}
`;
