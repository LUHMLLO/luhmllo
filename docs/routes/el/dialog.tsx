import { type PageProps } from "$fresh/server.ts";

export default function Page(_props: PageProps) {
  return (
    <x-grid style="gap: var(--nm); grid-auto-rows: max-content; min-height: 100dvh; place-content: safe center;">
      <script
        // deno-lint-ignore react-no-danger
        dangerouslySetInnerHTML={{
          __html: `
  document.addEventListener("DOMContentLoaded", () => {
    const buttonOpen = document.getElementById("modalOpen");
    const buttonClose = document.getElementById("modalClose");
    const modalDialog = document.getElementById("modal");

    if (buttonOpen && buttonClose && modalDialog instanceof HTMLDialogElement) {      
          buttonOpen.addEventListener("click", () => {
            modalDialog.showModal();
          });        
      
          buttonClose.addEventListener("click", () => {
            modalDialog.close();
          });
    }
  });
`,
        }}
      />

      <button id="modalOpen" type="button">
        open modal
      </button>

      <dialog id="modal">
        <x-flex style="place-items:center; padding-inline: var(--md); height: 50px;">
          <p>Service clients</p>
          <button id="modalClose" type="button" style="display: contents;">
            <i className="icon">close_small</i>
          </button>
        </x-flex>

        <label
          htmlFor="searchbar"
          data-props="--input"
          style="margin-inline: var(--sm);"
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

        <x-stack style="gap: var(--md); place-items: center; padding: var(--xl);">
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
    </x-grid>
  );
}
