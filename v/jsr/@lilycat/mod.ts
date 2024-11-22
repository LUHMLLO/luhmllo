// mod.ts
import { fromFileUrl } from "https://deno.land/std@0.224.0/path/mod.ts";

const cssPath = fromFileUrl(new URL("./dist/all.css", import.meta.url));
export const styles: string = await Deno.readTextFile(cssPath);
export default styles;