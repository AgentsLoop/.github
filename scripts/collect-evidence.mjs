// Collect exact model-trailer lines and README heads for candidate game repos.
// Usage: node scripts/collect-evidence.mjs <repos.json>
// NOTE: gh --jq prints scalar strings raw; decode .content directly without JSON.parse.
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
const repos = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const run = (args) => { try { return execFileSync('gh', ['api', ...args], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], timeout: 20000 }); } catch { return 'CALL-FAIL'; } };
for (const repo of repos) {
  console.log('==== ' + repo);
  const commits = run(['repos/' + repo + '/commits?per_page=20', '--jq', '[.[] | {sha: .sha[:7], date: .commit.committer.date, body: .commit.message}]']);
  if (commits === 'CALL-FAIL') { console.log('commits FAIL'); continue; }
  for (const c of JSON.parse(commits)) {
    const trailers = c.body.split('\n').filter((l) => /Co-Authored-By|Claude-Session|Generated with|Built with|GPT-6\.1|Claude (Opus|Sonnet)/i.test(l));
    if (trailers.length) console.log(c.sha + ' ' + c.date + ' :: ' + c.body.split('\n')[0].slice(0, 110) + ' @@ ' + trailers.join(' | ').slice(0, 300));
  }
  const readme = run(['repos/' + repo + '/readme', '--jq', '.content']);
  if (readme && readme !== 'CALL-FAIL') {
    try {
      const text = Buffer.from(readme.trim(), 'base64').toString('utf8');
      const h1 = (text.match(/^#+\s+(.+)$/m) || [])[1] || '';
      const attr = text.split('\n').filter((l) => /Claude|GPT|Sonnet|Opus|Sol|Astra|vibe|generat/i.test(l)).slice(0, 4);
      console.log('README-H1: ' + h1.trim().slice(0, 90));
      console.log('README-ATTR: ' + attr.join(' / ').slice(0, 400));
    } catch { console.log('readme decode FAIL'); }
  } else console.log('readme ' + readme);
}
