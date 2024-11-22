// mod.ts
import * as path from "jsr:@std/path";

const cssPath = path.fromFileUrl(new URL("./dist/all.css", import.meta.url));
export const styles: string = await Deno.readTextFile(cssPath);
export default styles;