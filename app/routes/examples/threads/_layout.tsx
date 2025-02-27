import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";
import Appbar from "./_layout/components/Appbar.tsx";
import Bottombar from "./_layout/components/Bottombar.tsx";

export default function Layout({ Component }: PageProps) {
  return (
    <>
      <Head>
        {/* local styles */}
        <link rel="stylesheet" href="/styles/examples/threads.css" />
        {/* google fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main id="app" className="container">
        <Appbar />
        <Component />
        <Bottombar />
      </main>

      <span id="cursor" />

      <script
        type="module"
        // deno-lint-ignore react-no-danger
        dangerouslySetInnerHTML={{
          __html: `
            import initCursor from "/vendors/cursor.min.js";
            document.addEventListener('DOMContentLoaded', () => {
              initCursor("cursor");
            });
          `,
        }}
      >
      </script>

      <script
        type="module"
        // deno-lint-ignore react-no-danger
        dangerouslySetInnerHTML={{
          __html: `
            import initDragScroll from "/vendors/drag2scroll.min.js";
            document.addEventListener('DOMContentLoaded', () => {
              initDragScroll("views");
            });
          `,
        }}
      >
      </script>
    </>
  );
}
