import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		copyPublicDir: false,
		lib: {
			entry: './src/main.ts',
			formats: ['es', 'cjs', 'umd', 'iife'],
			name: 'brrrComponents',
			fileName: 'index',
		},
		minify: 'terser',
		outDir: 'dist/lib',
		target: ['es2022'],
		terserOptions: {
			safari10: true,
			ie8: true,
			compress: true,
			mangle: true,
		},
	},
	resolve: {
		alias: {
			'@': './src/',
			'@wc': './src/components/',
			'@global': './src/global/',
		},
	},
});
