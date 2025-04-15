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

const codepens = [
  "homeExploration",
  "motionFactory",
  "notionPopOs",
  "railFloatingDrawer",
  "saasNotification",
  "smartHomeHub",
  "suburban",
  "uasd",
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

      <hr />

      <x-grid style="gap: var(--md); grid-template-columns: repeat(auto-fit, minmax(clamp(150px, 100%, 200px), 1fr));">
        {routes.map((path) => (
          <a href={"/el/" + path}>
            <span>
              {path}
            </span>
            <i className="icon">
              north_east
            </i>
          </a>
        ))}
      </x-grid>

      <hr />

      <x-grid style="gap: var(--md); grid-template-columns: repeat(auto-fit, minmax(clamp(150px, 100%, 200px), 1fr));">
        {codepens.map((path) => (
          <a href={"/codepens/" + path}>
            <span>
              {path}
            </span>
            <i className="icon">
              north_east
            </i>
          </a>
        ))}
      </x-grid>
    </>
  );
}
