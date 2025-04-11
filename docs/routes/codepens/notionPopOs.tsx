import { type PageProps } from "$fresh/server.ts";
import { asset } from "$fresh/runtime.ts";

export default function Page(_props: PageProps) {
  return (
    <>
      <link
        rel="stylesheet"
        href={asset("/styles/codepens/notionPopOS.css")}
      />

      <aside style="background-color: var(--clr-primary); gap: var(--lg); height: 100%; isolation: isolate; padding: var(--sm, 10px); position: relative; overflow: auto; width: 250px;">
        <x-flex
          data-props="--highlight"
          style="align-items: center; background-color: inherit; border-radius: var(--xl); box-shadow: 0 -15vmax 15vmax 15vmax var(--clr-primary); gap: var(--xs, 5px); position: sticky; top: 0; z-index: 5;"
        >
          <button
            type="button"
            style="align-items: inherit; flex: 1 1 100%; gap: var(--xs); max-width: fit-content;"
          >
            <figure data-props="--squircle">
              <img
                alt="Photo: Luis R. Melo"
                src="https://cdn.dribbble.com/users/2246724/avatars/normal/733a7307a4408930f70132c7436077f1.jpg?1742320251"
              />
            </figure>
            <span style="flex: 1 1 100%; overflow: clip; text-overflow: ellipsis; white-space: nowrap; max-width: fit-content;">
              Luis R. Melo
            </span>
            <i className="icon">keyboard_arrow_down</i>
          </button>

          <x-flex data-props="--segmented-controls" style="flex-shrink: 0;">
            <button type="button">
              <i className="icon" style="--size: 15px;">left_panel_close</i>
            </button>
            <button type="button">
              <i className="icon" style="--size: 15px;">add_2</i>
            </button>
          </x-flex>
        </x-flex>

        <hr />

        <x-group>
          <button
            type="button"
            style="width: 100%;"
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
            style="width: 100%;"
          >
            <i class="icon">
              stars_2
            </i>
            <span style="flex: 1 1; text-align: left;">AI Assistant</span>
          </button>
          <button
            type="button"
            style="width: 100%;"
          >
            <i class="icon">
              home
            </i>
            <span style="flex: 1 1; text-align: left;">Home</span>
          </button>
          <button
            type="button"
            style="width: 100%;"
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
            style="width: 100%;"
          >
            <i class="icon">
              asterisk
            </i>
            <span style="flex: 1 1; text-align: left;">Page Name</span>
          </button>
          <button
            type="button"
            style="width: 100%;"
          >
            <i class="icon">
              asterisk
            </i>
            <span style="flex: 1 1; text-align: left;">Page Name</span>
          </button>
          <button
            type="button"
            style="width: 100%;"
          >
            <i class="icon">
              asterisk
            </i>
            <span style="flex: 1 1; text-align: left;">Page Name</span>
          </button>
        </x-group>

        <hr />

        <x-group>
          <span>Shared</span>
          <button
            type="button"
            style="width: 100%;"
          >
            <i class="icon">
              asterisk
            </i>
            <span style="flex: 1 1; text-align: left;">Page Name</span>
          </button>
        </x-group>

        <hr />

        <x-group>
          <span>Private</span>
          <button
            type="button"
            style="width: 100%;"
          >
            <i class="icon">
              asterisk
            </i>
            <span style="flex: 1 1; text-align: left;">Page Name</span>
          </button>
          <button
            type="button"
            style="width: 100%;"
          >
            <i class="icon">
              asterisk
            </i>
            <span style="flex: 1 1; text-align: left;">Page Name</span>
          </button>
          <button
            type="button"
            style="width: 100%;"
          >
            <i class="icon">
              asterisk
            </i>
            <span style="flex: 1 1; text-align: left;">Page Name</span>
          </button>
          <button
            type="button"
            style="width: 100%;"
          >
            <i class="icon">
              asterisk
            </i>
            <span style="flex: 1 1; text-align: left;">Page Name</span>
          </button>
          <button
            type="button"
            style="width: 100%;"
          >
            <i class="icon">
              asterisk
            </i>
            <span style="flex: 1 1; text-align: left;">Page Name</span>
          </button>
          <button
            type="button"
            style="width: 100%;"
          >
            <i class="icon">
              asterisk
            </i>
            <span style="flex: 1 1; text-align: left;">Page Name</span>
          </button>
        </x-group>

        <hr />

        <x-group>
          <button
            type="button"
            style="width: 100%;"
          >
            <i class="icon">
              settings
            </i>
            <span style="flex: 1 1; text-align: left;">Settings</span>
          </button>
          <button
            type="button"
            style="width: 100%;"
          >
            <i class="icon">
              browse
            </i>
            <span style="flex: 1 1; text-align: left;">Templates</span>
          </button>
          <button
            type="button"
            style="width: 100%;"
          >
            <i class="icon">
              delete
            </i>
            <span style="flex: 1 1; text-align: left;">Trash</span>
          </button>
        </x-group>

        <hr />

        <x-flex style="align-items: center; background-color: var(--clr-background); border-radius: var(--xs, 5px); box-shadow: 0 15vmax 15vmax 15vmax var(--clr-primary); gap: var(--sm, 15px); inset: auto auto 0 auto; margin: auto auto 0 auto; padding: var(--md); position: sticky; width: 100%; z-index: 5;">
          <button type="button" style="display: contents;">
            <i className="icon">
              calendar_today
            </i>
          </button>
          <button type="button" style="display: contents;">
            <i className="icon">
              email
            </i>
          </button>
          <hr style="background-color: transparent; flex: 1 1;" />
          <button type="button" style="display: contents;">
            <i className="icon">
              help
            </i>
          </button>
        </x-flex>
      </aside>

      <main>
        <nav id="appbar">
          <div className="icon"></div>
        </nav>
      </main>
    </>
  );
}
