import { defineConfig } from 'vite';
import { terserMinify } from './vite.terserMinify';

export default defineConfig({
	build: {
		copyPublicDir: false,
		cssCodeSplit: true,
		emptyOutDir: true,
		lib: {
			entry: './src/lib/components/_export.ts',
			formats: ['es', 'cjs', 'umd', 'iife'],
			name: 'WComponents',
			fileName: 'index',
		},
		minify: 'terser',
		outDir: 'dist/components',
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
