export default function Bottombar() {
  return (
    <nav id="bottombar">
      <a href="#home" data-props="--wrapper">
        <i className="icon">
          home
        </i>
      </a>

      <a href="#search" data-props="--wrapper">
        <i className="icon">
          search
        </i>
      </a>

      <a href="#post" data-props="--wrapper">
        <i className="icon">
          edit_square
        </i>
      </a>

      <a href="#activity" data-props="--wrapper">
        <i className="icon">
          favorite
        </i>
      </a>

      <a href="#me" data-props="--wrapper">
        <i className="icon">
          person
        </i>
      </a>
    </nav>
  );
}
