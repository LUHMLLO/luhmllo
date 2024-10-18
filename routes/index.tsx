import Appbar from "../islands/Appbar.tsx";

export default function Home() {
  return (
    <main id="app" className="container">
      <Appbar />
      <div id="body">
        <article className="flex gap-xs py-nm">
          <aside>
            <figure className="w-[40px]">
              <img
                src="https://cdn.dribbble.com/users/71720/avatars/normal/1a484c634c93683bdc5dc91afa3e9067.png?1714739541"
                alt="avatar"
              />
            </figure>
            <hr className="grow h-full shrink-1" />
          </aside>
          <div className="grow">
            <header>
              <h3>title</h3>
              <span>subtitle</span>
            </header>
          </div>
          <aside>
            <ly-dropdown>
              <summary slot="summary">
                <icon className="icon">
                  more_horiz
                </icon>
              </summary>
              <button>
                <icon className="icon">
                  settings
                </icon>
              </button>
            </ly-dropdown>
          </aside>
        </article>
      </div>
    </main>
  );
}
