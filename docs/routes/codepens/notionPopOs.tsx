import { type PageProps } from "$fresh/server.ts";
import { asset } from "$fresh/runtime.ts";

export default function Page(_props: PageProps) {
  return (
    <>
      <link
        rel="stylesheet"
        href={asset("/styles/codepens/notionPopOS.css")}
      />

      <aside style="background-color: var(--clr-primary); gap: var(--lg); height: 100%; isolation: isolate; padding: var(--sm); position: relative; overflow: auto; width: 250px;">
        <x-flex
          data-props="--highlight"
          style="align-items:center; gap: var(--sm); padding: var(--xs);"
        >
          <button
            type="button"
            style="align-items: inherit; flex: 1 1 100%; gap: var(--xs); max-width: fit-content;"
          >
            <figure data-props="--squircle">
              <img
                class="photo"
                alt="Luis R. Melo"
                src="https://cdn.dribbble.com/users/2246724/avatars/normal/733a7307a4408930f70132c7436077f1.jpg?1742320251"
              />
            </figure>
            <span style="flex: 1 1 100%; overflow: clip; text-overflow: ellipsis; white-space: nowrap; max-width: fit-content;">
              @Username/Fullname
            </span>
            <i className="icon">keyboard_arrow_down</i>
          </button>

          <x-flex data-props="--button-group" style="flex-shrink: 0;">
            <button type="button">
              <i className="icon" style="--size: 15px;">left_panel_close</i>
            </button>
            <button type="button">
              <i className="icon" style="--size: 15px;">add_2</i>
            </button>
          </x-flex>
        </x-flex>
        <x-group>
          <button
            type="button"
            style="--background: transparent; border-radius: 0; width: 100%;"
          >
            <i class="icon">
              search
            </i>
            <span style="flex: 1 1; text-align: left;">Search</span>
            <i class="icon">
              keyboard_command_key
            </i>
          </button>

          <button
            type="button"
            style="--background: transparent; border-radius: 0; width: 100%;"
          >
            <i class="icon">
              stars_2
            </i>
            <span style="flex: 1 1; text-align: left;">AI Assistant</span>
          </button>

          <button
            type="button"
            style="--background: transparent; border-radius: 0; width: 100%;"
          >
            <i class="icon">
              home
            </i>
            <span style="flex: 1 1; text-align: left;">Home</span>
          </button>

          <button
            type="button"
            style="--background: transparent; border-radius: 0; width: 100%;"
          >
            <i class="icon">
              inbox
            </i>
            <span style="flex: 1 1; text-align: left;">Inbox</span>
          </button>
        </x-group>
        <hr />
        <x-group>
          <span>Favorites</span>
          <button
            type="button"
            style="--background: transparent; border-radius: 0; width: 100%;"
          >
            <i class="icon">
              asterisk
            </i>
            <span style="flex: 1 1; text-align: left;">Page Name</span>
          </button>
          <button
            type="button"
            style="--background: transparent; border-radius: 0; width: 100%;"
          >
            <i class="icon">
              asterisk
            </i>
            <span style="flex: 1 1; text-align: left;">Page Name</span>
          </button>
          <button
            type="button"
            style="--background: transparent; border-radius: 0; width: 100%;"
          >
            <i class="icon">
              asterisk
            </i>
            <span style="flex: 1 1; text-align: left;">Page Name</span>
          </button>
          <button
            type="button"
            style="--background: transparent; border-radius: 0; width: 100%;"
          >
            <i class="icon">
              asterisk
            </i>
            <span style="flex: 1 1; text-align: left;">Page Name</span>
          </button>
          <button
            type="button"
            style="--background: transparent; border-radius: 0; width: 100%;"
          >
            <i class="icon">
              asterisk
            </i>
            <span style="flex: 1 1; text-align: left;">Page Name</span>
          </button>
          <button
            type="button"
            style="--background: transparent; border-radius: 0; width: 100%;"
          >
            <i class="icon">
              asterisk
            </i>
            <span style="flex: 1 1; text-align: left;">Page Name</span>
          </button>
        </x-group>

        <dialog
          open
          style="bottom: 0; margin: auto auto 0 auto; padding: var(--xl); position: sticky; width: 100%; z-index: 5;"
        >
          <i className="icon">
            event
          </i>
        </dialog>
      </aside>

      <main>
        <nav id="appbar">
          <div className="icon"></div>
        </nav>
      </main>
    </>
  );
}
