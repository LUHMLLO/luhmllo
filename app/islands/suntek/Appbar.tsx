import { asset } from "$fresh/runtime.ts";
import { MutableRef, useEffect, useRef } from "preact/hooks";

function handleResize(
  menuRef: MutableRef<HTMLElement | null>,
  moreRef: MutableRef<HTMLElement | null>,
) {
  if (!menuRef.current || !moreRef.current) {
    return console.error("missing required elements");
  }

  const menu = menuRef.current;
  const more = moreRef.current;
  const summary = more.querySelector("summary"); // Locate the <summary> tag

  const menuRec = menu.getBoundingClientRect();
  let isClipping = false;

  // Move items **to** "more" if they overflow
  const menuChildren = [...menu.children].filter((child) =>
    !child.classList.contains("active")
  );

  menuChildren.sort((a, b) => {
    const orderA = parseInt((a as HTMLElement).dataset.order || "0", 10);
    const orderB = parseInt((b as HTMLElement).dataset.order || "0", 10);
    return orderB - orderA; // Highest order first
  });

  for (const child of menuChildren) {
    const childRec = child.getBoundingClientRect();
    isClipping =
      childRec.right + (childRec.right - menuRec.right) >= menuRec.right;

    if (isClipping) {
      more.insertBefore(child, summary?.nextSibling || null); // Ensure it stays AFTER <summary>
    } else {
      break;
    }
  }

  // Move items **back to menu** if there is space
  let moreItems = [...more.children].filter((child) => child !== summary);

  while (moreItems.length > 0) {
    const firstMoreItem = moreItems[0] as HTMLElement;
    more.removeChild(firstMoreItem);
    menu.appendChild(firstMoreItem);

    // Recalculate menu size after adding item
    const newChildRec = firstMoreItem.getBoundingClientRect();
    const newIsClipping =
      newChildRec.right + (newChildRec.right - menuRec.right) >= menuRec.right;

    if (newIsClipping) {
      // Move it back to `more` if it doesn't fit
      menu.removeChild(firstMoreItem);
      more.insertBefore(firstMoreItem, summary?.nextSibling || null);
      break;
    }

    // Update moreItems array after each iteration
    moreItems = [...more.children].filter((child) => child !== summary);
  }

  // Reorganize elements in both `menu` and `more`
  reorganizeItems(menu);
  reorganizeItems(more);
}

// Helper function to organize items by data-order
function reorganizeItems(container: HTMLElement) {
  const children = [...container.children];

  // Sort children by data-order
  children.sort((a, b) => {
    const orderA = parseInt((a as HTMLElement).dataset.order || "0", 10);
    const orderB = parseInt((b as HTMLElement).dataset.order || "0", 10);
    return orderA - orderB;
  });

  // Reinsert all children in the correct order
  for (const child of children) {
    container.appendChild(child);
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
