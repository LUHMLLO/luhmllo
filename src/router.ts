import Home from './routes/home.ts';
import Proposal from './routes/proposal.ts';

export const routes = [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/proposal',
		component: Proposal,
	},
];
