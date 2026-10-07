// Fill missing README excerpts in candidate-cache JSON files, with retry and pacing.
// Usage: node scripts/backfill-readmes.mjs <outdir>
// NOTE: gh --jq prints scalar strings raw (no JSON quotes); decode .content directly.
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
const outDir = process.argv[2];
if (!outDir) { console.error('Usage: node scripts/backfill-readmes.mjs <outdir>'); process.exit(1); }
const sleep = (ms) => Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
const fetchReadme = (repo) => {
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const raw = execFileSync('gh', ['api', 'repos/' + repo + '/readme', '--jq', '.content'], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], timeout: 20000 });
      return Buffer.from(raw.trim(), 'base64').toString('utf8').slice(0, 2000);
    } catch { sleep(1500 * attempt); }
  }
  return null;
};
let filled = 0;
for (const f of fs.readdirSync(outDir)) {
  if (!f.endsWith('.json')) continue;
  const p = path.join(outDir, f);
  const j = JSON.parse(fs.readFileSync(p, 'utf8'));
  if (j.readme) continue;
  const text = fetchReadme(j.repo);
  j.readme = text || '';
  if (!text) j.readme_missing = true;
  fs.writeFileSync(p, JSON.stringify(j, null, 2) + '\n');
  if (text) filled += 1;
  console.log((text ? 'filled ' : 'empty ') + j.repo);
  sleep(400);
}
console.log('Backfilled ' + filled + ' READMEs.');
