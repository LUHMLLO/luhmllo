import { html } from 'lit';

export default html`
	<wc-icon> add </wc-icon>
	<wc-icon solid> bolt </wc-icon>

	<wc-radio label="Radio 1 of Group 1" group="radio-group-1">
		<input type="text" name="" id="" />
	</wc-radio>
	<wc-radio label="Radio 2 of Group 1" group="radio-group-1">
		<textarea name="" id="" cols="30" rows="10"></textarea>
	</wc-radio>

	<wc-radio label="Radio 1 of Group 2" group="radio-group-2"> </wc-radio>
	<wc-radio label="Radio 1 of Group 2" group="radio-group-2"> </wc-radio>

	<div style="font-size: var(--scale-5xs)">5xs</div>
	<div style="font-size: var(--scale-4xs)">4xs</div>
	<div style="font-size: var(--scale-3xs)">3xs</div>
	<div style="font-size: var(--scale-2xs)">2xs</div>
	<div style="font-size: var(--scale-xs)">xs</div>

	<div style="font-size: var(--scale-sm)">sm</div>
	<div style="font-size: var(--scale-md)">md</div>
	<div style="font-size: var(--scale-nm)">nm</div>
	<div style="font-size: var(--scale-lg)">lg</div>

	<div style="font-size: var(--scale-xl)">xl</div>
	<div style="font-size: var(--scale-2xl)">2xl</div>
	<div style="font-size: var(--scale-3xl)">3xl</div>
	<div style="font-size: var(--scale-4xl)">4xl</div>
	<div style="font-size: var(--scale-5xl)">5xl</div>

	<wc-col>
		<span>Im inside a col</span>
		<span>Im inside a col</span>
		<span>Im inside a col</span>
		<span>Im inside a col</span>
	</wc-col>

	<wc-grid max="4">
		<span class="demo-card">Im inside a grid</span>
		<span class="demo-card">Im inside a grid</span>
		<span class="demo-card">Im inside a grid</span>
		<span class="demo-card">Im inside a grid</span>

		<span class="demo-card">Im inside a grid</span>
		<span class="demo-card">Im inside a grid</span>
		<span class="demo-card">Im inside a grid</span>
		<span class="demo-card">Im inside a grid</span>

		<span class="demo-card">Im inside a grid</span>
		<span class="demo-card">Im inside a grid</span>
		<span class="demo-card">Im inside a grid</span>
		<span class="demo-card">Im inside a grid</span>
	</wc-grid>

	<wc-row>
		<span>Im inside a row</span>
		<span>Im inside a row</span>
		<span>Im inside a row</span>
		<span>Im inside a row</span>
	</wc-row>
`;
