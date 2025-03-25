import { type PageProps } from "$fresh/server.ts";

export default function Page(_props: PageProps) {
  return <p>hello world, from {_props.url.pathname}</p>;
}
