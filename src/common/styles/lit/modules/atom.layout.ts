import { css } from 'lit';

export default css`
	:host {
		max-width: 100%;
		width: 100%;
	}

	:host([variant='column']) {
		display: flex;
		flex-direction: column;
	}

	:host([variant='column-reverse']) {
		display: flex;
		flex-direction: column-reverse;
	}

	:host([variant='row']) {
		display: flex;
		flex-direction: row;
	}

	:host([variant='row-reverse']) {
		display: flex;
		flex-direction: row-reverse;
	}

	:host([variant='grid']) {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
	}

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
`;
