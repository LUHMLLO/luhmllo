import { css } from 'lit';

export default css`
	:host([place='top-left']) {
		place-items: start start;
		place-content: start start;
	}

	:host([place='top']) {
		place-items: start center;
		place-content: start center;
	}

	:host([place='top-right']) {
		place-items: start end;
		place-content: start end;
	}

	:host([place='center-left']) {
		place-items: center start;
		place-content: center start;
	}

	:host([place='center']) {
		place-items: center center;
		place-content: center center;
	}

	:host([place='center-right']) {
		place-items: center end;
		place-content: center end;
	}

	:host([place='bottom-left']) {
		place-items: end start;
		place-content: end start;
	}

	:host([place='bottom']) {
		place-items: end center;
		place-content: end center;
	}

	:host([place='bottom-right']) {
		place-items: end end;
		place-content: end end;
	}

	:host([place='stretch']) {
		place-items: stretch;
		place-content: stretch;
	}
`;
