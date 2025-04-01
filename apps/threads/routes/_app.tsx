import { asset } from "$fresh/runtime.ts";
import { type PageProps } from "$fresh/server.ts";
import {
  customs,
  icons,
  normalize,
  props,
  reset,
  tokens,
} from "@luhmllo:packages/lilycat";
import Appbar from "#components/Appbar.tsx";
import Bottombar from "#components/Bottombar.tsx";

export default function App({ Component, url }: PageProps) {
  const canonicalUrl = new URL(url.pathname, url.origin).href;

  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta
          name="description"
          content="threads clone"
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

        <title>threads</title>

        <style
          lang="css"
          // deno-lint-ignore react-no-danger
          dangerouslySetInnerHTML={{
            __html: `${tokens}${reset}${normalize}${icons}${props}${customs}`,
          }}
        />

        {/* global styles */}
        <link rel="stylesheet" href={asset("/styles/app.css")} />

        {/* tailwind utilities */}
        <link rel="stylesheet" href={asset("/styles/tailwind.css")} />

        {/* google fonts */}
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
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body>
        <Appbar />
        <Component />
        <Bottombar />
        <script type="module" src={asset("/vendors/dropdown.min.js")} />
      </body>
    </html>
  );
}
