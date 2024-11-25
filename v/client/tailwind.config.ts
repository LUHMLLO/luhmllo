import { type Config } from "tailwindcss";

const Scales = {
  "xs": "var(--scale-xs)",
  "sm": "var(--scale-sm)",
  "md": "var(--scale-md)",
  "nm": "var(--scale-nm)",
  "lg": "var(--scale-lg)",
  "xl": "var(--scale-xl)",
};

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    colors: {
      "accent--1": "var(--clr-accent-1)",
      "accent--2": "var(--clr-accent-2)",
      "accent--3": "var(--clr-accent-3)",
      "accent--4": "var(--clr-accent-4)",

      "context--1": "var(--clr-context-1)",
      "context--2": "var(--clr-context-2)",
      "context--3": "var(--clr-context-3)",
      "context--4": "var(--clr-context-4)",

      "content--1": "var(--clr-content-1)",
      "content--2": "var(--clr-content-2)",
      "content--3": "var(--clr-content-3)",
      "content--4": "var(--clr-content-4)",

      "surface--1": "var(--clr-surface-1)",
      "surface--2": "var(--clr-surface-2)",
      "surface--3": "var(--clr-surface-3)",
      "surface--4": "var(--clr-surface-4)",
    },
    fontSize: Scales,
    spacing: Scales,
  },
} satisfies Config;
