import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		minify: 'terser',
		outDir: 'dist/demo',
		target: ['es2022'],
		terserOptions: {
			safari10: true,
			ie8: true,
			compress: true,
			mangle: true,
			module: true,
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
