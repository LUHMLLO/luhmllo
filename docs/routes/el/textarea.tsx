import { type PageProps } from "$fresh/server.ts";

export default function Page(_props: PageProps) {
  return (
    <textarea
      id="textarea"
      rows={8}
      cols={48}
      placeholder="Enter your message here"
    >
    </textarea>
  );
}
