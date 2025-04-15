import { type PageProps } from "$fresh/server.ts";
import { asset, Head } from "$fresh/runtime.ts";

export default function Page(_props: PageProps) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href={asset("/codepens/homeExploration.css")}
        />
      </Head>

      <x-window>
        <x-sublayer>
          <figure style="height: 100%; width: 100%;">
            <img
              src="https://images.unsplash.com/photo-1742730709645-448101d10586?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="background"
            />
          </figure>
          <x-surlayer style="background-color: hsl(0deg, 0%, 0%, 0.15); backdrop-filter: blur(5px); visibility: visible;" />
        </x-sublayer>

        <x-stack style="gap: 15px; height: 100dvh; margin: auto; place-content: center; place-items: center; text-align: center; width: min(100%, 50dvw);">
          <i className="icon" style="--size: 75px;">
            asterisk
          </i>
          <h6>
            Quasi adipisci dolorum dignissimos rerum eaque voluptas
          </h6>
          <label
            htmlFor="search"
            data-props="--input"
            style="background-color: hsl(from var(--clr-text) h s l / 25%); backdrop-filter: blur(5px); outline-color: transparent; width: 100%;"
          >
            <input
              type="text"
              placeholder="Ask a follow-up"
            />
            <i className="icon">arrow_right_alt</i>
          </label>
        </x-stack>

        <x-flex style="inset: auto 0 0 0; margin: auto; padding: var(--nm); position: fixed; width: fit-content;">
          <i className="icon" style="--size: 50px;">home</i>
          <i className="icon" style="--size: 50px;">bookmark</i>
          <i className="icon" style="--size: 50px;">person</i>
        </x-flex>
      </x-window>
    </>
  );
}
