import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		emptyOutDir: true,
		minify: 'terser',
		outDir: 'dist/app',
		sourcemap: false,
		target: 'ESNEXT',
		terserOptions: {
			safari10: true,
			ie8: true,
			compress: true,
			mangle: true,
		},
	},
	resolve: {
		alias: {
			$lib: './src/lib/',
		},
	},
});
