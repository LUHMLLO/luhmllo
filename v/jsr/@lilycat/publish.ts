import "https://deno.land/std@0.203.0/dotenv/load.ts";
import { dirname, fromFileUrl } from "jsr:@std/path";

// Retrieve the Deno token from the .env file
const denoToken = Deno.env.get("DENO_AUTH_TOKEN");

if (!denoToken) {
  console.error("Error: DENO_AUTH_TOKEN environment variable is missing.");
  Deno.exit(1);
}

// Define the target directory based on the script's location
const targetDir = dirname(fromFileUrl(import.meta.url));

// Change to the target directory
Deno.chdir(targetDir);

// Run the publish command with Deno.Command and pass the token
const publishProcess = new Deno.Command("deno", {
  args: ["publish", "--token", denoToken],
  stdout: "inherit",
  stderr: "inherit",
});

const status = await publishProcess.output();

if (status.code === 0) {
  console.log("Publishing successful!");
} else {
  console.error("Publishing failed.");
  Deno.exit(status.code);
}
