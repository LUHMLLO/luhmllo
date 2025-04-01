import { JSX } from "preact";

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      // Deprecated Formatting Tags
      "font": JSX.HTMLAttributes<HTMLElement> & {
        color?: string;
        face?: string;
        size?: number | string;
      };
      "basefont": JSX.HTMLAttributes<HTMLElement> & {
        color?: string;
        face?: string;
        size?: number | string;
      };
      "center": JSX.HTMLAttributes<HTMLElement>;
      "big": JSX.HTMLAttributes<HTMLElement>;
      "small": JSX.HTMLAttributes<HTMLElement>;
      "strike": JSX.HTMLAttributes<HTMLElement>;
      "s": JSX.HTMLAttributes<HTMLElement>;
      "tt": JSX.HTMLAttributes<HTMLElement>;

      // Deprecated List and Directory Tags
      "dir": JSX.HTMLAttributes<HTMLDirectoryElement>;
      "menu": JSX.HTMLAttributes<HTMLMenuElement>;

      // Deprecated Text Behavior Tags
      "nobr": JSX.HTMLAttributes<HTMLElement>;
      "blink": JSX.HTMLAttributes<HTMLElement>;
      "marquee": JSX.HTMLAttributes<HTMLMarqueeElement> & {
        behavior?: "scroll" | "slide" | "alternate";
        direction?: "left" | "right" | "up" | "down";
        scrollamount?: number;
        scrolldelay?: number;
      };

      // Deprecated Semantic Tags
      "acronym": JSX.HTMLAttributes<HTMLElement> & {
        title?: string;
      };

      // Deprecated Multimedia Tags
      "applet": JSX.HTMLAttributes<HTMLElement> & {
        code?: string;
        codebase?: string;
        width?: number | string;
        height?: number | string;
        alt?: string;
        name?: string;
      };

      // Deprecated Text Rendering Tags
      "listing": JSX.HTMLAttributes<HTMLPreElement>;
      "xmp": JSX.HTMLAttributes<HTMLPreElement>;
      "isindex": JSX.HTMLAttributes<HTMLElement> & {
        prompt?: string;
      };

      // Additional Custom Elements (if needed)
      "underlay": JSX.HTMLAttributes<HTMLElement>;
      "cat-dropdown": JSX.HTMLAttributes<HTMLElement>;
      "ly-flex": JSX.HTMLAttributes<HTMLElement>;
    }
  }
}

// Optional: Export for clarity
export type DeprecatedHTMLElements =
  | "font"
  | "basefont"
  | "center"
  | "big"
  | "small"
  | "strike"
  | "s"
  | "tt"
  | "dir"
  | "menu"
  | "nobr"
  | "blink"
  | "marquee"
  | "acronym"
  | "applet"
  | "listing"
  | "xmp"
  | "isindex";
