import { type PageProps } from "$fresh/server.ts";
import { asset } from "$fresh/runtime.ts";

export default function Page(_props: PageProps) {
  return (
    <>
      <link
        rel="stylesheet"
        href={asset("/styles/codepens/rail_floatingDrawer.css")}
      />
      <script
        // deno-lint-ignore react-no-danger
        dangerouslySetInnerHTML={{
          __html: `
      document.addEventListener("DOMContentLoaded", () => {
        const button = document.getElementById("menu-button");
        const dialog = document.getElementById("drawer");

        if (button && dialog instanceof HTMLDialogElement) {
          button.addEventListener("click", () => {
            dialog.open ? dialog.close() : dialog.show();
          });
        }
      });
    `,
        }}
      />

      <x-stack id="navigation">
        <nav id="rail">
          <a href="#">
            <i class="icon" style="--fill: 1;">
              asterisk
            </i>
          </a>
          <x-flex id="menu-icons">
            <a href="#">
              <i class="icon">
                search
              </i>
            </a>
            <a href="#">
              <i class="icon">
                co_present
              </i>
            </a>
            <a href="#">
              <i class="icon">
                docs
              </i>
            </a>
            <a href="#">
              <i class="icon">
                smart_display
              </i>
            </a>
            <button id="menu-button" type="button">
              <i class="icon">
                menu
              </i>
            </button>
          </x-flex>
        </nav>

        <dialog id="drawer">
          <span>label</span>
          <x-flex data-props="--input">
            <i class="icon">
              search
            </i>
            <input type="text" placeholder="search" />
            <i class="icon">
              keyboard_command_key
            </i>
          </x-flex>
          <hr />
          <span>label</span>
          <a href="#">
            <i class="icon">
              home
            </i>
            <span>home</span>
          </a>
          <a href="#">
            <i class="icon">
              home
            </i>
            <span>home</span>
          </a>
          <a href="#">
            <i class="icon">
              home
            </i>
            <span>home</span>
          </a>
          <a href="#">
            <i class="icon">
              home
            </i>
            <span>home</span>
          </a>
          <hr />
          <span>label</span>
          <a href="#">
            <i class="icon">
              home
            </i>
            <span>home</span>
          </a>
          <a href="#">
            <i class="icon">
              home
            </i>
            <span>home</span>
          </a>
        </dialog>
      </x-stack>

      <main>
        <h1>hello world</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
          inventore, quasi corporis ad amet a, architecto hic doloremque illo
          error voluptatum eum. Alias neque nesciunt, incidunt ullam voluptas
          officia ex.
        </p>
      </main>
    </>
  );
}
