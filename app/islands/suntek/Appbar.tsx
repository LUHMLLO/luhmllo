import { asset } from "$fresh/runtime.ts";
import { JSX } from "preact";

export default function Appbar(): JSX.Element {
  return (
    <nav id="appBar">
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

        <hr />

        <cat-dropdown id="more">
          <summary slot="summary">
            <a href={void 0} data-props="--wrapper">
              <i class="icon">more_horiz</i>
            </a>
          </summary>
          <div id="more__menu">
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
          </div>
        </cat-dropdown>
      </nav>

      <hr />

      {/* User controls */}
      <nav id="actions">
        <a href="#search" aria-label="Search" data-props="--wrapper">
          <i class="icon">search</i>
        </a>
        <a href="#new" aria-label="Add new" data-props="--wrapper">
          <i class="icon">add_2</i>
        </a>
        <a href="#inbox" aria-label="Inbox" data-props="--wrapper">
          <i class="icon">markunread_mailbox</i>
        </a>
        <a href="#inbox" aria-label="Inbox" data-props="--wrapper">
          <i class="icon">early_on</i>
        </a>
        <a href="#settings" aria-label="Settings" data-props="--wrapper">
          <i class="icon">settings</i>
        </a>
        <figure class="aspect-square h-xl shrink-0 rounded">
          <img src={asset("/media/suntek/avatar.png")} alt="avatar" />
        </figure>
        <a href="#apps" aria-label="Apps" data-props="--wrapper">
          <i class="icon">apps</i>
        </a>
      </nav>
    </nav>
  );
}
