import { dirname, fromFileUrl, join } from "jsr:@std/path";
import { ensureDir } from "jsr:@std/fs";
import { walk } from "jsr:@std/fs/walk";

import postcss from "https://deno.land/x/postcss@8.4.16/mod.js";
import cssnano from "npm:cssnano";
import postcssImport from "npm:postcss-import";
import postcssFailOnWarn from "npm:postcss-fail-on-warn";
import "npm:cssnano-preset-advanced@^7.0.6";

// Initialize PostCSS with plugins
const processor = postcss([
  postcssImport(),
  cssnano({
    preset: [
      "default",
      {
        autoprefixer: {
          add: true,
          cascade: true,
          flexbox: true,
          grid: "autoplace",
          remove: false,
          supports: true,
        },
        calc: true,
        colormin: true,
        discardComments: { removeAll: true },
        discardEmpty: true,
        discardDuplicates: true,
        mergeIdents: true,
        mergeLonghand: true,
        mergeRules: false,
        minifyFontValues: true,
        minifyGradients: true,
        minifyParams: true,
        minifySelectors: true,
        normalizeCharset: true,
        normalizeDisplayValues: true,
        normalizePositions: true,
        normalizeString: true,
        normalizeUnicode: true,
        normalizeUrl: true,
        normalizeWhitespace: true,
        orderedValues: true,
        reduceIdents: {
          gridTemplate: false,
        },
        reduceInitial: true,
        reduceTransforms: true,
        uniqueSelectors: true,
      },
    ],
  }),
  postcssFailOnWarn(),
]);

// Resolve paths based on the script's location
const __dirname = dirname(fromFileUrl(import.meta.url));
const entryPath = join(__dirname, "css");
const outPath = join(__dirname, "dist");

console.log(`Processing CSS files from ${entryPath} to ${outPath}...`);

// Ensure output directory exists
await ensureDir(outPath);

// Process all CSS files
for await (
  const entry of walk(entryPath, {
    includeDirs: false,
    match: [/\.css$/],
  })
) {
  const relativePath = entry.path.slice(entryPath.length + 1);
  const outputPath = join(outPath, relativePath);

  try {
    // Ensure the output directory exists
    await ensureDir(dirname(outputPath));

    const css = await Deno.readTextFile(entry.path);
    const result = await processor.process(css, {
      from: entry.path,
      to: outputPath,
      map: false,
    });

    await Deno.writeTextFile(outputPath, result.css);

    console.log(`✓ Processed: ${relativePath}`);
  } catch (error) {
    console.error(`✗ Error processing ${relativePath}:`, error);
  }
}

console.log("\nCSS processing complete!");
