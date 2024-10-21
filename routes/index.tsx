export default function Home() {
  return (
    <div
      id="views"
      data-props="--expand"
      className="overflow-y-auto"
    >
      {[...Array(7)].map((i) => {
        return (
          <>
            <article key={i} className="flex gap-xs py-nm">
              <aside className="items-center gap-nm shrink-0">
                <figure className="w-[35px]">
                  <img
                    src="https://cdn.dribbble.com/users/71720/avatars/normal/1a484c634c93683bdc5dc91afa3e9067.png"
                    alt="avatar"
                  />
                </figure>
                <hr data-props="--y" />
              </aside>
              <div className="flex flex-col grow shrink gap-xs">
                <header>
                  <h3>Bram Vanhaeren</h3>
                  <span className="text-accent--1">@bram.vanhaeren</span>
                </header>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Perferendis repudiandae architecto reprehenderit voluptatibus
                  earum.
                </p>
                <div className="flex flex-wrap gap-">
                  <span>#design</span>
                  <span>#ui</span>
                  <span>#ux</span>
                  <span>#prototype</span>
                  <span>#figma</span>
                </div>
                <div className="flex g-xs py-xs">
                  <figure className="bg-surface--2 w-full">
                    <img
                      src="https://images.unsplash.com/photo-1728926125424-9b0eb80b9d86?q=80&w=512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="articlethumbnail"
                    />
                  </figure>
                </div>
              </div>
              <aside className="shrink-0">
                <ly-dropdown>
                  <summary slot="summary">
                    <span className="icon">
                      more_horiz
                    </span>
                  </summary>
                  <button>
                    option
                  </button>
                  <button>
                    option
                  </button>
                  <button>
                    option
                  </button>
                  <button>
                    option
                  </button>
                </ly-dropdown>
              </aside>
            </article>

            <hr data-props="--x" />
          </>
        );
      })}
    </div>
  );
}
