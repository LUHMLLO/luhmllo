export default function Home() {
  return (
    <div id="app" className="container">
      <ly-dropdown>
        <summary
          slot="summary"
          className="rounded-[var(--scale-xl)]"
          style="--bg: transparent;"
        >
          <figure className="aspect-[1/1] flex-shrink-0 content-center p-0 w-auto h-[var(--scale-xl)] rounded-[var(--scale-xl)]">
            <img
              src="https://images.unsplash.com/photo-1704895598909-dd19e72fc3ae?q=80&amp;w=1160&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="avatar"
            />
          </figure>
          <flex data-props="--y">
            <span>username</span>
            <small className="clr-context">
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
  );
}
