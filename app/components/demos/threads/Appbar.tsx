import { asset } from "$fresh/runtime.ts";

export default function Appbar() {
  return (
    <div id="appbar">
      <figure className="aspect-[1/1] h-[35px]">
        <img
          src={asset("/media/threads/logo.svg")}
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
      </figure>
      <nav>
        <button type="button" className="currentView">
          Popular
        </button>
        <button type="button">
          Me
        </button>
      </nav>
    </div>
  );
}
