import { html } from 'lit';

export default html`
	<lm-app>
		<lm-sidebar>
			<lm-group>
				<label>Main Modules</label>
			</lm-group>
			<hr />
			<lm-group>
				<label>Main Modules</label>
				<button>Customer Information</button>
				<button>Additional Information</button>
				<button>Internal Sale Notes</button>
				<button>Financial</button>
			</lm-group>
			<hr />
			<lm-group>
				<label>Additional Modules</label>
			</lm-group>
			<hr />
			<lm-group>
				<label>Main Modules</label>
			</lm-group>
		</lm-sidebar>
		<main>
			<header>
				<lm-row> </lm-row>
				<lm-row> </lm-row>
				<lm-row> </lm-row>
			</header>
			<lm-col> </lm-col>
			<footer></footer>
		</main>
	</lm-app>
`;
