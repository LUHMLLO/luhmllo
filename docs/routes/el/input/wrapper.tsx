import { type PageProps } from "$fresh/server.ts";

export default function Page(_props: PageProps) {
  return (
    <>
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
    </>
  );
}
