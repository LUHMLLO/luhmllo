import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		copyPublicDir: false,
		emptyOutDir: true,
		lib: {
			entry: './src/lib/css/_index.ts',
			formats: ['es', 'cjs', 'umd', 'iife'],
			name: 'lm',
			fileName: 'index',
		},
		outDir: 'dist/lib/css',
		sourcemap: false,
		target: 'esnext',
	},
	resolve: {
		alias: {
			$lib: './src/lib/',
		},
	},
});
