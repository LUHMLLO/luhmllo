import { defineConfig } from 'vite';
import { terserMinify } from './vite.terserMinify';

export default defineConfig({
	build: {
		copyPublicDir: true,
		cssCodeSplit: true,
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
	css: {
		postcss: {}
	},
	plugins: [terserMinify()],
});
