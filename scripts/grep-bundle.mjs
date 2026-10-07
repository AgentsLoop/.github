// Extract fetch URLs and keyword contexts from a JS bundle. Usage: node scripts/grep-bundle.mjs <file> <word>
import fs from 'node:fs';
const s = fs.readFileSync(process.argv[2], 'utf8');
const word = process.argv[3];
let idx = -1;
let n = 0;
while ((idx = s.indexOf(word, idx + 1)) !== -1 && n < 12) {
  console.log('--- ' + Math.max(0, idx - 120));
  console.log(s.slice(Math.max(0, idx - 120), idx + 160).replace(/\s+/g, ' '));
  n += 1;
}
