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
      <span>Native Elements</span>
      <h2>Learn their behaviour</h2>
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
