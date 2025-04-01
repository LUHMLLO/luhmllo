import { asset } from "$fresh/runtime.ts";
import { useEffect, useRef } from "preact/hooks";
import { isNotificationsPaneActive } from "#lib/stores/notificationsPane.ts";
import { handleResize } from "#lib/functions/handleResize.ts";

export default function Appbar() {
  const menuRef = useRef<HTMLElement | null>(null);
  const moreRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Initialize refs after component mounts
    menuRef.current = document.getElementById("menu");
    moreRef.current = document.getElementById("more");

    const resizeHandler = () => handleResize(menuRef, moreRef);

    if (menuRef.current && moreRef.current) {
      // Run handler on first render
      resizeHandler();

      // Use a more efficient resize listener with proper cleanup
      globalThis.addEventListener("resize", resizeHandler);

      return () => {
        globalThis.removeEventListener("resize", resizeHandler);
      };
    }
  }, []);

  return (
    <nav id="appBar">
      <figure class="h-xl shrink-0">
        <img src={asset("/media/silkleadbysuntek.svg")} alt="logo" />
      </figure>

      <hr />

      <nav id="menu">
        <a href={"#" + crypto.randomUUID()} data-order="1">Pipelines</a>
        <a href={"#" + crypto.randomUUID()} data-order="2">Tasks</a>
        <a href={"#" + crypto.randomUUID()} data-order="3">Workflows</a>

        <hr data-order="4" />

        <a href={"#" + crypto.randomUUID()} data-order="5">Campaigns</a>
        <a href={"#" + crypto.randomUUID()} data-order="6">Contacts</a>
        <a href={"#" + crypto.randomUUID()} data-order="7">Projects</a>

        <hr data-order="8" />

        <a href={"#" + crypto.randomUUID()} data-order="9">Leads</a>
        <a href={"#" + crypto.randomUUID()} data-order="10">Opportunities</a>
        <a href={"#" + crypto.randomUUID()} data-order="11">Quotes</a>
        <a href={"#" + crypto.randomUUID()} data-order="12">Sales</a>

        <hr data-order="13" />

        <a href={"#" + crypto.randomUUID()} data-order="14">Inventories</a>
        <a href={"#" + crypto.randomUUID()} data-order="15">Products</a>
        <a href={"#" + crypto.randomUUID()} data-order="16">Properties</a>
        <a href={"#" + crypto.randomUUID()} data-order="17">Services</a>
      </nav>

      <hr />

      <x-dropdown id="more">
        <summary slot="summary">
          <a href="javascript:void(0)">
            <i class="icon">more_horiz</i>
          </a>
        </summary>
      </x-dropdown>

      <hr />

      {/* User controls */}
      <nav id="actions">
        <a href="#search">
          <i class="icon">search</i>
        </a>
        <a href="#new">
          <i class="icon">add_2</i>
        </a>
        <a href="#inbox">
          <i class="icon">group</i>
        </a>
        <a href="#inbox">
          <i class="icon">calendar_today</i>
        </a>
        <a
          href="#settings"
          onClick={() => (isNotificationsPaneActive.value =
            !isNotificationsPaneActive.value)}
        >
          <i class="icon">notifications</i>
        </a>
        <a href="#settings">
          <i class="icon">settings</i>
        </a>
        <figure class="aspect-square h-xl shrink-0 rounded">
          <img src={asset("/media/avatar.png")} alt="avatar" />
        </figure>
        <a href="#apps">
          <i class="icon">apps</i>
        </a>
      </nav>
    </nav>
  );
}
