import { defineConfig } from 'vite';
import { terserMinify } from './vite.terserMinify';
import { browserslistToTargets } from 'lightningcss';
import browserslist from 'browserslist';

export default defineConfig({
	build: {
		cssCodeSplit: true,
		cssMinify: 'lightningcss',
		emptyOutDir: true,
		minify: 'terser',
		outDir: 'dist/app',
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
