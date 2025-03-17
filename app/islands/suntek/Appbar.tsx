import { asset } from "$fresh/runtime.ts";
import { useEffect, useRef } from "preact/hooks";

export default function Appbar() {
  const menuRef = useRef<HTMLElement | null>(null);
  const moreRef = useRef<HTMLElement | null>(null);

  const handleResize = () => {
    console.log(`menu: ${menuRef.current}`);
    console.log(`more: ${moreRef.current}`);
  };

  useEffect(() => {
    // Initialize refs after component mounts
    menuRef.current = document.getElementById("menu");
    moreRef.current = document.getElementById("more");

    if (menuRef.current && moreRef.current) {
      // Run handler on first render
      handleResize();

      // Run handler on window resize
      globalThis.addEventListener("resize", handleResize);
      return () => {
        globalThis.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <nav id="appBar">
      <figure class="h-xl shrink-0">
        <img src={asset("/media/suntek/silkleadbysuntek.svg")} alt="logo" />
      </figure>

      <hr />

      <nav id="menu">
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

        <a href="#">Inventories</a>
        <a href="#">Products</a>
        <a href="#">Properties</a>
        <a href="#">Services</a>
      </nav>

      <hr />

      <cat-dropdown id="more">
        <summary slot="summary">
          <a href="javascript:void(0)" data-props="--wrapper">
            <i class="icon">more_horiz</i>
          </a>
        </summary>

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

        <a href="#">Inventories</a>
        <a href="#">Products</a>
        <a href="#">Properties</a>
        <a href="#">Services</a>
      </cat-dropdown>

      <hr />

      {/* User controls */}
      <nav id="actions">
        <a href="#search" data-props="--wrapper">
          <i class="icon">search</i>
        </a>
        <a href="#new" data-props="--wrapper">
          <i class="icon">add_2</i>
        </a>
        <a href="#inbox" data-props="--wrapper">
          <i class="icon">group</i>
        </a>
        <a href="#inbox" data-props="--wrapper">
          <i class="icon">calendar_today</i>
        </a>
        <a href="#settings" data-props="--wrapper">
          <i class="icon">notifications</i>
        </a>
        <a href="#settings" data-props="--wrapper">
          <i class="icon">settings</i>
        </a>
        <figure class="aspect-square h-xl shrink-0 rounded">
          <img src={asset("/media/suntek/avatar.png")} alt="avatar" />
        </figure>
        <a href="#apps" data-props="--wrapper">
          <i class="icon">apps</i>
        </a>
      </nav>
    </nav>
  );
}
