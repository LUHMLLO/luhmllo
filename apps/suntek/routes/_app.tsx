import { asset } from "$fresh/runtime.ts";
import { type PageProps } from "$fresh/server.ts";
import {
  icons,
  normalize,
  props,
  reset,
  tokens,
} from "@luhmllo:packages/lilycat";
import Appbar from "#islands/Appbar.tsx";
import PaneNotifications from "#islands/NotificationsPane.tsx";

export default function App({ Component, url }: PageProps) {
  const canonicalUrl = new URL(url.pathname, url.origin).href;

  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta
          name="description"
          content="silklead crm by suntek"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />

        <link rel="canonical" href={canonicalUrl} />
        <link
          rel="icon"
          type="image/png"
          sizes="any"
          href={asset("/media/suntek.png")}
        />

        <title>silklead by suntek</title>

        <style
          lang="css"
          // deno-lint-ignore react-no-danger
          dangerouslySetInnerHTML={{
            __html: `${tokens}${reset}${normalize}${icons}${props}`,
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
          href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body>
        <main id="app">
          <Appbar />
          <Component />
          <x-overlay>
            <PaneNotifications />
          </x-overlay>
        </main>
        <script type="module" src={asset("/vendors/dropdown.min.js")} />
      </body>
    </html>
  );
}
