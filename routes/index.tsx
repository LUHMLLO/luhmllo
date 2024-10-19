export default function Home() {
  return (
    <div
      id="body"
      data-props=""
      className="overflow-y-auto"
    >
      {[...Array(7)].map((i) => {
        return (
          <article key={i} className="flex gap-xs py-nm">
            <aside className="shrink-0">
              <figure className="w-[35px]">
                <img
                  src="https://cdn.dribbble.com/users/71720/avatars/normal/1a484c634c93683bdc5dc91afa3e9067.png?1714739541"
                  alt="avatar"
                />
              </figure>
              <hr className="grow h-full shrink-1" />
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
                    src="https://cdn.dribbble.com/userupload/7433663/file/original-c95ecd504412daf4a12626361ebfcd45.png?resize=1024x768"
                    alt=""
                  />
                </figure>
              </div>
            </div>
            <aside className="shrink-0">
              <icon className="icon">
                more_horiz
              </icon>
            </aside>
          </article>
        );
      })}
    </div>
  );
}
