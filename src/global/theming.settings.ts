import { css } from 'lit';

export default css`
	:host {
		--animSettings: var(--animDuration) var(--animTimingFunction);
		--animDuration: 360ms;
		--animTimingFunction: cubic-bezier(0.2, 0, 0, 1);
		--bordRadius: var(--scale-5xs);
		--fontFamily: sans-serif;
		--iconFontFamily: 'Material Symbols Rounded';
	}
`;
