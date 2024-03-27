import Home from './routes/home.ts';
import Proposal from './routes/proposal.ts';

export default [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/proposal',
		component: Proposal,
	},
];
