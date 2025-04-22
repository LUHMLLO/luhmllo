import { asset, Head } from "$fresh/runtime.ts";
import { type PageProps } from "$fresh/server.ts";
import * as lilycat from "../../css/dist/mod.ts";

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
          href={asset("/media/lilycat.png")}
        />

        <title>lilys</title>

        <style
          lang="css"
          // deno-lint-ignore react-no-danger
          dangerouslySetInnerHTML={{ __html: lilycat.all }}
        />

        {/* global styles */}
        <link rel="stylesheet" href={asset("/app.css")} />
        <link rel="stylesheet" href={asset("/utils.css")} />

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
        <div id="app">
          <nav id="app__topbar">
            <a href="/" style="margin-right: var(--md);">
              <figure>
                <img src="/media/lilycat.png" alt="logo" />
              </figure>
              <span>Lilycat</span>
            </a>

            <a href="/docs" type="button">
              <i className="icon">docs</i>
            </a>
            <a href="/test" type="button">
              <i className="icon">experiment</i>
            </a>
          </nav>
          <div id="app__content">
            <Component />
          </div>
        </div>
        <script type="module" src="/vendors/dropdown.min.js"></script>
        <script type="module" src="/app.js"></script>
      </body>
    </html>
  );
}
