// @ts-nocheck - Bundled outputs

// export { default as all } from "./dist/all.css" with { type: "css" };
// export { default as layout } from "./dist/layout.css" with { type: "css" };
// export { default as normalize } from "./dist/normalize.css" with { type: "css" };
// export { default as reset } from "./dist/reset.css" with { type: "css" };

export const all = Deno.readTextFileSync(
  new URL("./dist/all.css", import.meta.url),
) as string;
export const layout = Deno.readTextFileSync(
  new URL("./dist/layout.css", import.meta.url),
) as string;
export const normalize = Deno.readTextFileSync(
  new URL("./dist/normalize.css", import.meta.url),
) as string;
export const reset = Deno.readTextFileSync(
  new URL("./dist/reset.css", import.meta.url),
) as string;
