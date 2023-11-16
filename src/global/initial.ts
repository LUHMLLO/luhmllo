import { css } from 'lit';

import Coloring from './theming.coloring';
import Scaling from './theming.scaling';
import Settings from './theming.settings';

export default [
	css`
		:host,
		:host * {
			box-sizing: border-box;
			margin: 0;
			max-width: 100%;
		}
	`,
	Coloring,
	Scaling,
	Settings,
];
