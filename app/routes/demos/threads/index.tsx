export default function Page() {
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
                      src="https://cdn.dribbble.com/userupload/17456145/file/original-4e68d384d0264473f5bf737d1f51027a.png"
                      alt="articlethumbnail"
                    />
                  </figure>
                </div>
              </div>
              <aside className="shrink-0">
                <cat-dropdown>
                  <summary slot="summary">
                    <span className="icon">
                      more_horiz
                    </span>
                  </summary>
                  <button type="button">
                    option
                  </button>
                  <button type="button">
                    option
                  </button>
                  <button type="button">
                    option
                  </button>
                  <button type="button">
                    option
                  </button>
                </cat-dropdown>
              </aside>
            </article>

            <hr data-props="--x" />
          </>
        );
      })}
    </div>
  );
}
