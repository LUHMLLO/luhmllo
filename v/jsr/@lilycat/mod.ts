import { dirname, fromFileUrl } from "jsr:@std/path";

const __dirname = dirname(fromFileUrl(import.meta.url));

export const allCSS = `${__dirname}/dist/all.css`;
export const resetCSS = `${__dirname}/dist/reset.css`;
export const customsCSS = `${__dirname}/dist/customs.css`;
export const rootCSS = `${__dirname}/dist/root.css`;
