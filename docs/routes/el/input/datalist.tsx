import { type PageProps } from "$fresh/server.ts";

export default function Page(_props: PageProps) {
  return (
    <x-grid style="gap: var(--nm, 20px); grid-auto-rows: max-content; min-height: 100dvh; place-content: safe center;">
      <input type="text" id="idl" list="example-list" />{" "}
      <datalist id="example-list">
        <option value="Example #1"></option>
        <option value="Example #2"></option>
        <option value="Example #3"></option>
      </datalist>
    </x-grid>
  );
}
