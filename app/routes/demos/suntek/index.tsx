import { type PageProps } from "$fresh/server.ts";

export default function Page(_props: PageProps) {
  return (
    <div id="views">
      hello world <code>{_props.url.pathname}</code>
    </div>
  );
}
