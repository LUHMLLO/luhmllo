import { asset } from "$fresh/runtime.ts"
import { type PageProps } from "$fresh/server.ts"
import * as lilycat from "../../css/dist/mod.ts"

import { Head } from "$fresh/runtime.ts"

export default function Apps({ Component, url }: PageProps) {
  const canonicalUrl = new URL(url.pathname, url.origin).href;

  return (
    <html lang="en">
      <Head>
        <meta charset="utf-8" />
        <meta
          name="description"
          content="lilys desing system and ui kit"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />

        <link rel="canonical" href={canonicalUrl} />
        <link
          rel="icon"
          type="image/svg+xml"
          sizes="any"
          href={asset("/media/logo.svg")}
        />

        <title>lilys</title>

        <style
          lang="css"
          // deno-lint-ignore react-no-danger
          dangerouslySetInnerHTML={{ __html: lilycat.all }}
        />

        {/* global styles */}
        <link rel="stylesheet" href={asset("/styles/app.css")} />

        {/* google fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </Head>
      <body>
        <Component />
        <script type="module" src="/vendors/dropdown.min.js"></script>
      </body>
    </html>
  );
}
