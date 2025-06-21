# Lilycat 🐱✨

> **Minimal, attribute-based CSS that gets out of your way—so you can focus on design, not syntax.**

[![Sponsor Lilycat](https://img.shields.io/badge/Sponsor_Lilycat-💖-ff69b4?style=for-the-badge)](https://github.com/sponsors/LUHMLLO)

## What if you could build something amazing with zero setup?

That's where Lilycat comes in. While other CSS frameworks focus on impressing developers with complex abstractions, Lilycat focuses on what actually matters: **helping you ship great products faster**.

Your clients don't care about the latest quantum JavaScript framework. They care about one thing: **having their problems solved**. Lilycat was built with this truth in mind—a library that empowers developers and designers to create masterpieces without the complexity overhead.

This library provides an opinionated reset and normalizer with carefully crafted data attributes that help you translate ideas into reality. Whether you're converting designs to code or simply want to escape the never-ending complexity of modern front-end tooling, Lilycat removes the friction between you and your vision.

Lilycat leverages modern CSS features like custom properties, cascade layers, and the often-overlooked power of data attributes. It offers a lightweight, scalable foundation that makes extending your UI effortless—no bloated syntax, no framework lock-in, just clean CSS and the freedom to build your way.

**The best part?** Lilycat plays nicely with other tools. Want to use Tailwind alongside it? Go ahead. Prefer to use only the data attributes? That's fine too. Lilycat adapts to your workflow, not the other way around.

---

## 📚 Table of Contents

- [Mission](#-mission)
- [Why Lilycat?](#-why-lilycat)
- [Core Philosophy](#-core-philosophy)
- [Lilycat + Utility Classes](#-lilycat--utility-classes)
- [Key Benefits](#-key-benefits)
- [Who Should Use Lilycat?](#-who-should-use-lilycat)
- [Getting Started](#-getting-started)
- [Project Links](#-project-links)
- [License](#-license)
- [Support This Project](#-support-this-project)

---

## 🎯 Mission

**Simplify front-end development without sacrificing power or flexibility.**

Great user interfaces don't require bloated frameworks, endless utility classes, or complex build processes. Most functionality can be achieved with native web technologies—HTML, CSS, and vanilla JavaScript (or TypeScript for modern development).

Lilycat harnesses the full potential of modern CSS through variables, layers, cascade controls, data attributes, and scoping. It's not about avoiding CSS; it's about **empowering** it.

---

## 🤔 Why Lilycat?

### The Problem with Current Solutions

- **HTML pollution**: Debugging becomes a nightmare when utility classes flood every element
- **CSS avoidance**: CSS is powerful—avoiding it shouldn't be the goal
- **Over-abstraction**: Utility-first libraries often become crutches rather than tools
- **Maintenance overhead**: Complex frameworks require as much maintenance as your actual product

### The Lilycat Approach

- **Clean markup**: HTML should be semantic and readable
- **CSS mastery**: Embrace CSS as a skill, not a chore
- **Balanced tooling**: Utility classes should assist, not replace good practices
- **Separation of concerns**: Keep styles organized and maintainable

---

## 💭 Core Philosophy

**Modern web development has overcomplicated simple problems.**

While componentization has become the norm, it has also created dependency on ever-changing frameworks. But here's the thing: **you can achieve componentization without heavy frameworks.**

Lilycat believes in:

- **Native-first solutions** over complex abstractions
- **Progressive enhancement** over framework lock-in
- **Developer empowerment** over hand-holding
- **Long-term maintainability** over short-term convenience

---

## 🤝 Lilycat + Utility Classes

**Lilycat is not a replacement for Tailwind or other utility-first frameworks.**

You can absolutely use Tailwind classes alongside Lilycat. We're not here to start a framework war—we're here to give you options.

**Our stance:**

- Utility-first should be an **assistant, not a crutch**
- Clean HTML is valuable, but pragmatism matters
- Different projects have different needs
- **You** decide what works best for your specific use case

Mix and match as needed. We trust you to make good decisions.

---

## ✨ Key Benefits

- **Lightweight & Efficient**: Zero bloat, maximum performance
- **Semantic HTML**: Encourages clean, accessible markup
- **Cross-browser Consistency**: Works reliably everywhere
- **Modern CSS**: Leverages the latest CSS features and best practices
- **Framework Agnostic**: Works with any JavaScript framework or none at all
- **Incremental Adoption**: Use as much or as little as you need
- **Developer Experience**: Fast iteration without sacrificing code quality

---

## 👥 Who Should Use Lilycat?

Lilycat is perfect for:

**CSS Enthusiasts**

- Developers who appreciate CSS as a powerful tool
- Those who want to master modern CSS features

**Pragmatic Builders**

- Teams focused on shipping products, not learning frameworks
- Developers who value clean, maintainable code
- Anyone tired of framework churn

**Performance-Conscious Developers**

- Projects where bundle size matters
- Applications requiring fast load times
- Teams prioritizing user experience over developer convenience

**Independent Thinkers**

- Developers who question popular trends
- Those who prefer understanding over abstraction
- Anyone who believes in the power of web standards

If you're tired of heavy frameworks, bloated utility classes, and the endless cycle of abstraction that avoids web fundamentals... **welcome home**.

---

## 🚀 Getting Started

### Install via JSR (Recommended for Deno)

```bash
deno add @luhmllo/lilycat
```

### Install via npm

```bash
npm install @luhmllo/lilycat
```

### CDN

```html
<link rel="stylesheet" href="https://unpkg.com/@luhmllo/lilycat/dist/lilycat.css">
```

### Basic Usage

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="path/to/lilycat.css">
</head>
<body>
  <div data-is="app">
    <header data-is="grid" data-layout="expand" style="--cols:2;">
      <h1>Welcome to Lilycat</h1>
      <p>Clean, semantic, and powerful.</p>
      <a href="/docs" data-variant="text">Learn More</a>
    </header>
  </div>
</body>
</html>
```

**Want to see more examples?** Check out our [documentation](https://github.com/LUHMLLO/lilycat/wiki) and [examples](https://github.com/LUHMLLO/lilycat/tree/main/examples).

---

## 🔗 Project Links

- **Repository**: [LUHMLLO/lilycat](https://github.com/LUHMLLO/lilycat)
- **JSR Package**: [jsr:@luhmllo/lilycat](https://jsr.io/@luhmllo/lilycat)
- **Documentation**: [Wiki](https://github.com/LUHMLLO/lilycat/wiki)
- **Examples**: [Examples Directory](https://github.com/LUHMLLO/lilycat/tree/main/examples)

---

## 📄 License

Lilycat is released under the **MIT License**. See [LICENSE](LICENSE) for details.

---

## 💖 Support This Project

If Lilycat has helped you build better products, consider [**sponsoring the project**](https://github.com/sponsors/LUHMLLO). Even small contributions help keep open-source projects thriving.

**Other ways to support:**

- ⭐ Star the repository
- 🐛 Report bugs and suggest features
- 📖 Contribute to documentation
- 💬 Share your experience with others

Thanks for helping build a better web. 🚀

---

*Built with ❤️ for developers who believe in the power of native web technologies.*
