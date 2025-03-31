import { type PageProps } from "$fresh/server.ts";

export default function Page(_props: PageProps) {
  return <input type="range" id="ir" value="10" />;
}
