import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		copyPublicDir: false,
		cssCodeSplit: false,
		emptyOutDir: true,
		lib: {
			entry: './src/export.css.ts',
			name: 'main',
			fileName: 'main',
		},
		outDir: 'dist/css',
		sourcemap: false,
		target: 'ESNEXT',
	},
});
