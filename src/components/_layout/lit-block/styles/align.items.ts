import { css } from 'lit';

export default css`
	:host([items='top-left']) {
		place-items: start start;
	}

	:host([items='top']) {
		place-items: start center;
	}

	:host([items='top-right']) {
		place-items: start end;
	}

	:host([items='center-left']) {
		place-items: center start;
	}

	:host([items='center']) {
		place-items: center center;
	}

	:host([items='center-right']) {
		place-items: center end;
	}

	:host([items='bottom-left']) {
		place-items: end start;
	}

	:host([items='bottom']) {
		place-items: end center;
	}

	:host([items='bottom-right']) {
		place-items: end end;
	}

	:host([items='stretch']) {
		place-items: stretch;
	}
`;
