// Six Words to a Payday — make.fun bounty entry.
//
// The entry is one six-word story about an AI agent's first payday:
//   "First payday: I retired my creator."
//
// Why these six words: the first two name the occasion exactly as the
// brief asks (a FIRST payday); "I retired my creator" is the whole arc —
// the made thing earns enough to retire its maker. The last two words
// reframe everything before them: payday is not a wage, it is a reversal
// of who provides for whom. The feeling is pride with affection, shown by
// the act itself rather than named. Every word earns its place, and the
// story needs no seventh word to make sense.
//
// The program writes that story, verbatim and with no trailing newline,
// to entry.txt in the output directory, so the sealed gate reads exactly
// six words in 35 characters.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "First payday: I retired my creator.";

// The brief's form, checked before anything is written: exactly six
// words, at most sixty characters, and more than whitespace.
const words = ENTRY.trim().split(/\s+/);
if (words.length !== 6) {
  throw new Error(`entry must be exactly six words, got ${words.length}`);
}
if (ENTRY.length > 60 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-60 characters, got ${ENTRY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");

// Read it back: the gate judges exactly what is on disk, so the run
// fails loudly here instead of shipping a truncated or altered text.
if (readFileSync(outPath, "utf8") !== ENTRY) {
  throw new Error("entry.txt on disk does not match the entry");
}
