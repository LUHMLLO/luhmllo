import { MutableRef } from "preact/hooks";

export function handleResize(
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
export function reorganizeItems(container: HTMLElement) {
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
