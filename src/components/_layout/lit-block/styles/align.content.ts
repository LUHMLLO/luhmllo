import { css } from 'lit';

export default css`
	:host([content='top-left']) {
		place-content: start start;
	}

	:host([content='top']) {
		place-content: start center;
	}

	:host([content='top-right']) {
		place-content: start end;
	}

	:host([content='center-left']) {
		place-content: center start;
	}

	:host([content='center']) {
		place-content: center center;
	}

	:host([content='center-right']) {
		place-content: center end;
	}

	:host([content='bottom-left']) {
		place-content: end start;
	}

	:host([content='bottom']) {
		place-content: end center;
	}

	:host([content='bottom-right']) {
		place-content: end end;
	}

	:host([content='stretch']) {
		place-content: stretch;
	}
`;
