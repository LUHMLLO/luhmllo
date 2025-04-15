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
      <header>
        <h1>Lilycat</h1>
        <p>
          For better human interfaces &amp; user experiences while keeping
          styling where it belongs. Powered by dead simple CSS props and a mix
          of common convention rules.
        </p>
      </header>

      <x-grid style="gap: var(--md); grid-template-columns: repeat(auto-fit, minmax(clamp(0px, 100px, 150px), 1fr));">
        {routes.map((path) => (
          <a href={"/el/" + path} style="display: contents;">
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
    </>
  );
}
