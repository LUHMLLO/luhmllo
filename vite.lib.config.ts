import { defineConfig } from 'vite';
import { terserMinify } from './vite.terserMinify';
import { browserslistToTargets } from 'lightningcss';
import browserslist from 'browserslist';

export default defineConfig({
	build: {
		copyPublicDir: false,
		cssCodeSplit: true,
		cssMinify: 'lightningcss',
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
		target: 'es2015',
		terserOptions: {
			safari10: true,
			ie8: true,
			compress: true,
			mangle: true,
		},
	},
	css: {
		transformer: 'lightningcss',
		lightningcss: {
			targets: browserslistToTargets(browserslist('>= 0.25%')),
		},
	},
	plugins: [terserMinify()],
	resolve: {
		alias: {
			$lib: './src/lib/',
		},
	},
});
