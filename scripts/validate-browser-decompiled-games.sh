#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
python3 - browser-decompiled-games.md <<'PY'
import pathlib, re, sys
path = pathlib.Path(sys.argv[1])
text = path.read_text()
match = re.search(r'^## Browser-playable picks\s*$(.*?)(?=^## )', text, re.M | re.S)
if not match:
    raise SystemExit('Missing Browser-playable picks section')
entries = re.findall(r'^- \*\*(.+?)\.\*\* (.+)$', match.group(1), re.M)
if len(entries) != 10:
    raise SystemExit(f'Expected ten browser-playable entries, found {len(entries)}')
for name, entry in entries:
    if not re.search(r'\[Play(?: the WebGL demo)?\]\(https?://[^)]+\)', entry):
        raise SystemExit(f'Missing direct Play URL for {name}')
if len({name for name, _ in entries}) != len(entries):
    raise SystemExit('Duplicate game names in browser-playable section')
for required in ['Bring only game files', 'not a completed playtest', 'not a decompilation', 'failed TLS certificate validation']:
    if required.casefold() not in text.casefold():
        raise SystemExit(f'Missing important scope caveat: {required}')
print(f'Validated {len(entries)} unique browser-playable entries and their Play URLs.')
PY
