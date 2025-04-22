# Lilycat 🐱✨

[![Sponsor on GitHub](https://img.shields.io/badge/sponsor-💖-ff69b4?style=flat-square)](https://github.com/sponsors/LUHMLLO)

Lilycat is a minimalist yet powerful CSS library designed to keep HTML clean and CSS efficient. Unlike modern trends that bloat HTML with excessive utility classes, Lilycat embraces the principle of separation of concerns - keeping styling where it belongs: in CSS.

This library is for developers who appreciate the elegance of writing CSS while using utility-based approaches in a way that enhances, rather than replaces, basic styling practices. Rather than forcing you to learn a new syntax or overloading your HTML with Tailwind-like classes, Lilycat aims to provide structured, reusable styles with native HTML support.

## 🌟 Features

- **Tokens**: CSS variables using `@property` for fine-grained customization.
- **Reset & Normalize**: A consistent foundation across browsers.
- **Custom Tags**: Minimizes utility class clutter while enhancing readability.
- **Icons**: Simple `.icon` class for Material Symbols integration.
- **Props**: Custom `data-*` attributes for added functionality without unnecessary class pollution.

## 🚀 Installation

### Deno

Install using JSR package manager:

```bash
deno add jsr:@luhmllo/lilycat
```

### Import

```typescript
import { customs, icons, normalize, props, reset, tokens } from "@luhmllo/lilycat";
```

## 💡 Usage Example

### Deno Fresh Integration

To integrate Lilycat styles in a Fresh project:

```tsx
import { asset } from "$fresh/runtime.ts";
import { type PageProps } from "$fresh/server.ts";
import * as lilycat from "@luhmllo/lilycat";

export default function App({ Component, url }: PageProps) {
  const canonicalUrl = new URL(url.pathname, url.origin).href;

  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="description" content="Lilycat Design System & UI Kit" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />

        <link rel="canonical" href={canonicalUrl} />
        <link rel="icon" type="image/svg+xml" href={asset("/media/lilycat.png")} />

        <title>Lilycat</title>

        <style
          lang="css"
          // deno-lint-ignore react-no-danger
          dangerouslySetInnerHTML={{ __html: lilycat.all }}
        />

        <link rel="stylesheet" href={asset("/styles/app.css")} />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
```

## 🤌 Why Lilycat?

- **HTML should be clean** – Debugging is a nightmare when every element is flooded with classes.
- **CSS should be a skill, not a chore** – Writing CSS isn’t hard; avoiding it shouldn’t be a goal.
- **Utility-first should assist, not replace** – Utility classes can be helpful, but they shouldn’t replace fundamental styling knowledge.
- **Separation of concerns matters** – A core programming principle that should apply to styling too.

## 💪 Benefits

- Lightweight and efficient.
- Supports native HTML elements.
- Cross-browser consistency.
- Encourages modern, maintainable styling practices.

## 📞 Project Links

- **Repository**: [LUHMLLO/lilycat](https://github.com/LUHMLLO/lilycat)
- **Deno Package**: [jsr:@luhmllo/lilycat](https://jsr.io/@luhmllo/lilycat)

## 🗃️ License

Lilycat is released under the **MIT License**. See `LICENSE` for details.

I build Lilycat and other tools out of passion for better web development. If you find them helpful, consider sponsoring me so I can keep making things that matter.
