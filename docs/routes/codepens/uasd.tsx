import { type PageProps } from "$fresh/server.ts";
import { asset } from "$fresh/runtime.ts";

export default function Page(_props: PageProps) {
  return (
    <>
      <link
        rel="stylesheet"
        href={asset("/styles/codepens/uasd.css")}
      />

      <x-block id="appbar">
        <x-flex>
          <figure style="flex-shrink: 1; width: min(100%, 100px);">
            <img
              src="/media/logo_uasd.svg"
              alt="logo"
              style="object-fit: contain;"
            />
          </figure>

          <x-group style="flex: 1 1; place-content: center; place-items: center; width: 100%;">
            <button type="button" data-props="--accent">AUTOSERVICIO</button>
          </x-group>
        </x-flex>

        <label
          htmlFor="searchbar"
          data-props="--input"
          style="border-radius: 1000px;"
        >
          <input
            type="text"
            name="searchbar"
            id="searchbar"
            placeholder="Busca en el portal"
          />
          <button type="button" data-props="--accent">
            <i className="icon">search</i>
          </button>
        </label>

        <hr />

        <x-row style="align-items: start;">
          <i class="icon" style="--fill: 1; --size: var(--xl);">
            schedule
          </i>
          <p>
            Leave on Time Sensitive notifications from Props? This allows Props
            to deliver important notifications inmmediately
          </p>
        </x-row>

        <hr />

        <x-row style="flex-wrap: wrap;">
          <button type="button">Turn Off</button>
          <button type="button">Leave On</button>
        </x-row>
      </x-block>
    </>
  );
}
