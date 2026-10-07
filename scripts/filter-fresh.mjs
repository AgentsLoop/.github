// Keep only repos created inside [startIso, endIso). Usage: node scripts/filter-fresh.mjs <repos.json> <startIso> <endIso>
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
const [listPath, startIso, endIso] = process.argv.slice(2);
const repos = JSON.parse(fs.readFileSync(listPath, 'utf8'));
const start = new Date(startIso), end = new Date(endIso);
const fresh = [];
for (const repo of repos) {
  try {
    const raw = execFileSync('gh', ['api', 'repos/' + repo, '--jq', '{created: .created_at, desc: .description, lang: .language}'], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], timeout: 15000 });
    const m = JSON.parse(raw);
    const c = new Date(m.created);
    if (c >= start && c < end) { fresh.push(repo); console.log('FRESH ' + repo + ' ' + m.created + ' | ' + (m.desc || '').slice(0, 80)); }
  } catch { console.log('FAIL ' + repo); }
}
fs.writeFileSync('research/2026-10-07-two-day/fresh-from-commits.json', JSON.stringify(fresh, null, 1));
console.log('fresh: ' + fresh.length + '/' + repos.length);
