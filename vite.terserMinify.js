import { minify } from 'terser';

export function terserMinify() {
	return {
		name: 'terserMinify',
		// @ts-ignore
		async generateBundle(_options, bundle) {
			for (let key in bundle) {
				if (bundle[key].type == 'chunk' && key.endsWith('.js')) {
					const minifyCode = await minify(bundle[key].code, {
						sourceMap: false,
					});
					bundle[key].code = minifyCode.code;
				}
			}
			return bundle;
		},
	};
}
