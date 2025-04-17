import { type PageProps } from "$fresh/server.ts";

export default function Page(_props: PageProps) {
  return (
    <x-grid style="gap: var(--nm); grid-auto-rows: max-content; min-height: 100dvh; place-content: safe center;">
      <textarea
        id="textarea"
        rows={8}
        cols={48}
        placeholder="Enter your message here"
      >
      </textarea>
    </x-grid>
  );
}
