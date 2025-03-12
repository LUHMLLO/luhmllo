export default function Appbar() {
  return (
    <nav id="appbar">
      <figure className="h-xl shrink-0">
        <img src="/media/gizmobyhytech.svg" alt="logo" />
      </figure>

      <hr />

      <nav className="flex">
        <a href={void 0}>Calendar</a>
        <a href={void 0}>Dashboard</a>
        <a href={void 0}>Pipelines</a>
      </nav>

      <hr />

      <nav className="flex flex-grow flex-shrink">
        {[
          "Contacts",
          "Leads",
          "Opportunities",
          "Quotes",
          "Reports",
        ].map((link, i) => {
          return <a href={void 0} key={i + link}>{link}</a>;
        })}
        <i className="icon">more_horiz</i>
      </nav>

      <hr />

      <nav className="flex">
        <i className="icon">search</i>
        <i className="icon">add_2</i>
        <i className="icon">notifications</i>
        <i className="icon">settings</i>
        <figure className="aspect-[1] h-xl shrink-0 rounded w-xl">
          <img src="/media/avatar.png" alt="avatar" />
        </figure>
        <i className="icon">apps</i>
      </nav>
    </nav>
  );
}
