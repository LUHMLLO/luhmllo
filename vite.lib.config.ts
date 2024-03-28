import { defineConfig } from 'vite';
import { terserMinify } from './vite.terserMinify';

export default defineConfig({
	build: {
		copyPublicDir: false,
		cssCodeSplit: true,
		emptyOutDir: true,
		lib: {
			entry: './src/lib/elements/_export.ts',
			formats: ['es', 'cjs', 'umd', 'iife'],
			name: 'lilys_elements',
			fileName: 'index',
		},
		minify: 'terser',
		outDir: 'dist/elements',
		sourcemap: false,
		target: 'es2015',
		terserOptions: {
			safari10: true,
			ie8: true,
			compress: true,
			mangle: true,
		},
	},
	plugins: [terserMinify()],
});
