// mod.ts - Main entry point for @luhmllo/lily
// @ts-nocheck - Bundled outputs

// Package metadata
export const version = "0.0.1";
export const name = "@luhmllo/lily";

// Re-export CSS files as string paths for programmatic use
export const all = "./dist/all.css";
export const layout = "./dist/layout.css";
export const normalize = "./dist/normalize.css";
export const reset = "./dist/reset.css";

// Named exports for destructuring imports
// export { default as all } from "./dist/all.css" with { type: "css" };
// export { default as layout } from "./dist/layout.css" with { type: "css" };
// export { default as normalize } from "./dist/normalize.css" with { type: "css" };
// export { default as reset } from "./dist/reset.css" with { type: "css" };
