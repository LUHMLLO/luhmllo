# Lilycat Usage Guide

Lilycat is a minimal, attribute-based CSS library found in `kit/lily`. It uses `data-is` attributes to define components and CSS variables for customization.

## Core Philosophy
- **Attribute-based**: Styles are applied using `data-is="..."`.
- **CSS Variables**: Customization is done via inline styles or CSS classes setting variables (e.g., `--cols`, `--gap`).
- **Semantic HTML**: Encourages using standard HTML elements.

## Common Components

### Grid
Creates a responsive grid layout.
```html
<div data-is="grid" style="--cols: 3; --gap: 1rem;">
  <!-- items -->
</div>
```
- `--cols`: Number of columns (default: 1).
- `--gap`: Gap between items (default: 0px).
- `--track_min`: Minimum column width (default: min(100%, 13rem)).

### Card
A basic container with padding and background.
```html
<div data-is="card">
  <h3>Card Title</h3>
  <p>Card content...</p>
</div>
```

### Input
A styled input wrapper. Supports leading and trailing icons.
```html
<label data-is="input">
  <i data-is="icon" data-part="lead">search</i>
  <input type="text" placeholder="Search...">
</label>
```

### Button (inferred)
Based on `button.css` (not read but assumed from `data-is="buttonmin"` usage).
```html
<button data-is="button">Click Me</button>
<button data-is="button" data-variant="outline">Outline</button>
```

### Icons
Uses `data-is="icon"`. Typically wraps a Material Symbol or similar text-based icon.
```html
<i data-is="icon">home</i>
```

## Usage
Include the CSS file in your HTML:
```html
<link rel="stylesheet" href="/lily/all.css">
```
