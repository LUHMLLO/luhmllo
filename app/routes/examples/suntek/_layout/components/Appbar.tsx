export default function Appbar() {
  return (
    <nav id="appbar">
      <figure className="h-xl shrink-0">
        <img src="/media/gizmobyhytech.svg" alt="logo" />
      </figure>

      <hr />

      <div className="flex">
        <a href="javascript:void(0)">Dashboard</a>
        <a href="javascript:void(0)">Hub</a>
        <a href="javascript:void(0)">Resources</a>
      </div>

      <hr />

      <div className="flex flex-grow flex-shrink">
        {[
          "Leads",
          "Opportunities",
          "Solar Project",
          "Energy Efficiency",
          "Properties",
          "Contacts",
          "Reps",
          "Telemarketers",
        ].map((link, i) => {
          return <a href="javascript:void(0)" key={i}>{link}</a>;
        })}
        <span className="icon">more_horiz</span>
      </div>

      <hr />

      <div className="flex">
        <span className="icon">search</span>
        <span className="icon">add_2</span>
        <span className="icon">notifications</span>
        <span className="icon">settings</span>
        <figure className="aspect-[1] h-xl shrink-0 rounded w-xl">
          <img src="/media/avatar.png" alt="avatar" />
        </figure>
        <span className="icon">apps</span>
      </div>
    </nav>
  );
}
