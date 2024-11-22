import type { JSX } from "preact";

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "cat-dropdown": JSX.HTMLAttributes<HTMLElement>;
      "ly-flex": JSX.HTMLAttributes<HTMLElement>;
    }
  }
}
