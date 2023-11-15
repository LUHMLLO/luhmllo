import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@': './src/',
			'@wc': './src/components/',
			'@global': './src/global/',
		},
	},
	build: {
		lib: {
			entry: './src/main.ts',
			formats: ['es', 'cjs', 'umd', 'iife'],
			name: 'brrrComponents',
			fileName: 'index',
		},
		rollupOptions: {
			external: /^lit/,
		},
	},
});
