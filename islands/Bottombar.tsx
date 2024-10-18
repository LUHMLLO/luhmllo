export default function Bottombar() {
  return (
    <nav id="appbar" data-props="--y" className="w-full overflow-clip">
      <div className="flex grow h-[50px] w-full">
        <div data-props="--x" className="flex grow"></div>
        <div data-props="--x" className="flex grow justify-center items-end">
          <figure className="aspect-[1/1] h-[35px] w-[35px]">
            <img
              src="/logo.svg"
              alt="the Fresh logo: a sliced lemon dripping with juice"
            />
          </figure>
        </div>
        <div data-props="--x" className="flex grow"></div>
      </div>
      <div className="flex grow h-[50px] w-full">
        <button className="place-content-center grow h-full border-b-1">
          Popular
        </button>
        <button className="place-content-center grow h-full">
          Me
        </button>
      </div>
    </nav>
  );
}
