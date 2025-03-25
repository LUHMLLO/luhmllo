import { type PageProps } from "$fresh/server.ts";

export default function Greet(_props: PageProps) {
  return <div>Hello {_props.params.name}</div>;
}
