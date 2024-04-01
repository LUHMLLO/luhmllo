import { defineConfig } from 'vite';
import { terserMinify } from './vite.terserMinify';

export default defineConfig({
	build: {
		copyPublicDir: false,
		cssCodeSplit: false,
		emptyOutDir: false,
		lib: {
			entry: './src/lib/_exports/elements/_all.ts',
			formats: ['es'],
			fileName: 'lilys',
		},
		outDir: './public/assets/js',
	},
	plugins: [terserMinify()],
});
