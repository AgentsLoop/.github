// Dump blob trees for a list of repos into one JSON file for local triage.
// Usage: node scripts/dump-trees.mjs <repos.json> <outfile.json>
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
const repos = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const out = {};
for (const repo of repos) {
  try {
    const raw = execFileSync('gh', ['api', 'repos/' + repo + '/git/trees/HEAD?recursive=1', '--jq', '[.tree[] | select(.type=="blob") | .path] | .[:250]'], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], timeout: 25000 });
    out[repo] = JSON.parse(raw);
  } catch { out[repo] = null; }
  console.log(repo + ': ' + (out[repo] ? out[repo].length : 'FAIL'));
}
fs.writeFileSync(process.argv[3], JSON.stringify(out, null, 1));
