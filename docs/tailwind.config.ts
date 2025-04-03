import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    colors: {
      "background": "var(--clr-background)",
      "text": "var(--clr-text)",
      "primary": "var(--clr-primary)",
      "secondary": "var(--clr-secondary)",
      "accent": "var(--clr-accent)",

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
