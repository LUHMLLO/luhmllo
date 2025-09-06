# Zimba: The TypeScript Kit for Web Artisans 🛠️✨

> A collection of composable, zero-dependency libraries by the creators of Lily,
> designed for elegant and powerful user interfaces.

Zimba is not a framework. It’s a carefully crafted **kit** of diverse TypeScript
libraries, built to solve common UI challenges with native-first solutions. If
Lily is your foundation for semantic CSS, Zimba is your toolkit for dynamic,
interactive functionality. We focus on providing simple, composable tools that
get out of your way, so you can focus on building a great experience.

## 🎯 Our Philosophy

Just like Lily, Zimba is rooted in the belief that modern web development has
become overcomplicated. Instead of monolithic frameworks, we offer precise,
single-purpose libraries that embrace web standards and TypeScript for clean,
maintainable code.

We believe in:

- **Zero-dependency tooling** that works anywhere.
- **Native web APIs** over heavy abstractions.
- **Developer empowerment** to write their own solutions.
- **Long-term maintainability** without framework lock-in.

## 📚 The Zimba Kit

Zimba provides a collection of focused libraries, each designed for a specific
task.

### Drifter

A class for creating draggable elements and infinite canvases, inspired by the
smooth, fluid layouts of Figma infinite canvas and the **palmer-dinnerware**
exploration layout (main inspiration source). Drifter allows you to make any
element a powerful, interactive board for content or simplify draggable
(floating) elements on the screen.

### Orbiter

A lightweight class for making an element follow the mouse, another element, or
anything you need to attach it too.

### AnchorDropdown

The simplest way to create accessible, framework-agnostic dropdown components.
AnchorDropdown requires only three core pieces of HTML to function:

1. A `<details>` element that acts as the container.
2. A `data-part="dropmenu"` attribute on the dropdown content.
3. (Optional) A `portalTo` element for rendering the dropdown content in a
   different part of the DOM, perfect for avoiding `z-index` or overflow issues.

## 🚀 Getting Started

### Install via npm

```bash
npm install @jsr/luhmllo__zimba
```

### Install via JSR

```bash
deno add @luhmllo/zimba
```

### Basic Usage: The Drifter

Here is a simple example of how to use `Drifter` to create a working dragable
element.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Drifter Exmaple</title>
    <link rel="stylesheet" href="@luhmllo/lily/all">
    <style>
      :where(body) {
        &::before {
          background-color: red;
          content: "";
          display: inline-block;
          inset: 0;
          margin: auto;
          pointer-events: none;
          position: fixed;
          width: 1px;
          z-index: 9;
        }

        &::after {
          background-color: red;
          content: "";
          display: inline-block;
          height: 1px;
          inset: 0;
          margin: auto;
          pointer-events: none;
          position: fixed;
          z-index: 9;
        }
      }

      :where(.drifter) {
        --size: 500px;
        --translate-x: 0px;
        --translate-y: 0px;
        --translate-z: 0px;
        --scale: 1;

        &:nth-of-type(1) {
          background-color: purple;
        }

        &:nth-of-type(2) {
          background-color: violet;
        }

        aspect-ratio: 1/1;
        position: fixed;

        /* Position the top-left corner at viewport center */
        inset: 50% 0 0 50%;

        /* Size the element */
        height: var(--size);
        max-height: max-content;
        max-width: max-content;
        min-height: max-content;
        min-width: max-content;
        width: var(--size);

        transition: transform var(--animDuration) var(--animTiming);
        transition-delay: calc(var(--animDuration) / 100);

        /* Transform to center the element's center point at viewport center */
        transform: translate(-50%, -50%) /* Center the element first */
          translate3d(
            var(--translate-x),
            var(--translate-y),
            var(--translate-z)
          ) scale3d(var(--scale), var(--scale), var(--scale));

        transform-origin: center;
        transform-style: preserve-3d;
        will-change: scale, transform, translate;

        & > [data-float="top-left"] {
          inset: 0 auto auto 0;
          position: absolute;
        }

        & > [data-float="top-right"] {
          inset: 0 0 auto auto;
          position: absolute;
        }

        & > [data-float="bottom-left"] {
          inset: auto auto 0 0;
          position: absolute;
        }

        & > [data-float="bottom-right"] {
          inset: auto 0 0 auto;
          position: absolute;
        }
      }
    </style>
  </head>

  <body>
    <main
      id="scene"
      data-is="row"
      class="drifter"
      style="--size: max-content; align-items: center; background-color: transparent; gap: var(--space-xl)"
    >
      <div
        data-is="group"
        style="gap: inherit; pointer-events: none; user-select: none; visibility: visible"
      >
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
      </div>
      <div
        data-is="group"
        style="gap: inherit; pointer-events: none; user-select: none; visibility: visible"
      >
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
      </div>
      <div
        data-is="group"
        style="gap: inherit; pointer-events: none; user-select: none; visibility: visible"
      >
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
      </div>
      <div
        data-is="group"
        style="gap: inherit; pointer-events: none; user-select: none; visibility: visible"
      >
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
      </div>
      <div
        data-is="group"
        style="gap: inherit; pointer-events: none; user-select: none; visibility: visible"
      >
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
      </div>
      <div
        data-is="group"
        style="gap: inherit; pointer-events: none; user-select: none; visibility: visible"
      >
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
      </div>
      <div
        data-is="group"
        style="gap: inherit; pointer-events: none; user-select: none; visibility: visible"
      >
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
      </div>
      <div
        data-is="group"
        style="gap: inherit; pointer-events: none; user-select: none; visibility: visible"
      >
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
      </div>
      <div
        data-is="group"
        style="gap: inherit; pointer-events: none; user-select: none; visibility: visible"
      >
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
      </div>
      <div
        data-is="group"
        style="gap: inherit; pointer-events: none; user-select: none; visibility: visible"
      >
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
      </div>
      <div
        data-is="group"
        style="gap: inherit; pointer-events: none; user-select: none; visibility: visible"
      >
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
      </div>
      <div
        data-is="group"
        style="gap: inherit; pointer-events: none; user-select: none; visibility: visible"
      >
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
        <figure style="aspect-ratio: 1/1">
          <img
            src="https://cdn.prod.website-files.com/677b8a552071e1f09b594a24/67d971898ead773c7d012056_Sandy%20Loam%20Green%20Plate%2028.webp"
            style="width: 500px"
          >
        </figure>
      </div>
    </main>

    <script type="module">
      import { Drifter } from "/zimba/drifter.min.js";

      const scene = document.querySelector("#scene");

      new Drifter(scene, document.body, {
        mode: "bounded",
        boundedTo: "inside",
        dragTarget: "boundary",
      });
    </script>
  </body>
