import { dirname, fromFileUrl } from "jsr:@std/path@1.0.6";

const __dirname: string = dirname(fromFileUrl(import.meta.url));

export const allCSS: string = `${__dirname}/dist/all.css`;
export const resetCSS: string = `${__dirname}/dist/reset.css`;
export const customsCSS: string = `${__dirname}/dist/customs.css`;
export const rootCSS: string = `${__dirname}/dist/root.css`;
