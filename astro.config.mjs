import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
	adapter: vercel(),
	build: {
		format: 'file',
		inlineStylesheets: 'never',
	},
	compressHTML: true,
	outDir: './dist/app',
	output: 'hybrid',
	prefetch: {
		prefetchAll: true,
	},
	scopedStyleStrategy: 'where',
});
