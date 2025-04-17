import { type PageProps } from "$fresh/server.ts";

export default function Page(_props: PageProps) {
  return (
    <x-grid style="gap: var(--nm); grid-auto-rows: max-content; min-height: 100dvh; place-content: safe center;">
      <select id="select">
        <optgroup label="Option Group">
          <option>Option One</option>
          <option>Option Two</option>
          <option>Option Three</option>
        </optgroup>
      </select>

      <select id="select_multiple" multiple>
        <optgroup label="Option Group">
          <option>Option One</option>
          <option>Option Two</option>
          <option>Option Three</option>
        </optgroup>
      </select>
    </x-grid>
  );
}
