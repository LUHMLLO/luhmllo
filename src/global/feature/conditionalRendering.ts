import { css } from 'lit';

export default css`
	[auto-render]:empty {
		display: none;
	}

	[auto-render] *:not(img):empty {
		display: none !important;
	}

	[auto-render] *:not(:empty):has(* > :not(img):empty):not(:has(:not(:empty))) {
		display: none !important;
	}
`;
