import { type PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export default function Layout({ Component }: PageProps) {
  return (
    <>
      <Head>
        <script type="module" src="/js/route_test.js"></script>
      </Head>

      <x-sublayer
        className="gridlines"
        style="pointer-events:none; visibility: visible;"
      />

      <x-window>
        <Component />
      </x-window>
    </>
  );
}
