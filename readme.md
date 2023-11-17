# Brrr Components Library

[Components Demo Showcase](https://uwc.vercel.app/)

```ts
import 'brrr-components';

const app = document.querySelector('#app') as Element;

app.innerHTML = `
    <lit-block variant="main">
        <lit-block variant="grid" place="center">

        <lit-block variant="grid" place="top-left">
            top-left
        </lit-block>

        <lit-block variant="grid" place="top">
            top
        </lit-block>

        <lit-block variant="grid" place="top-right">
            top-right
        </lit-block>

        <lit-block variant="grid" place="center-left">
            center-left
        </lit-block>

        <lit-block variant="grid" place="center">
            center
        </lit-block>

        <lit-block variant="grid" place="center-right">
            center-right
        </lit-block>

        <lit-block variant="grid" place="bottom-left">
            bottom-left
        </lit-block>

        <lit-block variant="grid" place="bottom">
            bottom
        </lit-block>

        <lit-block variant="grid" place="bottom-right">
            bottom-right
        </lit-block>
        </lit-block>

        <lit-block variant="column" place="center">
        <lit-block variant="column" place="center">
            <lit-check checked></lit-check>
        </lit-block>
        <lit-block variant="column" place="center">
            <lit-check></lit-check>
        </lit-block>
        </lit-block>

        <lit-block variant="grid" place="center">
        <lit-block variant="grid" place="center">
            <lit-icon name="person"></lit-icon>
        </lit-block>
        <lit-block variant="grid" place="center">
            <lit-icon name="camera"></lit-icon>
        </lit-block>
        <lit-block variant="grid" place="center">
            <lit-icon name="settings"></lit-icon>
        </lit-block>
        <lit-block variant="grid" place="center">
            <lit-icon name="shopping_cart"></lit-icon>
        </lit-block>
        <lit-block variant="grid" place="center">
            <lit-icon name="flutter"></lit-icon>
        </lit-block>
        <lit-block variant="grid" place="center">
            <lit-icon name="release_alert"></lit-icon>
        </lit-block>
        <lit-block variant="grid" place="center">
            <lit-icon name="dashboard"></lit-icon>
        </lit-block>
        <lit-block variant="grid" place="center">
            <lit-icon name="home"></lit-icon>
        </lit-block>
        <lit-block variant="grid" place="center">
            <lit-icon name="wifi"></lit-icon>
        </lit-block>
        </lit-block>

        <lit-block variant="column" place="center">
        <lit-block variant="column" place="center">
            <lit-radio group="radioGroup1" checked></lit-radio>
        </lit-block>
        <lit-block variant="column" place="center">
            <lit-radio group="radioGroup1"></lit-radio>
        </lit-block>
        <lit-block variant="column" place="center">
            <lit-radio group="radioGroup1"></lit-radio>
        </lit-block>
        </lit-block>

        <lit-block variant="column" place="center">

        <lit-block variant="column" place="center">
            <lit-media variant="audio" src="./src/_dev/assets/trex.mp3" controls>
            </lit-media>
        </lit-block>

        <lit-block variant="column" place="center">
            <lit-media variant="video" src="./src/_dev/assets/flower.webm" controls>
            </lit-media>
        </lit-block>
        </lit-block>

        <lit-block variant="column" place="center">
        <lit-media variant="image"
            src="https://images.unsplash.com/photo-1633153010613-fd459a477641?w=600&h=600&auto=format&fit=crop&q=25"
            alt="this is an image">
        </lit-media>
        </lit-block>

        <lit-block variant="grid" place="stretch">
        <lit-block variant="column" place="center">
            <lit-button emphasis="high" lead="person"> lead </lit-button>
        </lit-block>
        <lit-block variant="column" place="center">
            <lit-button emphasis="medium" lead="person"> lead </lit-button>
        </lit-block>
        <lit-block variant="column" place="center">
            <lit-button emphasis="low" lead="person"> lead </lit-button>
        </lit-block>
        <lit-block variant="column" place="center">
            <lit-button emphasis="high" trail="person"> lead </lit-button>
        </lit-block>
        <lit-block variant="column" place="center">
            <lit-button emphasis="medium" trail="person"> lead </lit-button>
        </lit-block>
        <lit-block variant="column" place="center">
            <lit-button emphasis="low" trail="person"> lead </lit-button>
        </lit-block>
        <lit-block variant="column" place="center">
            <lit-button emphasis="high" lead="person" trail="arrow_forward"> lead + trail </lit-button>
        </lit-block>
        <lit-block variant="column" place="center">
            <lit-button emphasis="medium" lead="person" trail="arrow_forward"> lead + trail </lit-button>
        </lit-block>
        <lit-block variant="column" place="center">
            <lit-button emphasis="low" lead="person" trail="arrow_forward"> lead + trail </lit-button>
        </lit-block>
        </lit-block>

        <lit-block variant="column" place="center">
        <lit-block variant="column" place="center">
            <lit-input lead="person" value="this is an input"></lit-input>
        </lit-block>
        <lit-block variant="column" place="center">
            <lit-input placeholder="this is a placeholder"></lit-input>
        </lit-block>
        <lit-block variant="column" place="center">
            <lit-input trail="close" value="this is an input"></lit-input>
        </lit-block>
        </lit-block>

        <lit-block variant="column" place="center">
        <lit-block variant="column" place="center">
            <lit-link href="/#" target="" lead="person">link to '/#'</lit-link>
        </lit-block>
        <lit-block variant="column" place="center">
            <lit-link href="https://www.youtube.com" target="_blank">link to '/youtube.com'</lit-link>
        </lit-block>
        <lit-block variant="column" place="center">
            <lit-link href="/#link" target="" trail="close">link</lit-link>
        </lit-block>
        </lit-block>

        <lit-block variant="grid" place="stretch">
        <lit-block variant="column" place="center">
            <lit-expandable variant="dropdown" title="expandable" emphasis="high" open>
            <lit-input placeholder="Filter..."></lit-input>
            <p>item 1</p>
            <p>item 2</p>
            <p>item 3</p>
            <p>item 4</p>
            </lit-expandable>
        </lit-block>
        <lit-block variant="column" place="center">
            <lit-expandable title="expandable" emphasis="medium" open>
            <p>item 1</p>
            <p>item 2</p>
            <p>item 3</p>
            <p>item 4</p>
            </lit-expandable>
        </lit-block>
        <lit-block variant="column" place="center">
            <lit-expandable title="expandable" emphasis="low" open>
            <p>item 1</p>
            <p>item 2</p>
            <p>item 3</p>
            <p>item 4</p>
            </lit-expandable>
        </lit-block>
        </lit-block>

        <lit-block variant="row" place="center">
        <lit-radiobox group="radioGroup2" checked>
            <lit-media variant="image"
            src="https://images.unsplash.com/photo-1646427066490-474a01f08a0c?w=300&h=600&auto=format&fit=crop&q=25"></lit-media>
        </lit-radiobox>
        <lit-radiobox group="radioGroup2">
            <lit-media variant="image"
            src="https://images.unsplash.com/photo-1698782413216-0d5868fe95b3?w=300&h=600&auto=format&fit=crop&q=25"></lit-media>
        </lit-radiobox>
        <lit-radiobox group="radioGroup2">
            <lit-media variant="image"
            src="https://images.unsplash.com/photo-1582562320669-08063a679a22?w=300&h=600&auto=format&fit=crop&q=25"></lit-media>
        </lit-radiobox>
        </lit-block>
    </lit-block>
`;
```

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<link rel="icon" type="image/svg+xml" href="/lit.svg" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta name="description" content="Lit Element universal web components" />
		<title>Lit - Universal Web Components</title>
		<script
			type="module"
			src="https://www.unpkg.com/brrr-components@latest"
			defer></script>

		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
		<link
			rel="stylesheet"
			href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100;0,9..40,200;0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;0,9..40,900;0,9..40,1000;1,9..40,100;1,9..40,200;1,9..40,300;1,9..40,400;1,9..40,500;1,9..40,600;1,9..40,700;1,9..40,800;1,9..40,900;1,9..40,1000&display=swap" />
		<link
			rel="stylesheet"
			href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

		<style>
			:root {
				--fontFamily: 'DM Sans', sans-serif;
				--iconFontFamily: 'Material Symbols Rounded';
			}
		</style>
	</head>

	<body>
		<main>
			<lit-block variant="grid" place="center" tabindex="0">
				<lit-block variant="grid" place="top-left" class="demo-block">
					top-left
				</lit-block>

				<lit-block variant="grid" place="top" class="demo-block">
					top
				</lit-block>

				<lit-block variant="grid" place="top-right" class="demo-block">
					top-right
				</lit-block>

				<lit-block variant="grid" place="center-left" class="demo-block">
					center-left
				</lit-block>

				<lit-block variant="grid" place="center" class="demo-block">
					center
				</lit-block>

				<lit-block variant="grid" place="center-right" class="demo-block">
					center-right
				</lit-block>

				<lit-block variant="grid" place="bottom-left" class="demo-block">
					bottom-left
				</lit-block>

				<lit-block variant="grid" place="bottom" class="demo-block">
					bottom
				</lit-block>

				<lit-block variant="grid" place="bottom-right" class="demo-block">
					bottom-right
				</lit-block>
			</lit-block>

			<lit-block variant="column" place="center" tabindex="0">
				<lit-check checked></lit-check>
				<lit-check></lit-check>
			</lit-block>

			<lit-block variant="grid" place="center" tabindex="0">
				<lit-icon name="person"></lit-icon>
				<lit-icon name="camera"></lit-icon>
				<lit-icon name="settings"></lit-icon>
				<lit-icon name="shopping_cart"></lit-icon>
				<lit-icon name="flutter"></lit-icon>
				<lit-icon name="release_alert"></lit-icon>
				<lit-icon name="dashboard"></lit-icon>
				<lit-icon name="home"></lit-icon>
				<lit-icon name="wifi"></lit-icon>
			</lit-block>

			<lit-block variant="column" place="center" tabindex="0">
				<lit-radio group="radioGroup1" checked></lit-radio>
				<lit-radio group="radioGroup1"></lit-radio>
				<lit-radio group="radioGroup1"></lit-radio>
			</lit-block>

			<lit-block variant="column" place="center" tabindex="0">
				<lit-media variant="audio" src="/assets/trex.mp3" controls> </lit-media>
			</lit-block>

			<lit-block variant="column" place="center" tabindex="0">
				<lit-media variant="video" src="/assets/flower.webm" controls>
				</lit-media>
			</lit-block>

			<lit-block variant="column" place="center" tabindex="0">
				<lit-media
					variant="image"
					src="https://images.unsplash.com/photo-1633153010613-fd459a477641?w=600&h=600&auto=format&fit=crop&q=25"
					alt="this is an image">
				</lit-media>
			</lit-block>

			<lit-block variant="grid" place="stretch" tabindex="0">
				<lit-block variant="column" place="center">
					<lit-button emphasis="high" lead="person"> lead </lit-button>
				</lit-block>
				<lit-block variant="column" place="center">
					<lit-button emphasis="medium" lead="person"> lead </lit-button>
				</lit-block>
				<lit-block variant="column" place="center">
					<lit-button emphasis="low" lead="person"> lead </lit-button>
				</lit-block>
				<lit-block variant="column" place="center">
					<lit-button emphasis="high" trail="person"> lead </lit-button>
				</lit-block>
				<lit-block variant="column" place="center">
					<lit-button emphasis="medium" trail="person"> lead </lit-button>
				</lit-block>
				<lit-block variant="column" place="center">
					<lit-button emphasis="low" trail="person"> lead </lit-button>
				</lit-block>
				<lit-block variant="column" place="center">
					<lit-button emphasis="high" lead="person" trail="arrow_forward">
						lead + trail
					</lit-button>
				</lit-block>
				<lit-block variant="column" place="center">
					<lit-button emphasis="medium" lead="person" trail="arrow_forward">
						lead + trail
					</lit-button>
				</lit-block>
				<lit-block variant="column" place="center">
					<lit-button emphasis="low" lead="person" trail="arrow_forward">
						lead + trail
					</lit-button>
				</lit-block>
			</lit-block>

			<lit-block variant="column" place="center" tabindex="0">
				<lit-block variant="column" place="center">
					<lit-input lead="person" value="this is an input"></lit-input>
				</lit-block>
				<lit-block variant="column" place="center">
					<lit-input placeholder="this is a placeholder"></lit-input>
				</lit-block>
				<lit-block variant="column" place="center">
					<lit-input trail="close" value="this is an input"></lit-input>
				</lit-block>
			</lit-block>

			<lit-block variant="column" place="center" tabindex="0">
				<lit-block variant="column" place="center">
					<lit-link href="/#" target="" lead="person">link to '/#'</lit-link>
				</lit-block>
				<lit-block variant="column" place="center">
					<lit-link href="https://www.youtube.com" target="_blank"
						>link to '/youtube.com'</lit-link
					>
				</lit-block>
				<lit-block variant="column" place="center">
					<lit-link href="/#link" target="" trail="close">link</lit-link>
				</lit-block>
			</lit-block>

			<lit-block variant="grid" place="stretch" tabindex="0">
				<lit-block variant="column" place="center">
					<lit-expandable title="expandable" emphasis="high" open>
						<p>item 1</p>
						<p>item 2</p>
						<p>item 3</p>
						<p>item 4</p>
					</lit-expandable>
				</lit-block>
				<lit-block variant="column" place="center">
					<lit-expandable title="expandable" emphasis="medium" open>
						<p>item 1</p>
						<p>item 2</p>
						<p>item 3</p>
						<p>item 4</p>
					</lit-expandable>
				</lit-block>
				<lit-block variant="column" place="center">
					<lit-expandable title="expandable" emphasis="low" open>
						<p>item 1</p>
						<p>item 2</p>
						<p>item 3</p>
						<p>item 4</p>
					</lit-expandable>
				</lit-block>
			</lit-block>

			<lit-block variant="grid" place="stretch" tabindex="0">
				<lit-block variant="column" place="center">
					<lit-expandable
						variant="dropdown"
						title="dropdown"
						emphasis="high"
						open>
						<p>item 1</p>
						<p>item 2</p>
						<p>item 3</p>
						<p>item 4</p>
					</lit-expandable>
				</lit-block>
				<lit-block variant="column" place="center">
					<lit-expandable
						variant="dropdown"
						title="dropdown"
						emphasis="medium"
						open>
						<p>item 1</p>
						<p>item 2</p>
						<p>item 3</p>
						<p>item 4</p>
					</lit-expandable>
				</lit-block>
				<lit-block variant="column" place="center">
					<lit-expandable
						variant="dropdown"
						title="dropdown"
						emphasis="low"
						open>
						<p>item 1</p>
						<p>item 2</p>
						<p>item 3</p>
						<p>item 4</p>
					</lit-expandable>
				</lit-block>
			</lit-block>

			<lit-block variant="row" place="center" tabindex="0">
				<lit-radiobox group="radioGroup2" checked>
					<lit-media
						variant="image"
						src="https://images.unsplash.com/photo-1646427066490-474a01f08a0c?w=300&h=600&auto=format&fit=crop&q=25"></lit-media>
				</lit-radiobox>
				<lit-radiobox group="radioGroup2">
					<lit-media
						variant="image"
						src="https://images.unsplash.com/photo-1698782413216-0d5868fe95b3?w=300&h=600&auto=format&fit=crop&q=25"></lit-media>
				</lit-radiobox>
				<lit-radiobox group="radioGroup2">
					<lit-media
						variant="image"
						src="https://images.unsplash.com/photo-1582562320669-08063a679a22?w=300&h=600&auto=format&fit=crop&q=25"></lit-media>
				</lit-radiobox>
			</lit-block>
		</main>
	</body>
</html>
```
