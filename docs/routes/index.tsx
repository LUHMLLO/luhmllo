import { type PageProps } from "$fresh/server.ts";

const routes = [
  "a",
  "article",
  "button",
  "details",
  "dialog",
  "input",
  "label",
  "select",
  "table",
  "textarea",
];

export default function Page(_props: PageProps) {
  return (
    <>
      <x-stack style="gap: var(--nm); padding: var(--md, 15px);">
        <nav id="docs-appbar" style="place-items: center; position: sticky; top: 0; z-index: 10;">
          <a
            href="/"
            style=" text-box: none; "
          >
            <figure style="aspect-ratio: 1/1; width: 50px;">
              <img src="/media/lilycat.png" alt="logo" />
            </figure>
          </a>

          <x-row style="gap: var(--md, 15px); place-content: end; place-items: center; width: 100%;">
            <button type="button">
              <i className="icon">
                menu
              </i>
            </button>
          </x-row>
        </nav>

        <header>
          <h1>Lilycat</h1>
          <p>
            For better human interfaces &amp; user experiences while keeping
            styling where it belongs. Powered by dead simple CSS props and a mix
            of common convention rules.
          </p>
        </header>

        <x-grid style="gap: var(--md); grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));">
          {routes.map((path) => (
            <a href={"/el/" + path}>
              <x-card>
                <x-flex>
                  <span>
                    {path}
                  </span>
                  <span>
                    <i className="icon">
                      north_east
                    </i>
                  </span>
                </x-flex>
              </x-card>
            </a>
          ))}
        </x-grid>
      </x-stack>
    </>
  );
}
