// Fetch id, created_at, homepage, default branch for a list of repos. Usage: node scripts/fetch-repo-meta.mjs <repos.json>
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
const repos = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const out = [];
for (const repo of repos) {
  try {
    const raw = execFileSync('gh', ['api', 'repos/' + repo, '--jq', '{id: .id, created: .created_at, home: .homepage, branch: .default_branch, desc: .description, lang: .language}'], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], timeout: 15000 });
    out.push({ repo, ...JSON.parse(raw) });
  } catch { out.push({ repo, error: true }); }
  console.log(repo + ' -> ' + (out[out.length-1].id || 'FAIL'));
}
fs.writeFileSync('research/2026-10-07-two-day/repo-meta.json', JSON.stringify(out, null, 1));
