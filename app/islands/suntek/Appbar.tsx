import { asset } from "$fresh/runtime.ts";
import { MutableRef, useEffect, useRef } from "preact/hooks";

function handleResize(
  menuRef: MutableRef<HTMLElement | null>,
  moreRef: MutableRef<HTMLElement | null>,
) {
  if (!menuRef.current || !moreRef.current) {
    return console.error("missing required elements");
  }

  // check if menu has any children on it
  if (!menuRef.current?.children) {
    return console.warn("menu has no items in it");
  }

  const menuRec = menuRef.current.getBoundingClientRect();
  const moreRec = moreRef.current.getBoundingClientRect();

  // Get all items that might need to be moved
  const menuChildren = [...menuRef.current.children].filter((child) =>
    !child.classList.contains("active")
  );

  // Step 1: Check if any menu items need to move to "more" dropdown
  if (moreRec.right > menuRec.right) {
    // Sort items by reverse order (start from the end)
    menuChildren.sort((a, b) => {
      const orderA = parseInt((a as HTMLElement).dataset.order || "0", 10);
      const orderB = parseInt((b as HTMLElement).dataset.order || "0", 10);
      return orderB - orderA; // Reverse order (highest first)
    });

    // Move items to "more" dropdown in reverse order until no more clipping
    for (const child of menuChildren) {
      const childRec = child.getBoundingClientRect();
      const isChildClipping =
        childRec.right + (childRec.right - menuRec.right) >= menuRec.right;

      if (isChildClipping) {
        moreRef.current.prepend(child);
      } else {
        // If this item doesn't clip, no need to check others with lower order
        break;
      }
    }
  }
}

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
        <img src={asset("/media/suntek/silkleadbysuntek.svg")} alt="logo" />
      </figure>

      <hr />

      <nav id="menu">
        <a href="#" data-order="1">Pipelines</a>
        <a href="#" data-order="2">Tasks</a>
        <a href="#" data-order="3">Workflows</a>

        <hr data-order="4" />

        <a href="#" data-order="5">Campaigns</a>
        <a href="#" data-order="6">Contacts</a>
        <a href="#" data-order="7">Projects</a>

        <hr data-order="8" />

        <a href="#" data-order="9">Leads</a>
        <a href="#" data-order="10">Opportunities</a>
        <a href="#" data-order="11">Quotes</a>
        <a href="#" data-order="12">Sales</a>

        <hr data-order="13" />

        <a href="#" data-order="14">Inventories</a>
        <a href="#" data-order="15">Products</a>
        <a href="#" data-order="16">Properties</a>
        <a href="#" data-order="17">Services</a>
      </nav>

      <hr />

      <cat-dropdown id="more">
        <summary slot="summary">
          <a href="javascript:void(0)" data-props="--wrapper">
            <i class="icon">more_horiz</i>
          </a>
        </summary>
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
