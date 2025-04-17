import { type PageProps } from "$fresh/server.ts";
import { asset, Head } from "$fresh/runtime.ts";

export default function Page(_props: PageProps) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href={asset("/codepens/gete.css")}
        />
        <link
          rel="stylesheet"
          href={asset("/codepens/gete.js")}
        />
      </Head>

      <aside>
      </aside>
      <main>
      </main>
    </>
  );
}
