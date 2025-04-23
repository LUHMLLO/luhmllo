import { type PageProps } from "$fresh/server.ts";
import { asset, Head } from "$fresh/runtime.ts";

export default function Page(_props: PageProps) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href={asset("/codepens/uasd.css")}
        />
      </Head>

      <x-stack id="appbar">
        <x-flex>
          <button type="button">
            <i className="icon">arrow_back</i>
          </button>
          <figure style="flex-shrink: 1; width: min(100%, 100px);">
            <img
              src="/media/logo_uasd.svg"
              alt="logo"
              style="object-fit: contain;"
            />
          </figure>

          <x-row id="menu" style="flex: 1 1; gap: inherit; place-content: end; place-items: center; width: 100%;">
            <a href={"#" + crypto.randomUUID()} style="color: inherit;">
              Intranet
            </a>
            <a href={"#" + crypto.randomUUID()} style="color: inherit;">
              Contactos
            </a>
            <a href={"#" + crypto.randomUUID()} style="color: inherit;">
              Correo
            </a>
            <a href={"#" + crypto.randomUUID()} style="color: inherit;">
              Egresados
            </a>
            <a href={"#" + crypto.randomUUID()} style="color: inherit;">
              Revistas Academicas
            </a>
            <button type="button" data-props="--accent">AUTOSERVICIO</button>
            <button type="button" data-props="--secondary">
              <i className="icon">menu</i>
            </button>
          </x-row>
        </x-flex>

        <label
          htmlFor="searchbar"
          data-props="--input"
          style="--inputBackground: var(--clr-background); border-radius: var(--xl);"
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
        <img
          src="https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="banner"
        />
      </figure>
    </>
  );
}
