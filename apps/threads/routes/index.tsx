export default function Page() {
  return (
    <main id="views">
      {[...Array(3)].map(() => {
        return (
          <article key={crypto.randomUUID()}>
            <aside>
              <figure className="aspect-[1/1] h-[35px] shrink-0">
                <img
                  src="https://cdn.dribbble.com/users/71720/avatars/normal/1a484c634c93683bdc5dc91afa3e9067.png"
                  alt="avatar"
                />
              </figure>
              <hr data-props="--y" />
            </aside>

            <x-flex className="flex-col grow shrink gap-xs">
              <header>
                <h6>Bram Vanhaeren</h6>
                <span className="text-accent--1">@bram.vanhaeren</span>
              </header>

              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perferendis repudiandae architecto reprehenderit voluptatibus
                earum.
              </p>

              <x-flex className="flex-wrap">
                <span>#design</span>
                <span>#ui</span>
                <span>#ux</span>
                <span>#prototype</span>
                <span>#figma</span>
              </x-flex>

              <figure className="bg-surface--2 w-full">
                <img
                  src="https://cdn.dribbble.com/userupload/17456145/file/original-4e68d384d0264473f5bf737d1f51027a.png"
                  alt="articlethumbnail"
                />
              </figure>
            </x-flex>

            <aside>
              <x-dropdown>
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
              </x-dropdown>
            </aside>
          </article>
        );
      })}
    </main>
  );
}
