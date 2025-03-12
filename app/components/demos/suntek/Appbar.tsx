import { asset } from "$fresh/runtime.ts";

export default function Appbar() {
  return (
    <nav id="appbar">
      <figure className="h-xl shrink-0">
        <img src={asset("/media/suntek/silkleadbysuntek.svg")} alt="logo" />
      </figure>

      <hr />

      <nav className="flex">
        <a href="#">Calendars</a>
        <a href="#">Dashboards</a>
      </nav>

      <hr />

      <nav className="flex">
        <a href="#">Pipelines</a>
        <a href="#">Tasks</a>
        <a href="#">Workflows</a>
      </nav>

      <hr />

      <nav className="flex">
        <a href="#">Campaigns</a>
        <a href="#">Contacts</a>
        <a href="#">Projects</a>
      </nav>

      <hr />

      <nav className="flex">
        <a href="#">Leads</a>
        <a href="#">Opportunities</a>
        <a href="#">Quotes</a>
        <a href="#">Sales</a>
      </nav>

      <hr />

      <nav className="flex flex-grow flex-shrink">
        <a href="#">Inventories</a>
        <a href="#">Products</a>
        <a href="#">Services</a>
        <a href="#" data-props="--wrapper">
          <i className="icon">more_horiz</i>
        </a>
      </nav>

      <hr />

      <nav className="flex">
        <a href="#" data-props="--wrapper">
          <i className="icon">search</i>
        </a>
        <a href="#" data-props="--wrapper">
          <i className="icon">add_2</i>
        </a>
        <a href="#" data-props="--wrapper">
          <i className="icon">inbox</i>
        </a>
        <a href="#" data-props="--wrapper">
          <i className="icon">settings</i>
        </a>
        <figure className="aspect-[1] h-xl shrink-0 rounded">
          <img src={asset("/media/suntek/avatar.png")} alt="avatar" />
        </figure>
        <a href="#" data-props="--wrapper">
          <i className="icon">apps</i>
        </a>
      </nav>
    </nav>
  );
}
