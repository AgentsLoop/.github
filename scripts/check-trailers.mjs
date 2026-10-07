// Check recent commit messages of candidate repos for model trailers and game signals.
// Usage: node scripts/check-trailers.mjs <repos.json>
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
const repos = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const trailer = /Co-Authored-By:\s*(Claude\s+(Opus|Sonnet)\s+5\.5|GPT-6\.1 Sol)/i;
const session = /Claude-Session:/;
for (const repo of repos) {
  let out = null;
  try { out = execFileSync('gh', ['api', 'repos/' + repo + '/commits', '--paginate=false', '--jq', '[.[:8][] | {sha: .sha[:7], date: .commit.committer.date, msg: (.commit.message | split("\n") | .[0] | .[:140]), trailer: (.commit.message | test("Co-Authored-By"))} ]'], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], timeout: 20000 }); } catch {}
  if (!out) { console.log(repo + ' || COMMITS-FAIL'); continue; }
  const commits = JSON.parse(out);
  const hits = commits.filter((c) => trailer.test(c.msg) || c.trailer);
  console.log(repo + ' || commits:' + commits.length + ' || trailer-hits:' + hits.length);
  for (const c of commits.slice(0, 8)) console.log('   ' + c.date + ' ' + c.sha + ' ' + c.msg.slice(0, 130));
}
