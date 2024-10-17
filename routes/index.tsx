import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);

  return (
    <div id="app">
      <div className="container">
        <img
          src="/logo.svg"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1>Welcome to Fresh</h1>
        <Counter count={count} />
        <ly-dropdown>
          <summary
            slot="summary"
            className="radius-5xl"
            style="--bg: transparent;"
          >
            <figure className="aspect-[1/1] noshrink place-center p-0 w-auto h-5xl radius-5xl">
              <img
                src="https://images.unsplash.com/photo-1704895598909-dd19e72fc3ae?q=80&amp;w=1160&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="avatar"
              />
            </figure>
            <flex data-props="--y">
              <span className="txt-md">username</span>
              <small className="clr-context txt-xs txt-500">
                email@address.com
              </small>
            </flex>
          </summary>
          <button>option</button>
          <button>option</button>
          <button>option</button>
          <button>option</button>
        </ly-dropdown>
      </div>
    </div>
  );
}
