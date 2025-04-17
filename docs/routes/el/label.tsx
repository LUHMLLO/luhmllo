import { type PageProps } from "$fresh/server.ts";

export default function Page(_props: PageProps) {
  return (
    <x-grid style="gap: var(--nm); grid-auto-rows: max-content; min-height: 100dvh; place-content: safe center;">
      <label htmlFor="example">
        im a label example{" "}
        <input
          type="text"
          name="example"
          placeholder="im just an example"
          disabled
        />
      </label>
    </x-grid>
  );
}
