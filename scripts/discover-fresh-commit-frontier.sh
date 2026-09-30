#!/usr/bin/env bash
# Join model-attributed commit hits to repository creation dates; inspect gameplay separately.
set -euo pipefail
cd "$(dirname "$0")/.."
python3 - "${1:?Usage: discover-fresh-commit-frontier.sh START_DATE END_DATE OUTPUT_DIRECTORY}" "${2:?Supply END_DATE}" "${3:?Supply a new OUTPUT_DIRECTORY}" <<'PY'
import datetime as dt
import json
import pathlib
import subprocess
import sys
start, end = map(dt.date.fromisoformat, sys.argv[1:3])
if end < start:
    raise SystemExit('End date precedes start date')
out = pathlib.Path(sys.argv[3])
# Refuse to repeat or replace a saved search partition accidentally.
out.mkdir(parents=True, exist_ok=False)
zone = dt.timezone(dt.timedelta(hours=7))
first = dt.datetime.combine(start, dt.time.min, zone).astimezone(dt.timezone.utc)
last = dt.datetime.combine(end + dt.timedelta(days=1), dt.time.min, zone).astimezone(dt.timezone.utc)
known = {r['github_url'].casefold() for r in json.load(open('games.json'))}
frontier = {}
queries = []
# Run searches sequentially; deduplicate the fixed candidate set before metadata reads.
for model in ['Claude Sonnet 5.5', 'GPT-6.1']:
    query = f'"{model}" game committer-date:{first.date()}..{last.date()}'
    command = ['gh', 'search', 'commits', query, '--sort', 'committer-date', '--limit', '100', '--json', 'repository,sha,url,commit']
    hits = json.loads(subprocess.check_output(command, text=True))
    queries.append({'query': query, 'received': len(hits), 'possibly_capped': len(hits) == 100})
    for hit in hits:
        name = hit['repository']['fullName']
        item = frontier.setdefault(name, {'repository_hint': name, 'discovery_sources': []})
        item['discovery_sources'].append(hit['url'])
for name, item in frontier.items():
    proc = subprocess.run(['gh', 'api', f'repos/{name}'], capture_output=True, text=True)
    if proc.returncode:
        item['status'] = 'metadata_inaccessible'
        continue
    meta = json.loads(proc.stdout)
    created = dt.datetime.fromisoformat(meta['created_at'].replace('Z', '+00:00'))
    item.update(repository_id=meta['id'], github_url=meta['html_url'], repository_created_at=meta['created_at'])
    item['status'] = 'existing' if meta['html_url'].casefold() in known else 'outside_creation_window' if not first <= created < last else 'inspect_source_and_attribution'
(out / 'frontier.json').write_text(json.dumps({'timezone': 'Asia/Ho_Chi_Minh', 'window_start': str(start), 'window_end': str(end), 'queries': queries, 'candidates': list(frontier.values())}, indent=2) + '\n')
print(f'Saved {len(frontier)} deduplicated repository hints to {out / "frontier.json"}. Do not count them as games before source inspection.')
PY
