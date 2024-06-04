export default [
	{
		alias: 'buttons',
		summary: [
			{
				name: '.__outlined',
				description:
					'class acts as variant for the parent element base styling.',
			},

			{
				name: '.__lead / .__trail',
				description:
					'classes are optional but required if one wishes to apply optical corrections to the parent element.',
			},
		],
		snippets: [
			`
				<button>
					normal
				</button>
            `,
			`
				<button class="__outlined">
					<span>
						.__outlined
					</span>
				</button>
            `,
			`
               <button class="__outlined">
					<ly-icon class='__lead'>
						add
					</ly-icon>
					<span>
						has .__lead
					</span>
				</button>
            `,
			`
				<button class="__outlined">
					<span>
						has .__trail
					</span>
					<ly-icon class='__trail'>
						add
					</ly-icon>
				</button>
            `,
		],
	},

	{
		alias: 'links (A tag)',
		summary: [
			{
				name: '.__button',
				description:
					'class acts as variant for the parent element base styling.',
			},
			{
				name: '.__outlined',
				description:
					'class acts as variant for the parent element base styling.',
			},

			{
				name: '.__lead / .__trail',
				description:
					'classes are optional but required if one wishes to apply optical corrections to the parent element.',
			},
		],
		snippets: [
			`
				<a>
					<ly-icon class='__lead'>
						globe
					</ly-icon>
					<span>
						normal
					</span>
				</a>
            `,
			`
				<a href='#'>
					<ly-icon class='__lead'>
						globe
					</ly-icon>
					<span>
						has [href]
					</span>
				</a>
            `,
			`
				<a class="__button">
					<span>
						.__button
					</span>
				</a>
            `,
			`
				<a class="__button __outlined">
					<span>
						.__button .__outlined
					</span>
				</a>
            `,
		],
	},

	{
		alias: 'Details / Summary',
		summary: [
			{
				name: '.__button',
				description:
					'class acts as variant for the summary element base styling.',
			},
			{
				name: '.__outlined',
				description:
					'class acts as variant for the summary element base styling.',
			},
			{
				name: '.__lead / .__trail',
				description:
					'classes are optional but required if one wishes to apply optical corrections to the summary element.',
			},
		],
		snippets: [
			`
				<details open>
					<summary>
						<span>summary</span>
					</summary>
					<p class='clr-subtext'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptate distinctio
						iure, ullam labore quod beatae veritatis.
					</p>
				</details>
            `,
			`
				<details open>
					<summary class="__button">
						<span>summary</span>
					</summary>
					<p class='clr-subtext'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptate distinctio
						iure, ullam labore quod beatae veritatis.
					</p>
				</details>
            `,
			`
				<details open>
					<summary class="__button __outlined">
						<span>summary</span>
					</summary>
					<p class='clr-subtext'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptate distinctio
						iure, ullam labore quod beatae veritatis.
					</p>
				</details>
            `,
			`
				<details open>
					<summary class="__button __outlined">
						<span>summary</span>
						<ly-icon class='__trail'>
							add
						</ly-icon>
					</summary>
					<p class='clr-subtext'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptate distinctio
						iure, ullam labore quod beatae veritatis.
					</p>
				</details>
            `,
		],
	},

	{
		alias: 'input[type=checkbox] / input[type=radio]',
		summary: [
			{
				name: '.__switch',
				description:
					'class acts as variant for the parent element base styling.',
			},
		],
		snippets: [
			`
				<label for='checkbox'>
					<input name='checkbox' type='checkbox' />
					<span> input checkbox </span>
				</label>
            `,
			`
				<label for='radio'>
					<input name='radio' type='radio' />
					<span> input radio </span>
				</label>
				<label for='radio'>
					<input name='radio' type='radio' />
					<span> input radio </span>
				</label>
            `,
			`
				<label for='checkbox'>
					Lorem ipsum dolor consectetur adipisicing elit.
					<input name='checkbox' type='checkbox' />
					omnis odit incidunt delectus aliquam atque quibusdam voluptatum ab quia.
				</label>
            `,
			`
				<label for='radio'>
					Lorem ipsum dolor consectetur adipisicing elit.
					<input name='radio' type='radio' />
					omnis odit incidunt delectus aliquam atque quibusdam voluptatum ab quia.
				</label>
            `,
			`
				<label for='checkbox'>
					<input name='checkbox' type='checkbox' class="__switch" />
					<span> input checkbox </span>
				</label>
            `,
			`
				<label for='radio'>
					<input name='radio' type='radio' class="__switch" />
					<span> input radio </span>
				</label>
				<label for='radio'>
					<input name='radio' type='radio' class="__switch" />
					<span> input radio </span>
				</label>
            `,
			`
				<label for='checkbox'>
					Lorem ipsum dolor consectetur adipisicing elit.
					<input name='checkbox' type='checkbox' class="__switch" />
					omnis odit incidunt delectus aliquam atque quibusdam voluptatum ab quia.
				</label>
            `,
			`
				<label for='radio'>
					Lorem ipsum dolor consectetur adipisicing elit.
					<input name='radio' type='radio' class="__switch" />
					omnis odit incidunt delectus aliquam atque quibusdam voluptatum ab quia.
				</label>
            `,
		],
	},
];
