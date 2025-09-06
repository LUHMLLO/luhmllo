# Lily: The CSS Artisan's Library 🎨✨

> Minimal, attribute-based CSS for building great products, not complex
> abstractions.

Tired of bloated frameworks and complex setups? **Lily** is a different kind of
CSS library. It’s for developers who love writing CSS but want to ship great
products faster.

Lily leverages modern CSS features like **data attributes**, **custom
properties**, and **cascade layers** to provide a lightweight, scalable
foundation. It offers a clean slate with a carefully crafted reset, giving you
an expressive toolkit without the bloat.

The best part? **Lily is framework-agnostic**. Use it with any library, no
matter how big or small. You can even use it alongside utility-first frameworks
like Tailwind. It's about empowering your workflow, not dictating it.

---

## 🎯 Our Philosophy

We believe **web development has become overcomplicated**. You don't need a
heavy framework to build a beautiful, performant user interface.

Lily's core philosophy is simple:

- **Native-first solutions** over complex abstractions.
- **Clean, semantic HTML** over polluted markup.
- **Developer empowerment** over hand-holding.
- **Long-term maintainability** over short-term convenience.

We're here to help you **master CSS**, not avoid it. Lily is a toolkit for
artisans who want to build with intention.

---

## 🚀 Getting Started

### Install via NPM

```bash
npm install @luhmllo/lily
```

### Install via JSR

```bash
deno add @luhmllo/lily
```

### Usage Examples

### In Plain HTML

You can use Lily with a simple `<link>` tag or with a browser-native module
script for more control.

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://unpkg.com/@luhmllo/lily/dist/all.css">

    <script type="module">
      import * as lily from "https://cdn.jsdelivr.net/npm/@luhmllo/lily";
      const styleTag = document.createElement("style");
      styleTag.textContent = lily.all;
      document.head.appendChild(styleTag);
    </script>
  </head>
  <body>
    <div data-is="app">
      <header data-is="grid" data-layout="expand" style="--cols: 2">
        <h1>Welcome to Lily</h1>
        <p>Clean, semantic, and powerful.</p>
        <a href="/docs" data-variant="text">Learn More</a>
      </header>
    </div>
  </body>
</html>
```

### In a JavaScript Framework

Simply import Lily's styles as a dependency in your project. This is the
recommended approach when using build tools.

```js
import "@luhmllo/lily";
// or to import all styles
// import '@luhmllo/lily/all';

const App = () => {
  return (
    <div data-is="app">
      <header data-is="grid" data-layout="expand" style="--cols:2;">
        <h1>Welcome to Lily</h1>
        <p>Clean, semantic, and powerful.</p>
        <a href="/docs" data-variant="text">Learn More</a>
      </header>
    </div>
  );
};

export default App;
```

---

## 💖 Support the Project

Lily is an open-source project, and your support helps us keep it running.

**Ways to contribute:**

- ⭐ Star the repository on GitHub.
- 💖 [Sponsor the project](https://github.com/sponsors/LUHMLLO).
- 🐛 Report bugs or suggest features.
- 📖 Contribute to the documentation.

We're so glad you're here. Let's build a better web, together. 🚀
