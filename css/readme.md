# Lilycat 🐱✨

Lilycat is a modern, lightweight CSS library and UI kit designed to simplify
frontend development with elegant, complex-looking components, leveraging native
HTML tags for maximum flexibility.

## 🌟 Features

- **Tokens**: Advanced CSS variables using `@property` syntax for consistent, reusable styling across the entire library
- **Reset**: Provides a clean, consistent baseline across different browsers
- **Normalize**: Ensures uniform rendering and cross-browser compatibility
- **Customs**: Provides a set of custom tags that helps minimize the amount of utility classes and enhance readibility
- **Icons**: Easy-to-use `.icon` class for integrating Material Symbols (note: Material Symbols not included)
- **Props**: Provides a set of custom data-props that applies extra functionalities for many tags

## 🚀 Installation

### Deno

Install using Deno's JSR package manager:

```bash
deno add jsr:@luhmllo/lilycat
```

### Import

```typescript
import { customs, icons, normalize, props, reset, tokens } from "@luhmllo/lilycat";
```

## 💡 Usage Examples

### Deno Fresh Integration

In your `_app.tsx`, integrate Lilycat styles seamlessly:

```tsx
import { asset } from "$fresh/runtime.ts";
import { type PageProps } from "$fresh/server.ts";
import {
  customs,
  icons,
  normalize,
  props,
  reset,
  tokens,
} from "../../css/dist/mod.ts";

export default function App({ Component, url }: PageProps) {
  const canonicalUrl = new URL(url.pathname, url.origin).href;

  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta
          name="description"
          content="lilys desing system and ui kit"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />

        <link rel="canonical" href={canonicalUrl} />
        <link
          rel="icon"
          type="image/svg+xml"
          sizes="any"
          href={asset("/media/logo.svg")}
        />

        <title>lilys</title>

        <style
          lang="css"
          // deno-lint-ignore react-no-danger
          dangerouslySetInnerHTML={{
            __html: `
            ${tokens}
            ${reset}
            ${normalize}
            ${customs}
            ${icons}
            ${props}`,
          }}
        />

        {/* global styles */}
        <link rel="stylesheet" href={asset("/styles/app.css")} />

        {/* tailwind utilities */}
        <link rel="stylesheet" href={asset("/styles/tailwind.css")} />

        {/* google fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
```

## 🛠 Benefits

- Lightweight and performant
- Native HTML tag support
- Highly customizable
- Cross-browser compatible
- Modern design principles

## 🧾 License

### MIT License

See `LICENSE` for complete details.

## 🔗 Project Links

- **Repository**: [LUHMLLO/lilycat](https://github.com/LUHMLLO/lilycat)
- **Deno Package**: [jsr:@luhmllo/lilycat](https://jsr.io/@luhmllo/lilycat)

## 🤝 Contributing

Contributions are welcome! Please check the repository for guidelines.
