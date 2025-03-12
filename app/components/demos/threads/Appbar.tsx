import { asset } from "$fresh/runtime.ts";

export default function Appbar() {
  return (
    <nav
      id="appbar"
      data-props="--y --expand --propagate"
      className="container w-full"
    >
      <div
        data-props="--expand --propagate"
        className="flex grow h-[50px] w-full"
      >
        <div data-props="--x" className="flex-1"></div>
        <div data-props="--x" className="flex flex-1 justify-center items-end">
          <figure className="aspect-[1/1] h-[35px] w-[35px]">
            <img
              src={asset("/media/threads/logo.svg")}
              alt="the Fresh logo: a sliced lemon dripping with juice"
            />
          </figure>
        </div>
        <div data-props="--x" className="flex-1"></div>
      </div>
      <div
        id="viewsbar"
        data-props="--expand --propagate"
        className="flex grow h-[50px] w-full"
      >
        <button
          type="button"
          className="place-content-center grow h-full flex-1 currentView"
        >
          Popular
        </button>
        <button
          type="button"
          className="place-content-center grow h-full flex-1"
        >
          Me
        </button>
      </div>
    </nav>
  );
}
