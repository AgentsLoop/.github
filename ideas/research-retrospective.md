# Game research ideas

Use the completed two-day search to improve the next collection pass.

## Keep what worked

- Exhaust the requested two-day window before widening a count target to the last seven days; report both date groups explicitly.
- Check the actual source path again before recording it. One candidate's input code lived under a nested `input/` directory, not the first reported path.
- Save a fixed discovery-batch manifest; validate unique repository IDs, the local date window, and dataset agreement before regenerating the README.
- Verify resource licenses on the current primary page and the specific asset pack; flag conflicting legacy terms rather than assuming a site-wide free-use license.
- Search commit trailers before broad repository metadata. Exact Claude Opus and Claude Fable trailers produced the strongest attribution evidence.
- Inspect candidates serially. Record the query, candidate, decision and reason immediately.
- Separate repository count from game-unit count. Airgap and Top-10 Tension showed that one repository can contain several independently playable games.
- Inspect the README, entry point, source tree and gameplay state before accepting a game.
- Store repository creation, publication, verification and gameplay-evidence dates separately.
- Store creator-reported game creation dates separately from publication dates; run the ranking validator as well as the dataset validator.
- Generate prompts from source behavior. Mark reconstructed prompts clearly instead of presenting them as original prompts.
- Rank only after refreshing dates and validating the dataset. Keep today, week and month reports generated from the same source of truth.
- Preserve rejected candidates and rejection reasons. This prevents repeated inspection of catalogs, benchmarks, engines and non-games.

## Fix what did not work

- Reject movement-only demos without a game objective or substantive sandbox loop; count a repository only after checking state and an outcome.
- Do not treat a game-themed repository name as model evidence. Require a creator statement, commit trailer, prompt file or equivalent public attribution.
- Do not treat a recent repository update as a newly published game. Label it as recent gameplay evidence when the repository is older.
- Do not promote repository-level model attribution to direct gameplay attribution. Keep a distinct evidence grade.
- Do not count game engines, benchmarks, visual scenes, catalogs, prompt collections or thin client modules as games.
- Do not rely on a live-demo URL as proof. Verify source gameplay first, then test the URL when time and access permit.
- Do not run broad GitHub searches in parallel. They consume rate limits, make provenance ambiguous and make candidate inspection harder to audit.
- Do not let prompt generation erase stronger manually recorded evidence links or useful source-linked wording.
- Do not use one inflated FLOPS number as a benchmark. Keep estimates explicitly static, low-confidence and tied to the observed workload.

## Build next

### Add a candidate triage queue

Create `research/candidate-queue.json` with one record per unseen repository. Store the query, discovery URL, model clue, likely game path, freshness signal, rejection reason and inspection status. Make the queue resumable after rate limits or context loss.

### Add an evidence-strength score

Compute separate scores for model attribution, gameplay completeness, freshness, public playability and source quality. Use the minimum score as the acceptance gate, not an average that hides a missing model or game loop.

### Add a freshness dashboard

Generate a report showing publication date, recent gameplay evidence, repository creation date, date basis and stale-date warnings. Highlight records that enter “today” only because they were verified today.

### Add a direct-game-link audit

Require every contained game to have a direct source path or dedicated entry point. Flag aggregate repository links, missing pages, duplicate links and links that return 404 before regenerating the README.

### Add a model-attribution audit

Check every model evidence URL for an exact trailer, prompt file, creator statement or repository-level attribution. Fail the audit when the URL only contains a model name in a title, branch name or unrelated documentation.

### Add optional browser smoke tests

For each new web game with a public demo, open the URL serially and record HTTP status, title, canvas/DOM entry point and one safe interaction. Mark unavailable or login-gated demos without blocking source verification.

### Add screenshot provenance

Extract screenshots only from repository README or source assets. Record the image URL, source page, image role and whether it is gameplay evidence. Reject logos, badges, diagrams and progress sheets automatically.

### Add an uncertainty budget

Require a written caveat whenever a record uses inferred prompts, repository-level model evidence, static FLOPS estimates, old repositories or an untested demo. Surface these caveats in the per-game notes and rankings.


## Opus 5.5 collection expansion — 2026-09-24

- Follow a verified showcase to its linked multi-game repository; do not stop at single-repository search results.
- Read the collection-level creator statement, then verify each candidate folder's README, controls, gameplay loop, source entry point, and direct demo.
- Count distinct games, not repositories. Keep one canonical dataset record and store each game's source, demo, screenshot, prompt, quality estimate, and low-confidence FLOPS estimate separately.
- Separate the authoring model from any optional runtime dialogue model. Mark repository-wide authorship as repository-level evidence.
- Reject generators, open-ended simulations without a player goal, scene-making toys, and cartoon makers even when a collection files them under a game label.
- Treat sequential HTTP 200 checks as availability evidence, not as interactive playtests.

## Keep the September 30 improvements

- Join model commit attribution to exact local repository creation dates; escape the latest-updated metadata feed's spam and tooling noise.
- Inspect model-specific branches and consolidate identical game variants into one repository record.
- Compare slug labels with real authoring evidence; record Putt Quest as Opus 5.5 and Floor 48 as Sonnet 5.5 despite misleading repository names.
- Check the mounted UI before accepting a tested simulation library; reject placeholder-only renderers.
- Carry lower-quality playable games into the separate quality section; never raise a rating to satisfy the requested count.
- Preserve the two-day window instead of silently widening it. Label all 30 units' repository creation dates as proxies rather than assert proven creation dates.
- Save query receipts, candidate decisions, media checks and smoke-test evidence beside the validated batch.

## Browser ports and decompilations — 2026-10-01

- Keep browser-native game ports in a separate list from the AI-authored game dataset.
- Label exact methods: decompilation port, officially source-released engine, reimplementation, emulation, or reconstruction.
- Click the browser deployment and inspect the upstream README; note user-supplied data, browser requirements, unavailable hosts, and demo/full-game scope.
- Use a failed TLS check or a build-only GitHub repository as a hold, not as a currently playable pick.
