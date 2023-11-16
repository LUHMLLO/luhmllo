import { css } from 'lit';

export default css`
	:host {
		//idle
		--idle-bg: transparent;
		--idle-clr: hsl(0, 0%, 4%);
		--idle-bord: hsl(0, 0%, 6%);

		//focused
		--focus-bg: transparent;
		--focus-clr: hsl(0, 0%, 4%);
		--focus-bord: hsl(0, 50%, 50%);

		//hovered
		--hover-bg: hsl(0, 0%, 96%);
		--hover-clr: hsl(0, 0%, 4%);
		--hover-bord: hsl(0, 0%, 9%);

		//active
		--active-bg: hsl(0, 0%, 93%);
		--active-clr: hsl(0, 0%, 4%);
		--active-bord: hsl(0, 0%, 3%);

		//focused
		--disabled-bg: hsl(0, 0%, 90%);
		--disabled-clr: hsl(0, 0%, 9%);
		--disabled-bord: hsl(0, 0%, 9%);
	}
`;
