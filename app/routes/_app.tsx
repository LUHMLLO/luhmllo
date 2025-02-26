import { type PageProps } from "$fresh/server.ts";
import { normalize, reset, tokens } from "@lilycat";

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
        <style
          lang="css"
          dangerouslySetInnerHTML={{ __html: tokens }}
        />
        <style
          lang="css"
          dangerouslySetInnerHTML={{ __html: reset }}
        />
        <style
          lang="css"
          dangerouslySetInnerHTML={{ __html: normalize }}
        />
        <link rel="stylesheet" href="/styles/tailwind.css" />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
