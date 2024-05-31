<script>
	import { onMount } from 'svelte';

	/** @type {HTMLDialogElement}*/
	let notification = HTMLDialogElement.prototype;
	/** @type {string}*/
	let hex = '';
	/** @type {number | undefined}*/
	let timeOut = undefined;

	onMount(() => {
		/** @type {HTMLDialogElement}*/
		notification = document.querySelector('#notification');
	});

	/**
	 * Converts an sRGB color value to hexadecimal format.
	 * @param {string} color - The sRGB color value.
	 * @returns {string} The hexadecimal color value.
	 */
	function srgbToHex(color) {
		color = color.replace('color(srgb ', '').replace(')', '');
		const values = color.split(' ');
		const hexValues = values.map((value) => {
			const hex = Math.round(parseFloat(value) * 255).toString(16);
			return hex.length === 1 ? '0' + hex : hex;
		});
		return '#' + hexValues.join('');
	}

	/**
	 * Converts an RGB color value to hexadecimal format.
	 * @param {string} rgb - The RGB color value.
	 * @returns {string} The hexadecimal color value.
	 */
	function rgbToHex(rgb) {
		const match = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
		if (!match) {
			return 'invalid color value';
		}
		const r = parseInt(match[1], 10).toString(16).padStart(2, '0');
		const g = parseInt(match[2], 10).toString(16).padStart(2, '0');
		const b = parseInt(match[3], 10).toString(16).padStart(2, '0');
		return '#' + r + g + b;
	}

	/**
	 * Copies the background color of an element to the clipboard in hexadecimal format.
	 * @param {MouseEvent} e - The click event.
	 */
	function copyToClipboard(e) {
		if (hex) {
			clearTimeout(timeOut);
		}

		/** @type {HTMLElement | EventTarget} ct */
		const target = e.currentTarget;

		if (!(target instanceof HTMLElement)) {
			return console.warn('cannot copy color at the moment');
		}

		const computedColor = getComputedStyle(target).backgroundColor;
		if (computedColor.startsWith('rgb')) {
			hex = rgbToHex(computedColor);
		} else {
			hex = srgbToHex(computedColor);
		}

		navigator.clipboard.writeText(hex);

		notification.querySelector('var').innerText = hex;

		notification.show();

		timeOut = setTimeout(() => {
			notification.close();
			hex = '';
		}, 3500);
	}
</script>

<ly-app tmpl="col">
	{#each [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as shade}
		<button
			class="swatch clr-{shade} w-100 grow shrink"
			style="border-radius: 0; outline: none;"
			on:click="{copyToClipboard}"
		></button>
	{/each}
</ly-app>

<ly-layer stacked="over">
	<dialog id="notification">
		<h6>copied to clipboard</h6>
		<var>{hex}</var>
	</dialog>
</ly-layer>

<style lang="css">
	:root {
		--50: color-mix(
			in var(--prefers-colorSpace, srgb),
			var(--100),
			hsla(0, 0%, 100%, 1) 14%
		);
		--100: color-mix(
			in var(--prefers-colorSpace, srgb),
			var(--200),
			hsla(0, 0%, 100%, 1) 12%
		);
		--200: color-mix(
			in var(--prefers-colorSpace, srgb),
			var(--300),
			hsla(0, 0%, 100%, 1) 10%
		);
		--300: color-mix(
			in var(--prefers-colorSpace, srgb),
			var(--400),
			hsla(0, 0%, 100%, 1) 8%
		);
		--400: color-mix(
			in var(--prefers-colorSpace, srgb),
			var(--500),
			hsla(0, 0%, 100%, 1) 6%
		);

		--500: color-mix(
			in var(--prefers-colorSpace, srgb),
			var(--baseColor),
			var(--baseColor)
		);

		--600: color-mix(
			in var(--prefers-colorSpace, srgb),
			var(--500),
			hsla(0, 0%, 0%, 1) 6%
		);
		--700: color-mix(
			in var(--prefers-colorSpace, srgb),
			var(--600),
			hsla(0, 0%, 0%, 1) 8%
		);
		--800: color-mix(
			in var(--prefers-colorSpace, srgb),
			var(--700),
			hsla(0, 0%, 0%, 1) 10%
		);
		--900: color-mix(
			in var(--prefers-colorSpace, srgb),
			var(--800),
			hsla(0, 0%, 0%, 1) 12%
		);
		--950: color-mix(
			in var(--prefers-colorSpace, srgb),
			var(--900),
			hsla(0, 0%, 0%, 1) 14%
		);
	}

	.clr-50 {
		--bg: var(--50);
	}

	.clr-100 {
		--bg: var(--100);
	}

	.clr-200 {
		--bg: var(--200);
	}

	.clr-300 {
		--bg: var(--300);
	}

	.clr-400 {
		--bg: var(--400);
	}

	.clr-500 {
		--bg: var(--500);
	}

	.clr-600 {
		--bg: var(--600);
	}

	.clr-700 {
		--bg: var(--700);
	}

	.clr-800 {
		--bg: var(--800);
	}

	.clr-900 {
		--bg: var(--900);
	}

	.clr-950 {
		--bg: var(--950);
	}

	dialog#notification {
		background-color: color-mix(
			in var(--prefers-colorSpace, srgb),
			var(--50),
			transparent 56%
		);
		backdrop-filter: blur(3pt);
		border-radius: 8pt;
		box-shadow: 0 6pt 56pt -6pt color-mix(in var(--prefers-colorSpace, srgb), var(--950), transparent
					56%);
		color: var(--950);
		flex-direction: column;
		gap: 0.32rem;
		height: max-content;
		inset: 0;
		margin: auto 3dvw 3dvw auto;
		outline: none;
		padding: 1.5rem 2rem;
		position: fixed;
		text-wrap: balance;
		width: max-content;
		z-index: 2;

		&[open] {
			display: flex;
		}

		& > label {
			font-size: 1.32rem;
		}

		& > var {
			font-size: 2rem;
			font-style: normal;
			font-weight: 600;
			text-transform: uppercase;
		}
	}

	:root {
		--baseColor: hsl(50, 50%, 50%) !important;
	}
</style>
