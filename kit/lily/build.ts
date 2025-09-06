import { ensureDir } from "jsr:@std/fs"
import { walk } from "jsr:@std/fs/walk"
import { dirname, fromFileUrl, join } from "jsr:@std/path"
import postcss from "https://deno.land/x/postcss/mod.js"
import postcssRelativeColorSyntax from "npm:@csstools/postcss-relative-color-syntax"
import "npm:cssnano-preset-advanced"
import cssnano from "npm:cssnano"
import postcssCustomMedia from "npm:postcss-custom-media"
import postcssFailOnWarn from "npm:postcss-fail-on-warn"
import postcssImport from "npm:postcss-import"
import postcssNested from "npm:postcss-nested"

// Initialize PostCSS with plugins
const processor = postcss( [
  postcssImport(),
  postcssNested(),
  postcssCustomMedia(),
  postcssRelativeColorSyntax(),
  cssnano( {
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
        calc: false,
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
  } ),
  postcssFailOnWarn(),
] )

// Resolve paths based on the script's location
const __dirname = dirname( fromFileUrl( import.meta.url ) )
const entryPath = join( __dirname, "src" )
const outPath = join( __dirname, "dist" )

console.log( `Processing CSS files from ${ entryPath } to ${ outPath }...` )

// Ensure output directory exists
await ensureDir( outPath )

// Function to process a single CSS file
async function processFile( filePath: string ) {
  const relativePath = filePath.slice( entryPath.length + 1 )
  const outputPath = join( outPath, relativePath )

  try {
    // Ensure the output directory for the file exists
    await ensureDir( dirname( outputPath ) )

    const css = await Deno.readTextFile( filePath )
    const result = await processor.process( css, {
      from: filePath,
      to: outputPath,
      map: false,
    } )

    await Deno.writeTextFile( outputPath, result.css )
    console.log( `✓ Processed: ${ relativePath }` )
  } catch ( error ) {
    console.error( `✗ Error processing ${ relativePath }:`, error )
  }
}

// Function to build all CSS files initially
async function buildAll() {
  console.log( "Building all CSS files..." )

  for await ( const entry of walk( entryPath, {
    includeDirs: false,
    match: [ /\.css$/ ],
  } ) ) {
    await processFile( entry.path )
  }

  console.log( "\nCSS processing complete!" )
}

// Watch for file changes in dev mode
if ( Deno.args.includes( "--watch" ) ) {
  console.log( "👀 Watching for file changes..." )
  const watcher = Deno.watchFs( entryPath )
  for await ( const event of watcher ) {
    if ( event.kind === "modify" || event.kind === "create" ) {
      for ( const path of event.paths ) {
        if ( path.endsWith( ".css" ) ) {
          console.log( `Change detected in ${ path }` )
          await processFile( path )
        }
      }
    }
  }
} else {
  // Default behavior - process all files once
  await buildAll()
}