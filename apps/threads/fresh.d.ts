import { JSX } from "preact";

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "x-overlay": JSX.HTMLAttributes<HTMLElement>;
      "x-underlay": JSX.HTMLAttributes<HTMLElement>;
      "x-block": JSX.HTMLAttributes<HTMLElement>;
      "x-grid": JSX.HTMLAttributes<HTMLElement>;
      "x-flex": JSX.HTMLAttributes<HTMLElement>;
      "x-dropdown": JSX.HTMLAttributes<HTMLElement>;
    }
  }
}
