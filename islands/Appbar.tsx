export default function Appbar() {
  return (
    <nav id="appbar" data-props="--y" className="w-full">
      <div className="flex grow h-[50px] w-full">
        <div data-props="--x" className="flex-1"></div>
        <div data-props="--x" className="flex flex-1 justify-center items-end">
          <figure className="aspect-[1/1] h-[35px] w-[35px]">
            <img
              src="/logo.svg"
              alt="the Fresh logo: a sliced lemon dripping with juice"
            />
          </figure>
        </div>
        <div data-props="--x" className="flex-1"></div>
      </div>
      <div className="flex grow h-[50px] w-full">
        <button className="place-content-center grow h-full border-b-4 border-indigo-500 flex-1">
          Popular
        </button>
        <button className="place-content-center grow h-full flex-1">
          Me
        </button>
      </div>
    </nav>
  );
}
