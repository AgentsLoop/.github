#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
node --input-type=module - "${1:?Usage: validate-discovery-batch.sh research/batch.json}" <<'NODE'
import assert from 'node:assert/strict';
import fs from 'node:fs';
const batch = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const games = JSON.parse(fs.readFileSync('games.json', 'utf8'));
const localDate = value => new Intl.DateTimeFormat('en-CA', {
  timeZone: batch.timezone, year: 'numeric', month: '2-digit', day: '2-digit',
}).format(new Date(value));
assert.equal(batch.records.length, batch.expected_repositories);
assert.equal(new Set(batch.records.map(r => r.github_url)).size, batch.records.length);
assert.equal(new Set(batch.records.map(r => r.repository_id)).size, batch.records.length);
let units = 0;
for (const entry of batch.records) {
  const matches = games.filter(r => r.github_url === entry.github_url);
  assert.equal(matches.length, 1, `Missing or duplicate: ${entry.github_url}`);
  const record = matches[0];
  assert.equal(games.filter(r => r.repository_id === entry.repository_id).length, 1,
    `Duplicate canonical repository ID: ${entry.repository_id}`);
  for (const [key, value] of Object.entries(entry)) {
    assert.deepEqual(record[key], value, `${entry.github_url}: stale ${key}`);
  }
  assert(Number.isSafeInteger(record.repository_id) && record.repository_id > 0);
  const date = localDate(record.repository_created_at);
  assert(date >= batch.window_start && date <= batch.window_end, `${record.name}: outside date window`);
  assert.equal(record.added_to_repo_on, batch.verified_on);
  assert.equal(record.verified_on, batch.verified_on);
  assert.equal(record.verification_status, 'verified_source');
  assert(record.model_family.length > 0 && record.method_evidence !== 'unknown');
  assert(record.game_links.length > 0 && record.is_independent_game);
  for (const url of [record.github_url, record.evidence_url, ...record.game_links]) {
    assert.equal(new URL(url).protocol, 'https:', `${record.name}: invalid evidence URL`);
  }
  assert(Number.isInteger(record.counted_game_units) && record.counted_game_units > 0);
  units += record.counted_game_units;
}
assert.equal(units, batch.expected_game_units);
console.log(`Validated ${batch.records.length} unique repositories and ${units} game units for ${batch.window_start}–${batch.window_end} (${batch.timezone}).`);
NODE
