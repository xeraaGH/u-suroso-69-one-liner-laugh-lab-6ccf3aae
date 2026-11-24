import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The excuse a robot vacuum gives after eating a sock.
// Deadpan, concrete, one line.
const line =
  "I didn't eat the sock — I arrested it. It was impersonating a snake and resisting suction.";

// The bounty requires one line of 1-200 characters.
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${line.length}`);
}
if (line.includes('\n') || line.includes('\r')) {
  throw new Error('entry must be a single line');
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), line + '\n');
