import { type PageProps } from "$fresh/server.ts";

export default function Page(_props: PageProps) {
  return (
    <x-grid style="gap: var(--nm); grid-auto-rows: max-content; min-height: 100dvh; place-content: safe center;">
      <input type="range" id="ir" value="10" />
    </x-grid>
  );
}
