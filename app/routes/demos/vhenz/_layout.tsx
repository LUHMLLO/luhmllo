import { asset, Head } from "$fresh/runtime.ts";
import { type PageProps } from "$fresh/server.ts";

export default function Layout({ Component }: PageProps) {
  return (
    <>
      <Head>
        {/* local styles */}
        <link rel="stylesheet" href={asset("/styles/demos/vhenz.css")} />
        {/* google fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Teachers:ital,wght@0,400..800;1,400..800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main id="app">
        <Component />
      </main>
    </>
  );
}
