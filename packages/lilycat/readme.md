# Lilycat 🐱✨

Lilycat is a modern, lightweight CSS library and UI kit designed to simplify
frontend development with elegant, complex-looking components, leveraging native
HTML tags for maximum flexibility.

## 🌟 Features

- **Design Tokens**: Advanced CSS variables using `@property` syntax for
  consistent, reusable styling across the entire library
- **CSS Reset**: Provides a clean, consistent baseline across different browsers
- **CSS Normalization**: Ensures uniform rendering and cross-browser
  compatibility
- **Icon Utilities**: Easy-to-use `.icon` class for integrating Material Symbols
  (note: Material Symbols not included)

## 🚀 Installation

### Deno

Install using Deno's JSR package manager:

```bash
deno add jsr:@luhmllo/lilycat
```

### Import

```typescript
import { icons, normalize, reset, tokens } from "@luhmllo/lilycat";
```

## 💡 Usage Examples

### Deno Fresh Integration

In your `_app.tsx`, integrate Lilycat styles seamlessly:

```tsx
import { type PageProps } from "$fresh/server.ts";
import { icons, normalize, reset, tokens } from "@luhmllo/lilycat";

export default function App({ Component }: PageProps) {
  return (
    <html lang="en">
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `${tokens}${reset}${normalize}${icons}`,
          }}
        />
        {/* Rest of your head content */}
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
