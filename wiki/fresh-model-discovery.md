# Discover fresh model games

- Bound September 29–30, 2026 to `2026-09-28T17:00:00Z` through `2026-09-30T16:59:59Z` in UTC. Use Asia/Ho_Chi_Minh for the requested calendar dates.
- Join model-attributed gameplay commit hits to exact repository creation timestamps. Deduplicate canonical repository IDs before inspecting source. Reject older games with new commits; label repository creation as a proxy when actual creation is unknown.
- Search Sonnet 5.5 and GPT-6.1 Sol separately. Preserve exact authoring labels; distinguish reviewers, backend contributors and runtime agents.
- Follow creator test families after finding one valid game. Inspect sibling source independently; reject empty runs. Use the waterslide pair as a successful family expansion and the four empty Sol Trashketball runs as failed leads.
- Inspect model-specific branches when the default branch contains only a benchmark README. Use Mall Action's `opus-5-5`, `sonnet-5-5` and `gpt-6-1-sol` branches. Count the named game once across variants.
- Inspect the actual renderer and input composition root. Reject My Lovely Ferret: its core simulation exists, but its entry point renders only “A ferret will live here.” Accept the two science workshops only after checking their implemented overlays and completion stores despite stale skeleton READMEs.
- Count Dynamite Mole and SUNSET RUSH separately; collapse five effort variants per named game.
- Run `bash scripts/discover-fresh-commit-frontier.sh START_DATE END_DATE NEW_OUTPUT_DIRECTORY` to save a serial, deduplicated commit frontier. Inspect every candidate before editing the dataset.
- Read [the September 30 batch](../research/2026-09-30-game-batch.json), [candidate decisions](../research/2026-09-30-candidate-audit.json) and [query receipts](../research/2026-09-30-search-results.json). Validate the batch with `bash scripts/validate-discovery-batch.sh research/2026-09-30-game-batch.json`.
- Limit runtime claims to the two recorded smoke tests: finish one Slipstream race and start/open the directory in Mall Action's GPT-6.1 Sol branch. Treat other HTTP checks as availability, not playtests.
