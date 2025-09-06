// mod.ts - Main entry point for @luhmllo/lily
// @ts-nocheck - Bundled outputs

// Named exports for destructuring imports
export { default as all } from "./dist/all.css" with { type: "css" };
export { default as layout } from "./dist/layout.css" with { type: "css" };
export { default as normalize } from "./dist/normalize.css" with { type: "css" };
export { default as reset } from "./dist/reset.css" with { type: "css" };

// Package metadata
export const version = "0.0.1";
export const name = "@luhmllo/lily";
