import Home from './routes/home.ts';
import HTML from './routes/html.ts';
import Proposal from './routes/proposal.ts';

export default [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/html',
		component: HTML,
	},
	{
		path: '/proposal',
		component: Proposal,
	},
];
