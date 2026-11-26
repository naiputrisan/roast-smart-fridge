// Roast the Smart Fridge: one line, best laugh wins.
// The program writes a single roast line to /output/entry.txt.
// Gate (per RULES.txt): UTF-8 text, 1-160 characters, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "My smart fridge caught me eating ice cream at 2 AM and now dims its light when I open the door, like a parent too disappointed to speak.";

if (TEXT.length < 1 || TEXT.length > 160) {
  throw new Error(`gate: entry must be 1-160 characters, got ${TEXT.length}`);
}
if (!TEXT.trim()) {
  throw new Error("gate: entry must not be only whitespace");
}
if (TEXT.includes("\n")) {
  throw new Error("gate: entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
