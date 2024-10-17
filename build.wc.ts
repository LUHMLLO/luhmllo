import * as esbuild from "npm:esbuild@0.21.3";
import { denoPlugins } from "jsr:@luca/esbuild-deno-loader@^0.10.3";

await esbuild.build({
  plugins: [...denoPlugins()],
  entryPoints: ["./components/wc/mod.ts"],
  outfile: "./static/wc.esm.js",
  bundle: true,
  minify: true,
  banner: { js: "// deno-lint-ignore-file" },
  format: "esm",
});

esbuild.stop();
