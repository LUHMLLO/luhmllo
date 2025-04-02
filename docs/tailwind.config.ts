import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    colors: {
      "accent": "var(--clr-accent)",
      "context": "var(--clr-context)",
      "content": "var(--clr-content)",
      "surface": "var(--clr-surface)",

      "debug": "var(--clr-debug)",
      "error": "var(--clr-error)",
      "info": "var(--clr-info)",
      "success": "var(--clr-success)",
    },
    fontSize: {
      "xs": "var(--type-xs)",
      "sm": "var(--type-sm)",
      "md": "var(--type-md)",
      "nm": "var(--type-nm)",
      "lg": "var(--type-lg)",
      "xl": "var(--type-xl)",
    },
    spacing: {
      "xs": "var(--xs)",
      "sm": "var(--sm)",
      "md": "var(--md)",
      "nm": "var(--nm)",
      "lg": "var(--lg)",
      "xl": "var(--xl)",
    },
  },
} satisfies Config;
