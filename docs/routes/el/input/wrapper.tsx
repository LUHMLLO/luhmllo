import { type PageProps } from "$fresh/server.ts";

export default function Page(_props: PageProps) {
  return (
    <x-grid style="gap: var(--nm, 20px); grid-auto-rows: max-content; min-height: 100dvh; place-content: safe center;">
      <input type="text" placeholder="search" />

      <x-flex data-props="--input">
        <i class="icon">
          search
        </i>
        <input type="text" placeholder="search" />
        <i class="icon">
          keyboard_command_key
        </i>
      </x-flex>
    </x-grid>
  );
}
