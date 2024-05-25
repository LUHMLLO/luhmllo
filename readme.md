# Lilys

![Lilys Logo](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

> **Quick links:** Check the repo or read the documentation. Have fun!

[![Official Docs & Showcase site](https://img.shields.io/badge/Powered%20by-Vercel-black.svg?style=for-the-badge&logo=vercel)](https://uwc.vercel.app/)
[![Official GitHub Repository](https://img.shields.io/badge/Open%20in-GitHub-black.svg?style=for-the-badge&logo=github)](https://github.com/LUHMLLO/lilys)

## Getting Started

You can install Lilys via npm:

```sh
pnpm install lilys@latest
```

How to Import ?

- Using Node:

  ```js
  import "lilys/styles";
  import "lilys/ui";
  ```

- Using CDN (not tested)

  ```html
  <link rel="stylesheet" url="https://unpkg.com/lilys@latest/styles" />
  <link type="module" src="https://unpkg.com/lilys@latest/ui" />
  ```

## Starter Template

Inside of your project, you'll have the option to use the following folders and
files:

```html
<ly-layer stacked="under">
 <!--place not really interactive things here-->
</ly-layer>

<ly-app tmpl="default" class="place-center[all]">
 <header class="g-nm place-center[items] flex-col txt-center">
  <h1>Lily's</h1>
  <p>Build UIs Simply. Anywhere.</p>
  <a href="#" class="contents">
   <button>Discover</button>
  </a>
 </header>
</ly-app>

<ly-layer stacked="over">
 <!--place floating items here and things might overlay -->
</ly-layer>
```

## Want to learn more?

Feel free to check [our documentation](https://uwc.vercel.app/docs/)
