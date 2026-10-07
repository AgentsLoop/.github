// Print tree paths for a repo, optionally filtered by substring. Usage: node scripts/quick-tree.mjs <owner/repo> [match] [limit]
import { execFileSync } from 'node:child_process';
const [repo, match, limitArg] = process.argv.slice(2);
const limit = Number(limitArg || 60);
const raw = execFileSync('gh', ['api', 'repos/' + repo + '/git/trees/HEAD?recursive=1', '--jq', '[.tree[] | select(.type=="blob") | .path] | length'], { encoding: 'utf8', timeout: 25000 });
console.log('total blobs: ' + raw.trim());
const raw2 = execFileSync('gh', ['api', 'repos/' + repo + '/git/trees/HEAD?recursive=1', '--jq', '[.tree[] | select(.type=="blob") | .path] | .[]'], { encoding: 'utf8', timeout: 25000 });
const paths = raw2.trim().split('\n');
const filtered = match ? paths.filter((p) => p.includes(match)) : paths;
console.log(filtered.slice(0, limit).join('\n'));
