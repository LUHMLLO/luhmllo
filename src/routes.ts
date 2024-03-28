import StartPage from './routes/page.ts';
import Elements from './routes/elements/page.ts';
import HTML from './routes/examples/html.ts';
import Proposal from './routes/examples/proposal.ts';

export default [
	{
		path: '/',
		component: StartPage,
	},
	{
		path: '/elements',
		component: Elements,
	},
	{
		path: '/examples/html',
		component: HTML,
	},
	{
		path: '/examples/proposal',
		component: Proposal,
	},
];
