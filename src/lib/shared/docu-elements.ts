const __button = {
    name: '.__button',
    description: 'changes style to behave like a button.',
}

const __outline = {
    name: '.__outline',
    description: 'adds outline. (requires: .__button or <button/>)',
}

const __fab = {
    name: '.__fab',
    description: 'changes styles to look like a FAB. (requires: .__button or <button/>)',
}

const __switch = {
    name: '.__switch',
    description: 'changes the style to behave like a switch toggle.',
}

const __lead = {
    name: '.__lead',
    description:
        'defines children as leading item (required for left side optical corrections).',
}

const __trail = {
    name: '.__trail',
    description:
        'defines children as trailing item (required for right side optical corrections).',
}

const __field = {
    name: '.__field',
    description: 'changes the style to behave like form field component.',
}

const __label = {
    name: '.__label',
    description: 'defines children as field label.',
}

const __caption = {
    name: '.__caption',
    description: 'defines children as field caption.',
}

const __blank = {
    name: '.__blank',
    description: 'becomes a plain element to be used inside a wrapper.',
}

export default [
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    {
        tagname: 'Buttons',
        description: 'Buttons allow users to perform an action or to navigate to another page. They have multiple styles for various needs, and are ideal for calling attention to where a user needs to do something in order to move forward in a flow.',
        props: [
            {
                target: 'self',
                classes: [ __fab, __outline ],
            },
            {
                target: 'children',
                classes: [ __lead, __trail ],
            },
        ],
        snippets: [
            `
				<button>
					normal
				</button>
            `,
            `
				<button class="__outline">
					<span>
						.__outline
					</span>
				</button>
            `,
            `
               <button class="__outline">
					<ly-icon class='__lead'>
						add
					</ly-icon>
					<span>
						has .__lead
					</span>
				</button>
            `,
            `
				<button class="__outline">
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
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    {
        tagname: 'Links (A tag)',
        props: [
            {
                target: 'self',
                classes: [ __button, __outline ],
            },
            {
                target: 'children',
                classes: [ __lead, __trail ],
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
				<a class="__button __outline">
					<span>
						.__button .__outline
					</span>
				</a>
            `,
        ],
    },
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    {
        tagname: 'Details (summary)',
        props: [
            {
                target: 'self (summary)',
                classes: [ __button, __outline ],
            },
            {
                target: "children (summary)",
                classes: [ __lead, __trail ],
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
					<summary class="__button __outline">
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
					<summary class="__button __outline">
						<span>has .__animate</span>
						<ly-icon class='__trail __animate'>
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
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    {
        tagname: 'Label',
        props: [
            {
                target: 'self',
                classes: [ __field ],
            },
            {
                target: 'children',
                classes: [ __label, __caption ],
            },
        ],
        snippets: [
            `
				<label for='textarea' class="__field">
					<span class="__label">.__label</span>
					<textarea name='textarea'></textarea>
					<span class="__caption">.__caption</span>
				</label>
            `,
        ],
    },
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    {
        tagname: 'Input (text, number, email, tel, date, time, file, range)',
        props: [
            {
                target: 'self',
                classes: [ __blank ],
            },
        ],
        snippets: [
            `
				<label for='text' class="__field">
					<span class="__label">label</span>
					<input name='text' type='text' />
				</label>
            `,
            `
				<label for='number' class="__field">
					<span class="__label">label</span>
					<input name='number' type='number' />
				</label>
            `,
            `
				<label for='email' class="__field">
					<span class="__label">label</span>
					<input name='email' type='email' />
				</label>
            `,
            `
				<label for='tel' class="__field">
					<span class="__label">label</span>
					<input name='tel' type='tel' />
				</label>
            `,
        ],
    },
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    {
        tagname: 'Input (checkbox, radio)',
        props: [
            {
                target: 'self',
                classes: [ __switch ],
            },
        ],
        snippets: [
            `
				<label for='checkbox' class="__field">
					<span class="__label"> input checkbox </span>
					<input name='checkbox' type='checkbox' />
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
				<label for='checkbox' class="__field">
					<span class="__label"> input checkbox </span>
					<input name='checkbox' type='checkbox' class="__switch" />
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
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    {
        tagname: 'Textarea',
        props: [
            {
                target: 'self',
                classes: [ __blank ],
            },
        ],
        snippets: [
            `
				<label for='textarea' class="__field">
					<span class="__label">.__label</span>
					<textarea name='textarea'></textarea>
					<span class="__caption">.__caption</span>
				</label>
            `,
        ],
    },
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    {
        tagname: 'Date / Datetime / Time',
        props: [
            {
                target: 'self',
                classes: [ __blank ],
            },
        ],
        snippets: [
            `
				<label for='date' class="__field">
					<span class="__label">label</span>
					<input name='date' type='date' />
				</label>
            `,
            `
				<label for='datetime-local' class="__field">
					<span class="__label">label</span>
					<input name='datetime-local' type='datetime-local' />
				</label>
            `,
            `
				<label for='time' class="__field">
					<span class="__label">label</span>
					<input name='time' type='time' />
				</label>
            `,
        ],
    },
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    {
        tagname: 'Range',
        props: [
            {
                target: 'self',
                classes: [ __blank ],
            },
        ],
        snippets: [
            `
				<label for='range' class="__field">
					<span class="__label">label</span>
					<input name='range' type='range' />
				</label>
            `,
        ],
    },
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    {
        tagname: 'File',
        props: [
            {
                target: 'self',
                classes: [ __blank ],
            },
        ],
        snippets: [
            `
				<label for='file' class="__field">
					<script is:inline>
						function setFile() {
							const label = document.querySelector("label[for='file']");
							const input = document.querySelector("input[name='file'][type='file']");

							input.addEventListener('change', () => {
								setTimeout(() => {
									label.querySelector("span").innerText = input.value;
								}, 512);
							});
							input.click();
						}
					</script>
					<span class="__label">label</span>
					<input name='file' type='file' />
					<button class='__outline' onclick='setFile()'>
						<span>Select File</span>
					</button>
				</label>
			`,
        ],
    },
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    {
        tagname: 'Ordered List / Unordered List / Definition List',
        props: [
            {
                target: 'self',
                classes: [],
            },
        ],
        snippets: [
            `
			<ol>
				<li> list item </li>
				<li class="__counter __lead"> list item </li>
				<li class="__counter"> list item </li>
				<li class="__counter __trail"> list item </li>
			</ol>
		`,
            `
			<ul>
				<li> list item </li>
				<li> list item </li>
				<li> list item </li>
				<li> list item </li>
			</ul>
		`,
            `
			<dl>
				<dt>title</dt>
				<dd>definition</dd>
				<dt>title</dt>
				<dd>definition</dd>
				<dt>title</dt>
				<dd>definition</dd>
			</dl>
		`,
            `
			<ol>
				<dt class="__counter __lead">title</dt>
			</ol>
		`,
        ],
    },
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
]
