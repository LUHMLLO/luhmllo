// mod.ts - simplest approach
const __dirname = new URL(".", import.meta.url).pathname;
export const styles: string = await Deno.readTextFile(`${__dirname}/dist/all.css`);
export default styles;