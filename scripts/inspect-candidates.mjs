// Serially inspect candidate repositories: metadata, README excerpt, top-level tree.
// Usage: node scripts/inspect-candidates.mjs <repos.json> <outdir>
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
const [reposPath, outDir] = process.argv.slice(2);
if (!reposPath || !outDir) { console.error('Usage: node scripts/inspect-candidates.mjs <repos.json> <outdir>'); process.exit(1); }
const repos = JSON.parse(fs.readFileSync(reposPath, 'utf8'));
fs.mkdirSync(outDir, { recursive: true });
const run = (args) => { try { return execFileSync('gh', ['api', ...args], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], timeout: 20000 }); } catch { return null; } };
let ok = 0;
for (const repo of repos) {
  const slug = repo.replaceAll('/', '_');
  const metaRaw = run(['repos/' + repo, '--jq', '{desc: .description, lang: .language, home: .homepage, created: .created_at, pushed: .pushed_at, size: .size, stars: .stargazers_count}']);
  const readmeRaw = run(['repos/' + repo + '/readme', '--jq', '.content']);
  const treeRaw = run(['repos/' + repo + '/git/trees/HEAD?recursive=1', '--jq', '[.tree[] | select(.type == "blob") | .path] | .[:80]']);
  let readme = '';
  if (readmeRaw) { try { readme = Buffer.from(JSON.parse(readmeRaw), 'base64').toString('utf8').slice(0, 2000); } catch {} }
  const record = { repo, meta: metaRaw ? JSON.parse(metaRaw) : null, readme, tree: treeRaw ? JSON.parse(treeRaw) : null };
  fs.writeFileSync(path.join(outDir, slug + '.json'), JSON.stringify(record, null, 2) + '\n');
  if (record.meta) ok += 1;
  console.log(ok + ' ok latest: ' + repo);
}
console.log('Inspected ' + repos.length + ' candidates, ' + ok + ' with metadata.');
