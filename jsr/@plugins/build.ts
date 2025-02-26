import * as esbuild from "npm:esbuild@0.21.3";
import { denoPlugins } from "jsr:@luca/esbuild-deno-loader@^0.10.3";
import { crypto } from "https://deno.land/std@0.122.0/crypto/mod.ts";
import type { BuildOptions } from "npm:esbuild@0.21.3";

const __dirname = new URL(".", import.meta.url).pathname;
const entryPath = `${__dirname}/src/**/*.mjs`;
const outPath = `${__dirname}dist/`;

// Common build options with additional optimizations
const commonOptions: BuildOptions = {
  plugins: [...denoPlugins()],
  entryPoints: [entryPath],
  bundle: true,
  format: "esm" as const,
  minify: true,
  mangleProps: /^_/, // mangles all private-like properties starting with "_"
  drop: ["console"], // removes all console statements
  banner: { js: "// deno-lint-ignore-file" },
};

// Build minified version
await esbuild.build({
  ...commonOptions,
  outdir: outPath,
  outExtension: { ".js": ".min.js" },
});

// Optional: Generate SHA-256 hash for integrity verification
async function generateFileHash(filePath: string) {
  const data = await Deno.readFile(filePath);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash)).map((b) =>
    b.toString(16).padStart(2, "0")
  ).join("");
}

// Generate hashes for each output file
for await (const file of Deno.readDir(outPath)) {
  if (file.isFile && file.name.endsWith(".min.js")) {
    const filePath = `${outPath}/${file.name}`;
    const hash = await generateFileHash(filePath);
    console.log(`File: ${file.name} | SHA-256 Hash: ${hash}`);
  }
}

esbuild.stop();
