import { type PageProps } from "$fresh/server.ts";

export default function Page(props: PageProps) {
  return (
    <div id="views">
      hello world <code>{props.url.pathname}</code>
    </div>
  );
}
