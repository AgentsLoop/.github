// Print first heading of a repo README. Usage: node scripts/readme-head.mjs <owner/repo>
// NOTE: gh --jq prints scalar strings raw (no JSON quotes), so do not JSON.parse .content output.
import { execFileSync } from 'node:child_process';
try {
  const raw = execFileSync('gh', ['api', 'repos/' + process.argv[2] + '/readme', '--jq', '.content'], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], timeout: 15000 });
  const text = Buffer.from(raw.trim(), 'base64').toString('utf8');
  const m = text.match(/^#+\s+(.+)$/m);
  console.log(((m && m[1]) || text.split('\n')[0] || 'EMPTY').trim().slice(0, 100));
} catch { console.log('NO-README'); }
