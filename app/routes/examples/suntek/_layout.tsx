import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";
import Appbar from "./_layout/components/Appbar.tsx";
import Bottombar from "./_layout/components/Bottombar.tsx";

export default function Layout({ Component }: PageProps) {
  return (
    <>
      <Head>
        {/* local styles */}
        <link rel="stylesheet" href="/styles/examples/suntek.css" />
        {/* google fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main id="app">
        <Appbar />
        <Component />
        <Bottombar />
      </main>
    </>
  );
}
