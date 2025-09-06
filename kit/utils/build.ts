import { crypto } from "https://deno.land/std@0.122.0/crypto/mod.ts";
import { denoPlugins } from "jsr:@luca/esbuild-deno-loader@^0.10.3";
import type { BuildOptions } from "npm:esbuild@0.21.3";
import * as esbuild from "npm:esbuild@0.21.3";
import {
  dirname,
  fromFileUrl,
  join,
} from "https://deno.land/std@0.122.0/path/mod.ts";

// Get the current directory in a cross-platform way
const __dirname = dirname(fromFileUrl(import.meta.url));
const entryPath = join(__dirname, "src", "**", "*.mts");
const outPath = join(__dirname, "dist");

// Create dist directory if it doesn't exist
try {
  await Deno.stat(outPath);
} catch {
  await Deno.mkdir(outPath, { recursive: true });
}

// Base build options
const baseOptions: BuildOptions = {
  plugins: [...denoPlugins()],
  entryPoints: [entryPath],
  bundle: true,
  format: "esm" as const,
  treeShaking: true,
  outdir: outPath,
};

// TypeScript outputs (preserve types and formatting)
const typescriptOptions: BuildOptions = {
  ...baseOptions,
  target: "esnext",
  // Keep TypeScript-like output by avoiding heavy transformations
  minifyIdentifiers: false,
  minifySyntax: false,
  keepNames: true,
  banner: { js: "// deno-lint-ignore-file" },
};

// JavaScript outputs (compiled and optimized)
const javascriptOptions: BuildOptions = {
  ...baseOptions,
  target: "es2020", // More compatible target for JS output
  mangleProps: /^_/, // mangles all private-like properties starting with "_"
  minifyIdentifiers: true,
  minifySyntax: true,
  keepNames: false,
  banner: { js: "// deno-lint-ignore-file" },
};

// Build all variants
const builds = [
  // TypeScript regular
  {
    ...typescriptOptions,
    minify: false,
    outExtension: { ".js": ".ts" },
  },
  // TypeScript minified
  {
    ...typescriptOptions,
    minify: true,
    outExtension: { ".js": ".min.ts" },
  },
  // JavaScript regular
  {
    ...javascriptOptions,
    minify: false,
    outExtension: { ".js": ".js" },
  },
  // JavaScript minified
  {
    ...javascriptOptions,
    minify: true,
    outExtension: { ".js": ".min.js" },
  },
];

// Execute all builds
await Promise.all(builds.map(options => esbuild.build(options)));

/**
 * Generates SHA-256 hash for file integrity verification
 */
async function generateFileHash(filePath: string): Promise<string> {
  const data = await Deno.readFile(filePath);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash)).map((b) =>
    b.toString(16).padStart(2, "0")
  ).join("");
}

// Generate hashes for all output files
console.log("\n📦 Build completed successfully!");
console.log("📋 File integrity hashes:\n");

for await (const file of Deno.readDir(outPath)) {
  if (file.isFile && (
    file.name.endsWith(".ts") || 
    file.name.endsWith(".js") || 
    file.name.endsWith(".min.ts") || 
    file.name.endsWith(".min.js")
  )) {
    const filePath = join(outPath, file.name);
    const hash = await generateFileHash(filePath);
    const stats = await Deno.stat(filePath);
    const sizeKB = (stats.size / 1024).toFixed(2);
    console.log(`  ${file.name.padEnd(20)} | ${sizeKB.padStart(8)} KB | SHA-256: ${hash}`);
  }
}

esbuild.stop();