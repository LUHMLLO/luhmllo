import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		copyPublicDir: false,
		cssCodeSplit: true,
		emptyOutDir: true,
		lib: {
			entry: './src/lib/index.ts',
			formats: ['es', 'cjs', 'umd', 'iife'],
			name: 'lm_components',
			fileName: 'index',
		},
		minify: 'terser',
		outDir: 'dist/lib',
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
