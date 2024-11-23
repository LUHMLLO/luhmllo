// routes/_layout.tsx
import { PageProps } from "$fresh/server.ts";
import Appbar from "./_layout/components/Appbar.tsx";
import Bottombar from "./_layout/components/Bottombar.tsx";

export default function Layout({ Component }: PageProps) {
  return (
    <>
      <main id="app" className="container">
        <Appbar />
        <Component />
        <Bottombar />
      </main>

      <span id="cursor" />

      {
        /*
        Note: For Fresh, it's recommended to use asset imports or Islands
        instead of direct script tags. If _init.js contains critical functionality,
        consider converting it to an Island component or importing it differently.
      */
      }
      <script type="module" src="/customs/_init.js" />
    </>
  );
}

// Optional: Add a route handler if needed
// export const handler: Handlers = {
//   GET(req, ctx) {
//     return ctx.render();
//   },
// };
