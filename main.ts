// Make the AI Judge Laugh: Office Jokes
// Writes one single-line office joke to /output/entry.txt.
// Node 22, standard library only, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I hit reply-all to apologise for hitting reply-all, and now the whole company is trapped in my apology loop.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE + "\n", "utf8");
