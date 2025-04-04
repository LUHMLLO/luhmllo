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
      <nav className="items-center gap-md place-between p-md w-full z-10">
        <a href="/">
          <figure className="aspect-[1/1] h-5xl">
            <img src="/media/logo.svg" alt="logo" />
          </figure>
        </a>

        <nav className="items-center gap-md place-content-end grow">
          <a href="/" className="text-inherit">Get Started</a>
          <a href="/test" className="text-inherit">HTML Tags</a>
          <button type="button" disabled>
            Playground (not available)
          </button>
        </nav>
      </nav>

      <header>
        <h1>Lilycat</h1>
        <p>
          For better human interfaces &amp; user experiences while keeping
          styling where it belongs
        </p>
        <p>
          Powered by dead simple CSS props and a mix of common convention rules.
        </p>
      </header>
      <x-grid className="gap-md grid-cols-2">
        {routes.map((path) => (
          <a href={"/el/" + path} className="w-full">
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
