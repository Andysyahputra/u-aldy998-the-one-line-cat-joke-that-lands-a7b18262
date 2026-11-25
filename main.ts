import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Original one-line cat joke: fresh angle (therapy), setup + turn, no tired tropes.
const JOKE =
  "I bought my cat a therapist; now the therapist lives here and only speaks to the cat.";

const outDir = "/output";
// Validate the entry before writing: exactly one line, 1-200 chars, no trailing newline.
if (
  JOKE.length < 1 ||
  JOKE.length > 200 ||
  JOKE.includes("\n") ||
  JOKE.trim().length === 0
) {
  throw new Error("Invalid entry: must be one line of 1-200 characters.");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
