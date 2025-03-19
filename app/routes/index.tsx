import { PageProps } from "$fresh/server.ts";

export default function Page(props: PageProps) {
  return <p>hello world, from {props.url.pathname}</p>;
}
