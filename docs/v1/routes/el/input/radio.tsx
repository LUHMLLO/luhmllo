import { type PageProps } from "$fresh/server.ts";

export default function Page(_props: PageProps) {
  return (
    <x-grid style="gap: var(--nm); grid-auto-rows: max-content; min-height: 100dvh; place-content: safe center;">
      <label htmlFor="radio1">
        <input
          id="radio1"
          name="radio"
          type="radio"
          checked
        />{" "}
        Option 1
      </label>

      <label htmlFor="radio2">
        <input id="radio2" name="radio" type="radio" /> Option 2
      </label>

      <label htmlFor="radio3">
        <input id="radio3" name="radio" type="radio" /> Option 3
      </label>
    </x-grid>
  );
}
