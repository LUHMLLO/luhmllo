export default function Appbar() {
  return (
    <nav id="appbar" data-props="--y --expand --propagate">
      <nav>
        <a href="void(0)">
          <i className="material-symbols-outlined">roofing</i>
        </a>
        <button type="button" data-props="--outline">
          Explore
        </button>
      </nav>

      <nav>
        <a href="void(0)">
          About us
        </a>
        <a href="void(0)">
          Services
        </a>
        <a href="void(0)">
          Get in contact
        </a>
      </nav>
    </nav>
  );
}
