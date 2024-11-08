import { type PageProps } from "$fresh/server.ts";
import Appbar from "../islands/Appbar.tsx";
import Bottombar from "../islands/Bottombar.tsx";

export default function App({ Component }: PageProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="description" content="lilys desing system and ui kit" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />

        <title>lilys</title>

        <link rel="stylesheet" href="styles/01.root.css" />
        <link rel="stylesheet" href="styles/02.reset.css" />
        <link rel="stylesheet" href="styles/03.customs.css" />
        <link rel="stylesheet" href="styles/scaffold.css" />
        <link rel="stylesheet" href="styles/tailwind.css" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body>
        <main id="app" className="container">
          <Appbar />
          <Component />
          <Bottombar />
        </main>

        <span id="cursor" />

        <script type="module" src="customs/element.dropdown.js" />
        <script type="module" src="customs/_init.js" />
      </body>
    </html>
  );
}
