import { type PageProps } from "$fresh/server.ts";
import { asset } from "$fresh/runtime.ts";

export default function Page(_props: PageProps) {
  return (
    <>
      <link
        rel="stylesheet"
        href={asset("/styles/codepens/smartHomeHub.css")}
      />
    </>
  );
}
