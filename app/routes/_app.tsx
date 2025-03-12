import { type PageProps } from "$fresh/server.ts";
import { icons, normalize, reset, tokens } from "@lilycat";
import { asset } from "$fresh/runtime.ts";

export default function App({ Component, url }: PageProps) {
  const canonicalUrl = new URL(url.pathname, url.origin).href;

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

        <link rel="canonical" href={canonicalUrl} />

        <link rel="icon" type="image/x-icon" href={asset("/favicon.ico")} />
        <link
          rel="icon"
          type="image/svg+xml"
          sizes="any"
          href={asset("/logo.svg")}
        />

        <title>lilys</title>

        <style
          lang="css"
          // deno-lint-ignore react-no-danger
          dangerouslySetInnerHTML={{
            __html: `${tokens}${reset}${normalize}${icons}`,
          }}
        />

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
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
