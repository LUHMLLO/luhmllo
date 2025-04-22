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
  "notionSidebar",
  "railFloatingDrawer",
  "saasNotification",
  "smartHomeHub",
  "suburban",
  "uasd",
  "xylo",
];

export default function Page(_props: PageProps) {
  return (
    <>
      <header style="padding: var(--nm);">
        <h1>Lilycat</h1>
        <p>
          For better human interfaces &amp; user experiences while keeping
          styling where it belongs. Powered by dead simple CSS props and a mix
          of common convention rules.
        </p>
      </header>

      <x-grid style="gap: var(--md); grid-template-columns: repeat(auto-fit, minmax(clamp(150px, 100%, 200px), 1fr)); padding: var(--nm);">
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

      <x-grid style="gap: var(--md); grid-template-columns: repeat(auto-fit, minmax(clamp(150px, 100%, 200px), 1fr)); padding: var(--nm);">
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
