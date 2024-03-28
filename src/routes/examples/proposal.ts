import { html } from 'lit';

export default html`
	<wc-app>
		<aside>
			<wc-group>
				<label>Main Modules</label>
			</wc-group>
			<hr />
			<wc-group>
				<label>Main Modules</label>
				<button>Customer Information</button>
				<button>Additional Information</button>
				<button>Internal Sale Notes</button>
				<button>Financial</button>
			</wc-group>
			<hr />
			<wc-group>
				<label>Additional Modules</label>
			</wc-group>
			<hr />
			<wc-group>
				<label>Main Modules</label>
			</wc-group>
		</aside>
		<main>
			<header>
				<wc-row> </wc-row>
				<wc-row> </wc-row>
				<wc-row> </wc-row>
			</header>
			<wc-col>
				<form>
					<input type="email" />
				</form>
			</wc-col>
			<footer></footer>
		</main>
	</wc-app>
`;
