import { css } from 'lit';

export default css`
	:host {
		--animSettings: var(--animDuration) var(--animTimingFunction);
		--animDuration: 360ms;
		--animTimingFunction: cubic-bezier(0.2, 0, 0, 1);

		--fontFamily: sans-serif;
		--iconFontFamily: 'Material Symbols Rounded';

		--bordOffset: -0.125rem;
		--bordStyle: solid;
		--bordRadius: var(--scale-5xs);
		--bordWidth: 0.125rem;
	}
`;
