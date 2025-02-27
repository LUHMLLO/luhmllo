export default function Appbar() {
  return (
    <nav id="appbar">
      <span className="icon">apps</span>

      <hr />

      <div>
        <a href="javascript:void(0)">Dashboard</a>
        <a href="javascript:void(0)">Hub</a>
        <a href="javascript:void(0)">Resources</a>
      </div>

      {
        /* <hr />

      <div>
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
        <details>
          <summary>More</summary>
        </details>
      </div> */
      }

      <hr />

      <div>
        <span className="icon">calendar_month</span>
        <span className="icon">settings</span>
        <span className="icon">notifications</span>
        <span className="icon">refresh</span>
      </div>

      <hr />

      <figure className="rounded">
        <img src="/media/avatar.png" alt="avatar" />
      </figure>
    </nav>
  );
}
