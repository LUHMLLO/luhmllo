// mod.ts
export const styles: string = await Deno.readTextFile(
  new URL("./dist/all.css", import.meta.url),
).catch(() => ""); // Handle potential file read errors

// Ensure it's type-safe for JSR
export type StylesType = typeof styles;
export default styles;
