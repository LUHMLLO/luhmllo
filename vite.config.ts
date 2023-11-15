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
			formats: ['es'],
			name: 'atomic-lit',
			fileName: 'atomic-lit',
		},
		rollupOptions: {
			external: /^lit/
		},
	},
});
