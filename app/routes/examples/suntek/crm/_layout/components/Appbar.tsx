export default function Appbar() {
  return (
    <nav id="appbar" data-props="--y">
      <nav id="appbar__nav" className="gap-xs">
        <span className="icon">apps</span>

        <hr data-props="--y" />

        <div className="flex gap-xs">
          <a href="javascript:void(0)">Dashboard</a>
          <a href="javascript:void(0)">Hub</a>
          <details>
            <summary>Resources</summary>
          </details>
        </div>

        <hr data-props="--y" />

        <div className="flex gap-xs">
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
        </div>

        <hr data-props="--y" />

        <div className="flex gap-xs">
          <span className="icon">calendar_month</span>
          <span className="icon">settings</span>
          <span className="icon">notifications</span>
          <span className="icon">refresh</span>
        </div>

        <hr data-props="--y" />

        <details data-props="--dropdown">
          <summary>
            <figure className="rounded">
              <img src="/img/avatar.png" alt="avatar" />
            </figure>
            <div>
              <p>Robert O'Conner</p>
              <p>super user</p>
            </div>
            <span className="icon">keyboard_arrow_down</span>
          </summary>
          <button>call to action</button>
        </details>
      </nav>

      <nav id="appbar__toolbar">
      </nav>
    </nav>
  );
}
