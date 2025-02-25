import { type PageProps } from "$fresh/server.ts";

export default function App({ Component }: PageProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta
          name="description"
          content="lilys desing system and ui kit"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <title>lilys</title>
        <link rel="stylesheet" href="/styles/tokens.css" />
        <link rel="stylesheet" href="/styles/reset.css" />
        <link rel="stylesheet" href="/styles/normalize.css" />
        <link rel="stylesheet" href="/styles/tailwind.css" />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