</html>
```

### Basic Usage: The Orbiter

Here is a simple example of how to use `Orbiter` to create a working satellite
element.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Orbiter Example</title>
    <link rel="stylesheet" href="@luhmllo/lily/all">
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
    />
    <link
      href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@1&amp;display=swap"
      rel="stylesheet"
    >
    <style>
      html {
        font-family: "Cabinet Grotesk", sans-serif;
      }

      body {
        container: body/size;
      }

      :where(#filmcarousel__blurred-imgs) {
        img {
          filter: blur(var(--radii-nm));
          height: 100dvh;
          inset: auto;
          object-position: 50% 0%;
          position: absolute;
          transform-style: preserve-3d;
          transform: translate3d(0px, 0vh, 0px) scale3d(1, 1, 1);
          width: 100dvw;
          will-change: scale, transform;
        }
      }

      :where(#filmcarousel__sharp-imgs) {
        display: grid;
        place-content: center;
        place-items: center;

        img {
          height: 100dvh;
          inset: auto;
          margin: auto;
          object-position: 50% 0%;
          position: absolute;
          transform-style: preserve-3d;
          transform: translate3d(0px, 0vh, 0px) scale3d(1, 1, 1);
          max-height: 100dvh;
          max-width: 100dvw;

          /* Counter-transform: negate the parent's transform */
          transform: translate3d(
            calc(-1 * var(--translate-x)),
            calc(-1 * var(--translate-y)),
            calc(-1 * var(--translate-z))
          ) scale3d(1, 1, 1);

          width: 100dvw;
          will-change: aspect-ratio, scale, transform;
        }
      }

      :where(#cameraframe) {
        --size: 896px;
        --translate-x: 0px;
        --translate-y: 0px;
        --translate-z: 0px;
        --scale: 1;

        aspect-ratio: 5/3;
        border-radius: var(--radii-xl);
        backdrop-filter: blur(var(--radii-xl));
        height: var(--size);
        inset: 50% 0 0 50%;
        height: max-content;
        isolation: isolate;
        outline: solid 2px hsl(from var(--clr-background__base) h s l / 0.25);
        outline-offset: 0px;
        overflow: clip;
        position: fixed;
        transform: translate(-50%, -50%)
          translate3d(
            var(--translate-x),
            var(--translate-y),
            var(--translate-z)
          ) scale3d(var(--scale), var(--scale), var(--scale));
        transform-origin: center;
        transform-style: preserve-3d;
        width: min(100%, var(--size));
        will-change: aspect-ratio, scale, transform;
        z-index: 1;

        #cameraframe_indicator {
          --fill: 1;
          --size: var(--type-s);
          color: var(--clr-error__base);
          inset: var(--space-nm) var(--space-nm) auto auto;
          position: absolute;
        }

        #cameraframe_center {
          aspect-ratio: 1/1;
          display: grid;
          inset: 0;
          margin: auto;
          place-content: center;
          position: absolute;
          width: 128px;
          z-index: 1;

          & > * {
            --size: var(--type-h1);
            --wght: 250;
            mix-blend-mode: difference;
            opacity: 0.25;
          }

          .corner {
            aspect-ratio: 1/1;
            position: absolute;
            width: 1rem;
          }

          .tl {
            top: 0;
            left: 0;
            border-top: 2px solid;
            border-left: 2px solid;
          }

          .tr {
            top: 0;
            right: 0;
            border-top: 2px solid;
            border-right: 2px solid;
          }

          .bl {
            bottom: 0;
            left: 0;
            border-bottom: 2px solid;
            border-left: 2px solid;
          }

          .br {
            bottom: 0;
            right: 0;
            border-bottom: 2px solid;
            border-right: 2px solid;
          }
        }

        #cameraframe_stamps {
          gap: var(--space-sm);
          inset: auto auto var(--space-nm) var(--space-nm);
          position: absolute;

          [data-is="badge"] {
            align-items: center;
            background-color: hsl(
              from
              var(--clr-background__base)
              h
              s
              l
              /
              0.25
            );
            backdrop-filter: blur(var(--radii-xl));
            border-radius: 5ex;
            display: inline-flex;
            font-size: clamp(var(--type-s), 100%, var(--type-p));
            gap: var(--space-xs);
            height: var(--space-xl);
            padding-inline: var(--space-sm);
            place-content: center;
            width: fit-content;

            & > b {
              font-weight: 400 !important;
              mix-blend-mode: difference;
            }
          }
        }

        @container body (width < 1024px) {
          aspect-ratio: 1/1;
          width: min(100%, 640px);
        }

        @container body (width < 768px) {
          aspect-ratio: 3/4;
          width: min(90%, 512px);
        }
      }
    </style>
  </head>
  <body>
    <h1>Orbiter Example</h1>

    <figure id="filmcarousel__blurred-imgs" data-is="background">
      <img alt="blurred-img" />
    </figure>

    <div id="cameraframe">
      <figure id="filmcarousel__sharp-imgs" data-is="background">
        <img alt="sharp-img" />
      </figure>

      <i id="cameraframe_indicator" data-is="icon">circle</i>

      <span id="cameraframe_center">
        <span class="corner tl"></span>
        <span class="corner tr"></span>
        <span class="corner bl"></span>
        <span class="corner br"></span>
        <i data-is="icon">add_2</i>
      </span>

      <div id="cameraframe_stamps" data-is="row">
        <span data-is="badge">
          <i
            data-is="icon"
            style="--fill: 1; --size: var(--type-s); color: var(--clr-error__base)"
          >
            circle
          </i>
          <b>Camera Frame</b>
        </span>
        <span data-is="badge">
          <b>Orbiter</b>
        </span>
      </div>
    </div>

    <script type="module">
      import { Orbiter } from "/zimba/orbiter.min.js";

      const orbiterElement = document.querySelector("#cameraframe");

      new Orbiter(orbiterElement, document.body, {
        onLeave: "reset",
      });
    </script>

    <script type="module" is:inline>
      (async () => {
        const slides = [
          "https://cdn.prod.website-files.com/68264700ea161932bdd80da7/682cdb77ae160614a3059a2c_ezra-final.webp",
          "https://cdn.prod.website-files.com/68264700ea161932bdd80da7/682e42f70b4bfc926ba6af18_ezra-2-final.webp",
        ];
        const blurredImage = document.querySelector(
          "#filmcarousel__blurred-imgs > img",
        );
        const sharpImage = document.querySelector(
          "#filmcarousel__sharp-imgs > img",
        );

        let currentIndex = 0;
        let isPlaying = true;
        let intervalId;
        let isTransitioning = false;

        async function performTransition(updateCallback) {
          const elements = [sharpImage, blurredImage].filter(Boolean);

          // Fade out both images simultaneously
          const fadeOutAnimations = elements.map((el) =>
            el.animate(
              [
                { opacity: 1, scale: 1.02 },
                { opacity: 0, scale: 0.98 },
              ],
              {
                duration: 256,
                easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                fill: "forwards",
              },
            )
          );

          await Promise.all(fadeOutAnimations.map((a) => a.finished));

          updateCallback();

          // Fade in both images simultaneously
          const fadeInAnimations = elements.map((el) =>
            el.animate(
              [
                { opacity: 0, scale3d: 0.98 },
                { opacity: 1, scale: 1.02 },
              ],
              {
                duration: 384,
                easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                fill: "forwards",
              },
            )
          );

          await Promise.all(fadeInAnimations.map((a) => a.finished));
        }

        async function setActiveSlide(i) {
          if (i < 0 || i >= slides.length || isTransitioning) return;
          isTransitioning = true;
          await performTransition(() => {
            blurredImage?.setAttribute("src", slides[i]);
            sharpImage?.setAttribute("src", slides[i]);
          });
          currentIndex = i;
          isTransitioning = false;
        }

        function nextSlide() {
          setActiveSlide((currentIndex + 1) % slides.length);
        }

        function startAutoplay() {
          if (intervalId) clearInterval(intervalId);
          intervalId = setInterval(nextSlide, 4000);
        }

        function pauseAutoplay() {
          if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
          }
        }

        document.addEventListener("visibilitychange", () => {
          if (document.hidden) pauseAutoplay();
          else if (isPlaying) startAutoplay();
        });

        globalThis.addEventListener("beforeunload", pauseAutoplay);

        const prefersReducedMotion = globalThis.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;
        await setActiveSlide(0);
        if (!prefersReducedMotion) startAutoplay();
      })();
    </script>
  </body>
</html>
```

