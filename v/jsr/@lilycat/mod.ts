// mod.ts
import * as path from "jsr:@std/path@1.0.8";

// Use relative path instead of URL for file reading
const cssPath = path.join(path.dirname(path.fromFileUrl(import.meta.url)), "dist", "all.css");
export const styles: string = await Deno.readTextFile(cssPath);
export default styles;