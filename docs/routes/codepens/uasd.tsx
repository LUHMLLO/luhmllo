import { type PageProps } from "$fresh/server.ts";
import { asset } from "$fresh/runtime.ts";

export default function Page(_props: PageProps) {
  return (
    <>
      <link
        rel="stylesheet"
        href={asset("/styles/codepens/uasd.css")}
      />

      <x-stack
        id="appbar"
        style="background-color: var(--clr-primary); gap: var(--md, 15px); padding: var(--md, 15px) var(--sm, 10px);"
      >
        <x-flex style="gap: var(--sm, 10px); place-items: center;">
          <button type="button" data-props="--primary">
            <i className="icon">arrow_back</i>
          </button>
          <figure style="flex-shrink: 1; width: min(100%, 100px);">
            <img
              src="/media/logo_uasd.svg"
              alt="logo"
              style="object-fit: contain;"
            />
          </figure>

          <x-row style="flex: 1 1; gap: inherit; place-content: end; place-items: center; width: 100%;">
            <a href={"#" + crypto.randomUUID()}>Intranet</a>
            <a href={"#" + crypto.randomUUID()}>Contactos</a>
            <a href={"#" + crypto.randomUUID()}>Correo</a>
            <a href={"#" + crypto.randomUUID()}>Egresados</a>
            <a href={"#" + crypto.randomUUID()}>Revistas Academicas</a>
            <button type="button" data-props="--accent">AUTOSERVICIO</button>
            <button type="button" data-props="--secondary">
              <i className="icon">menu</i>
            </button>
          </x-row>
        </x-flex>

        <label
          htmlFor="searchbar"
          data-props="--input"
          style="--inputBackground: var(--clr-secondary); border-radius: 1000px;"
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
      </x-stack>

      <figure style="height: 512px; width: 100%;">
        <img src="https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="banner" />
      </figure>

      <hr />

      <x-row style="align-items: start;">
        <i class="icon" style="--fill: 1; --size: var(--xl);">
          schedule
        </i>
        <p>
          Leave on Time Sensitive notifications from Props? This allows Props to
          deliver important notifications inmmediately
        </p>
      </x-row>

      <hr />

      <x-row style="flex-wrap: wrap;">
        <button type="button">Turn Off</button>
        <button type="button">Leave On</button>
      </x-row>
    </>
  );
}
