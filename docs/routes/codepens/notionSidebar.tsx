import { asset, Head } from "$fresh/runtime.ts";
import { type PageProps } from "$fresh/server.ts";

export default function Page(_props: PageProps) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href={asset("/codepens/notionSidebar.css")}
        />
        <script
          type="module"
          src={asset("/codepens/notionSidebar.js")}
        />
      </Head>

      <aside id="notion__sidebar" className="expanded">
        <x-flex data-props="--highlight">
          <button type="button">
            <figure data-props="--squircle">
              <img
                alt="Photo: Luis R. Melo"
                src="https://cdn.dribbble.com/users/2246724/avatars/normal/733a7307a4408930f70132c7436077f1.jpg?1742320251"
              />
            </figure>
            <span>
              Luis R. Melo
            </span>
            <i className="icon">keyboard_arrow_down</i>
          </button>

          <x-flex data-props="--segmented-controls" style="flex-shrink: 0;">
            <button id="sidebar-hide" type="button">
              <i className="icon" style="--size: 15px;">left_panel_close</i>
            </button>
            <button type="button">
              <i className="icon" style="--size: 15px;">add_2</i>
            </button>
          </x-flex>
        </x-flex>

        <hr />

        <x-group>
          <button type="button">
            <i class="icon">
              search
            </i>
            <span>Search</span>
            <i class="icon">
              keyboard_command_key
            </i>
          </button>
          <button type="button">
            <i class="icon">
              stars_2
            </i>
            <span>AI Assistant</span>
          </button>
          <button type="button">
            <i class="icon">
              home
            </i>
            <span>Home</span>
          </button>
          <button type="button">
            <i class="icon">
              inbox
            </i>
            <span>Inbox</span>
          </button>
        </x-group>

        <hr />

        <x-group>
          <span>Favorites</span>
          <details>
            <summary type="button">
              <i class="icon">
                asterisk
              </i>
              <span>Page Name</span>
            </summary>
            <ul>
              <button type="button">item</button>
              <button type="button">item</button>
              <button type="button">item</button>
              <button type="button">item</button>
            </ul>
          </details>
          <button type="button">
            <i class="icon">
              asterisk
            </i>
            <span>Page Name</span>
          </button>
          <button type="button">
            <i class="icon">
              asterisk
            </i>
            <span>Page Name</span>
          </button>
        </x-group>

        <hr />

        <x-group>
          <span>Shared</span>
          <details>
            <summary type="button">
              <i class="icon">
                asterisk
              </i>
              <span>Page Name</span>
            </summary>
            <ul>
              <button type="button">item</button>
              <button type="button">item</button>
              <button type="button">item</button>
              <button type="button">item</button>
            </ul>
          </details>
        </x-group>

        <hr />

        <x-group>
          <span>Private</span>
          <details>
            <summary type="button">
              <i class="icon">
                asterisk
              </i>
              <span>Page Name</span>
            </summary>
            <ul>
              <button type="button">item</button>
              <button type="button">item</button>
              <button type="button">item</button>
              <button type="button">item</button>
            </ul>
          </details>
        </x-group>

        <hr />

        <x-group>
          <button type="button">
            <i class="icon">
              settings
            </i>
            <span>Settings</span>
          </button>
          <button type="button">
            <i class="icon">
              browse
            </i>
            <span>Templates</span>
          </button>
          <button type="button">
            <i class="icon">
              delete
            </i>
            <span>Trash</span>
          </button>
        </x-group>

        <hr />

        <x-flex>
          <button type="button">
            <i className="icon">
              calendar_today
            </i>
          </button>
          <button type="button">
            <i className="icon">
              email
            </i>
          </button>
          <hr style="background-color: transparent; flex: 1 1;" />
          <button type="button">
            <i className="icon">
              help
            </i>
          </button>
        </x-flex>
      </aside>

      <main id="notion__main">
      </main>
    </>
  );
}
