import { css } from 'lit';

export default css`
	:host::part(toggle) {
		cursor: pointer;

		align-items: center;
		display: inline-flex;

		font-size: var(--scale-md);
		gap: var(--scale-5xs);
		padding: var(--scale-xs) var(--scale-sm);

		border-radius: var(--bordRadius);

		outline-color: transparent;
		outline-offset: var(--bordOffset);
		outline-style: var(--bordStyle);
		outline-width: var(--bordWidth);

		height: max-content;
		width: max-content;
		overflow: hidden;

		transition: color var(--animSettings), background-color var(--animSettings),
			outline-color var(--animSettings), rotate var(--animSettings);
	}

	:host::part(toggle) * {
		transition: none;
	}

	:host([open])::part(trail) {
		rotate: 90deg;
	}

	:host::part(toggle),
	:host([emphasis='low'])::part(toggle) {
		background-color: var(--idle-background, transparent);
		color: var(--idle-txt);
		outline-color: var(--idle-bord);
	}

	:host(:focus)::part(toggle),
	:host([emphasis='low']:focus)::part(toggle) {
		background-color: var(--focus-background);
		color: var(--focus-txt);
		outline-color: var(--clr-accent);
	}

	@media (hover: hover) {
		:host(:hover)::part(toggle),
		:host([emphasis='low']:hover)::part(toggle) {
			background-color: var(--hover-background);
			color: var(--hover-txt);
			outline-color: var(--hover-bord);
		}
	}

	:host(:active)::part(toggle),
	:host([emphasis='low']:active)::part(toggle) {
		background-color: var(--active-background);
		color: var(--active-txt);
		outline-color: var(--active-bord);
	}

	:host([emphasis='medium'])::part(toggle) {
		--idle-background: hsl(0, 0%, 93%);
		--idle-txt: hsl(0, 0%, 6%);
		--idle-bord: transparent;

		--hover-background: hsl(0, 0%, 96%);
		--hover-txt: hsl(0, 0%, 6%);
		--hover-bord: transparent;

		--active-background: hsl(0, 0%, 87%);
		--active-txt: hsl(0, 0%, 6%);
		--active-bord: transparent;

		--focus-background: hsl(0, 0%, 90%);
		--focus-txt: hsl(0, 0%, 6%);
		--focus-bord: var(--clr-accent);
	}

	:host([emphasis='high'])::part(toggle) {
		--idle-background: hsl(0, 0%, 15%);
		--idle-txt: hsl(0, 0%, 96%);
		--idle-bord: transparent;

		--hover-background: hsl(0, 0%, 21%);
		--hover-txt: hsl(0, 0%, 96%);
		--hover-bord: transparent;

		--active-background: hsl(0, 0%, 9%);
		--active-txt: hsl(0, 0%, 96%);
		--active-bord: transparent;

		--focus-background: hsl(0, 0%, 12%);
		--focus-txt: hsl(0, 0%, 96%);
		--focus-bord: var(--clr-accent);
	}

	:host::part(lead),
	:host::part(trail) {
		transition: transform var(--animSettings), rotate var(--animSettings);
	}

	:host::part(trail) {
		display: block;
		height: max-content;
		width: max-content;

		font-family: var(--iconFontFamily);
		font-size: var(--iconFontSize);
		font-style: normal;
		font-weight: normal;

		letter-spacing: normal;
		line-height: 1;
		text-transform: none;
		text-rendering: optimizeLegibility;
		user-select: none;

		white-space: nowrap;
		word-wrap: normal;
		direction: ltr;

		-webkit-font-feature-settings: 'liga';
		-moz-font-feature-settings: 'liga';
		font-feature-settings: 'liga';

		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		-moz-font-smoothing: grayscale;
	}

	:host::part(toggle)::part(lead)[fill],
	:host::part(toggle)::part(trail)[fill] {
		font-variation-settings: 'FILL' 1;
	}
`;
