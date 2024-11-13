export const styles: { all: URL; root: URL; reset: URL; customs: URL } = {
  all: new URL("./css/all.css", import.meta.url),
  root: new URL("./css/root.css", import.meta.url),
  reset: new URL("./css/reset.css", import.meta.url),
  customs: new URL("./css/customs.css", import.meta.url),
};

// You might also want to export the CSS content directly
export const content: {
  all: string;
  root: string;
  reset: string;
  customs: string;
} = {
  all: await Deno.readTextFile(new URL("./css/all.css", import.meta.url)),
  root: await Deno.readTextFile(new URL("./css/root.css", import.meta.url)),
  reset: await Deno.readTextFile(new URL("./css/reset.css", import.meta.url)),
  customs: await Deno.readTextFile(
    new URL("./css/customs.css", import.meta.url),
  ),
};
