import { defineConfig } from 'vite'
import { terserMinify } from './vite.terserMinify'

export default defineConfig( {
	build: {
		copyPublicDir: false,
		cssCodeSplit: true,
		emptyOutDir: true,
		lib: {
			entry: './src/lib/_exports/ui/_all.ts',
			formats: [ 'es', 'cjs', 'umd', 'iife' ],
			name: 'lilys',
			fileName: 'index',
		},
		outDir: './dist/ui',
	},
	plugins: [ terserMinify() ]
} )
