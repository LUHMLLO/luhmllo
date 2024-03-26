import './lib/export.components.ts';
import './lib/export.styles.ts';

import { render } from 'lit';
import { routes } from './router.ts';

const app = document.body;

if (app) {
	render(
		routes.find((route) => route.path.includes(document.location.pathname))
			?.component,
		app
	);
}