### Basic Usage: The AnchorDropdown

Here is a simple example of how to use `AnchorDropdown` to create a working
dropdown menu.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dropdown Example</title>
    <link rel="stylesheet" href="@luhmllo/lily/all">
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
    />
  </head>

  <body>
    <h1>Dropdown Example</h1>
    <details data-is="dropdown">
      <summary data-is="button" data-variant="outline">
        <i data-is="icon">globe</i>
        <span>All Sources</span>
      </summary>

      <div data-part="dropmenu">
        <button>
          <i data-is="icon" data-part="lead">globe_book</i>
          <span>Web Search</span>

          <label for="prompt_sourches_websearch" data-part="trail">
            <input
              type="checkbox"
              name="prompt_sourches_websearch"
              id="prompt_sourches_websearch"
              data-is="switch"
            />
          </label>
        </button>

        <hr />

        <button>
          <i data-is="icon" data-part="lead">device_hub</i>
          <span>Apps and integrations</span>

          <label for="prompt_sourches_websearch" data-part="trail">
            <input
              type="checkbox"
              name="prompt_sourches_websearch"
              id="prompt_sourches_websearch"
              data-is="switch"
            />
          </label>
        </button>
        <button>
          <i data-is="icon" data-part="lead">person</i>
          <span>All sources I can access</span>

          <label for="prompt_sourches_websearch" data-part="trail">
            <input
              type="checkbox"
              name="prompt_sourches_websearch"
              id="prompt_sourches_websearch"
              data-is="switch"
            />
          </label>
        </button>
        <button>
          <i data-is="icon" data-part="lead">book</i>
          <span>Help center</span>
        </button>

        <hr />

        <button>
          <i data-is="icon" data-part="lead">add</i>
          <span>Connect apps</span>
        </button>

        <div
          style="color: var(--clr-text__lowered); max-width: 28ch; padding: var(--space-sm)"
        >
          LLM's will only search information from the sources selected here.
        </div>
      </div>
    </details>

    <script type="module">
      import { anchorDropdown } from "/zimba/dropdown.min.js";
      const dropdown = document.querySelector('[data-is="dropdown"]');
      const dropmenu = document.querySelector('[data-part="dropmenu"]');

      const anchor = anchorDropdown(dropdown, dropmenu, {
        preferredY: "bottom",
        preferredX: "center",
        portal: true,
        portalTo: document.body,
      });

      globalThis.addEventListener("beforeunload", () => {
        if (anchor && typeof anchor.destroy === "function") {
          anchor.destroy();
        }
      });
    </script>
  </body>
</html>
```

---

## 💖 Support the Project

Zimba is an open-source project, and your support helps us keep it running.

**Ways to contribute:**

- ⭐ Star the repository on GitHub.
- 💖 [Sponsor the project](https://github.com/sponsors/LUHMLLO).
- 🐛 Report bugs or suggest features.
- 📖 Contribute to the documentation.

We're so glad you're here. Let's build a better web, together. 🚀
