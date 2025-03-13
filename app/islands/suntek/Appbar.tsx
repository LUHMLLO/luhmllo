import { asset } from "$fresh/runtime.ts";
import { JSX } from "preact";

export default function Appbar(): JSX.Element {

  return (
    <nav id="appBar" class="flex items-center justify-between w-full">
      <figure class="h-xl shrink-0">
        <img src={asset("/media/suntek/silkleadbysuntek.svg")} alt="logo" />
      </figure>

      <hr />

      <nav id="menu">
          <a href="#">Calendars</a>
          <a href="#">Dashboards</a>

        <hr />

          <a href="#">Pipelines</a>
          <a href="#">Tasks</a>
          <a href="#">Workflows</a>

        <hr />

          <a href="#">Campaigns</a>
          <a href="#">Contacts</a>
          <a href="#">Projects</a>

        <hr />

          <a href="#">Leads</a>
          <a href="#">Opportunities</a>
          <a href="#">Quotes</a>
          <a href="#">Sales</a>
      </nav>

      <hr />

      {/* Dropdown menu */}
      <cat-dropdown id="more" className="more">
        <summary
          slot="summary"
          type="button"
        >
          <i class="icon">more_horiz</i>
        </summary>
        <div class="more__menu" ></div>
      </cat-dropdown>

      <hr />

      {/* User controls */}
      <nav class="flex items-center gap-2">
        <a href="#search" class="p-2" aria-label="Search">
          <i class="icon">search</i>
        </a>
        <a href="#new" class="p-2" aria-label="Add new">
          <i class="icon">add_2</i>
        </a>
        <a href="#inbox" class="p-2" aria-label="Inbox">
          <i class="icon">inbox</i>
        </a>
        <a href="#settings" class="p-2" aria-label="Settings">
          <i class="icon">settings</i>
        </a>
        <figure class="aspect-square h-xl shrink-0 rounded">
          <img src={asset("/media/suntek/avatar.png")} alt="avatar" />
        </figure>
        <a href="#apps" aria-label="Apps">
          <i class="icon">apps</i>
        </a>
      </nav>
    </nav>
  );
}
