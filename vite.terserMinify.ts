// @ts-expect-error
import type { Plugin, OutputBundle } from 'vite';
import { minify } from 'terser';

export function terserMinify(): Plugin {
	return {
		name: 'terserMinify',
		async generateBundle(_config, bundle): Promise<OutputBundle> {
			for (const fileName in bundle) {
				if (bundle[fileName].type === 'chunk' && fileName.endsWith('.js')) {
					const minifyResult = await minify(bundle[fileName].code, {
						sourceMap: false,
					});

					if (minifyResult.code) {
						// Handle potential errors from terser
						bundle[fileName].code = minifyResult.code;
					} else {
						console.warn(`Failed to minify bundle: ${fileName}`);
					}
				}
			}

			return bundle;
		},
	};
}
