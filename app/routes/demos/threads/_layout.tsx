import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";
import Appbar from "../../../components/threads/Appbar.tsx";
import Bottombar from "../../../components/threads/Bottombar.tsx";

export default function Layout({ Component }: PageProps) {
  return (
    <>
      <Head>
        {/* local styles */}
        <link rel="stylesheet" href="/styles/demos/threads.css" />
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

      <script type="module" src="/vendors/dropdown.min.js" />

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
