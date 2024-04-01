import { defineConfig } from 'astro/config';

import lit from '@astrojs/lit';

// https://astro.build/config
export default defineConfig({
	build: {
		format: 'file',
		inlineStylesheets: 'never',
	},
	compressHTML: true,
	integrations: [lit()],
	outDir: './dist/app',
	scopedStyleStrategy: 'where',
});
