import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";
import Appbar from "./_layout/components/Appbar.tsx";

export default function Layout({ Component }: PageProps) {
  return (
    <>
      <Head>
        {/* local styles */}
        <link rel="stylesheet" href="/styles/examples/inmov.css" />
      </Head>

      <main id="app" className="container">
        <Appbar />
        <Component />
      </main>
    </>
  );
}
