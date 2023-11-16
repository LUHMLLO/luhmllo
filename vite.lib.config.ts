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
		minify: 'terser',
		terserOptions: {
			safari10: true,
			ie8: true,
			compress: true,
			mangle: true,
		},
		target: ['es2022'],
		outDir: 'dist/lib',
		lib: {
			entry: './src/main.ts',
			formats: ['es', 'cjs', 'umd', 'iife'],
			name: 'brrrComponents',
			fileName: 'index',
		},
	},
});
