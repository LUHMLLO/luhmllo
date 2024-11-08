import type { JSX } from "preact";

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "ly-dropdown": JSX.HTMLAttributes<HTMLElement>;
      "ly-flex": JSX.HTMLAttributes<HTMLElement>;
    }
  }
}
