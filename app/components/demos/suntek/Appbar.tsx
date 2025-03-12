export default function Appbar() {
  return (
    <nav id="appbar">
      <figure className="h-xl shrink-0">
        <img src="/media/suntek/silkleadbysuntek.svg" alt="logo" />
      </figure>

      <hr />

      <nav className="flex">
        <a href={void 0}>Calendars</a>
        <a href={void 0}>Dashboards</a>
      </nav>

      <hr />

      <nav className="flex">
        <a href={void 0}>Pipelines</a>
        <a href={void 0}>Tasks</a>
        <a href={void 0}>Workflows</a>
      </nav>

      <hr />

      <nav className="flex">
        <a href={void 0}>Campaigns</a>
        <a href={void 0}>Contacts</a>
        <a href={void 0}>Projects</a>
      </nav>

      <hr />

      <nav className="flex">
        <a href={void 0}>Leads</a>
        <a href={void 0}>Opportunities</a>
        <a href={void 0}>Quotes</a>
        <a href={void 0}>Sales</a>
      </nav>

      <hr />

      <nav className="flex flex-grow flex-shrink">
        <a href={void 0}>Inventories</a>
        <a href={void 0}>Products</a>
        <a href={void 0}>Services</a>
        <i className="icon">more_horiz</i>
      </nav>

      <hr />

      <nav className="flex">
        <a href={void 0} data-props="--wrapper">
          <i className="icon">search</i>
        </a>
        <a href={void 0} data-props="--wrapper">
          <i className="icon">add_2</i>
        </a>
        <a href={void 0} data-props="--wrapper">
          <i className="icon">inbox</i>
        </a>
        <a href={void 0} data-props="--wrapper">
          <i className="icon">settings</i>
        </a>
        <figure className="aspect-[1] h-xl shrink-0 rounded w-xl">
          <img src="/media/suntek/avatar.png" alt="avatar" />
        </figure>
        <a href={void 0} data-props="--wrapper">
          <i className="icon">apps</i>
        </a>
      </nav>
    </nav>
  );
}
