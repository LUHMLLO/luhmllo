import { asset, Head } from "$fresh/runtime.ts";
import { type PageProps } from "$fresh/server.ts";

export default function Page(_props: PageProps) {
  return (
    <>
      <Head>
        <script type="module" src="/app.js" />
      </Head>

      <a
        href="#top"
        type="button"
        data-props="--fab"
        style="bottom: 0; right: 0;"
      >
        <i className="icon">
          arrow_upward
        </i>
      </a>
    </>
  );
}
