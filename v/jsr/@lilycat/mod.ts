export const styles = await Deno.readTextFile(
  new URL("./dist/all.css", import.meta.url),
);
export default styles;
