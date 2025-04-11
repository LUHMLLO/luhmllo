import { type PageProps } from "$fresh/server.ts";

export default function Page(_props: PageProps) {
  return (
    <>
      <script
        // deno-lint-ignore react-no-danger
        dangerouslySetInnerHTML={{
          __html: `
  document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("modalTrigger");
    const dialog = document.getElementById("modal");

    if (button && dialog instanceof HTMLDialogElement) {
      dialog.showModal();
    }
  });
`,
        }}
      />

      <button id="modalTrigger" type="button">
        open modal
      </button>

      <dialog id="modal">
        <x-flex style="place-items:center; padding-inline: var(--md, 15px); height: 50px;">
          <p>Service clients</p>
          <button type="button" style="display: contents;">
            <i className="icon">close_small</i>
          </button>
        </x-flex>

        <label
          htmlFor="searchbar"
          data-props="--input"
          style="border-radius: 0;"
        >
          <i class="icon">
            search
          </i>
          <input
            type="text"
            className="rounded-none w-full"
            name="searchbar"
            placeholder="Type in to filter list"
          />
          <i class="icon">
            keyboard_command_key
          </i>
        </label>

        <x-stack style="gap: var(--md, 15px); place-items: center; padding: var(--xl, 30px);">
          <i className="icon" style="--size: 50px;">block</i>
          <x-block style="text-align: center;">
            <p>No service clients found.</p>
            <p>Try another search query or add a new service client.</p>
          </x-block>
          <button type="button">
            <i className="icon">add_2</i>
            <span>Add client</span>
          </button>
        </x-stack>
      </dialog>
    </>
  );
}
