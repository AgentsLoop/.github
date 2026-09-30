# Mall Action — Model Benchmark

> Top-list entry: **today** (#8).

![Mall Action — Model Benchmark screenshot](https://raw.githubusercontent.com/rlorca/mall-action/sonnet-5-5/docs/mall.png)

## At a glance

- **Score:** 8.5/10
- **Screenshot rating:** 7.7/10 ([manually reviewed image](https://github.com/rlorca/mall-action/blob/sonnet-5-5/docs/mall.png)). Treat this as visual review only; do not infer a playtest.
- **Model:** Claude Opus 5.5, Claude Sonnet 5.5, GPT-6.1 Sol
- **Technology:** TypeScript, Canvas 2D, Vite, Web Audio
- **Estimated FP32 operations/s at 60 FPS:** 12,000,000 (low confidence; static estimate, not measured).
- **Rating basis:** Estimate source completeness, mechanics, documented run path, tests and attribution; do not treat this as a visual review or runtime benchmark.
- **Verified:** 2026-09-30
- **Repository:** [https://github.com/rlorca/mall-action](https://github.com/rlorca/mall-action)
- **Evidence:** [creator-reported model evidence](https://github.com/rlorca/mall-action/blob/23a4c80fd51237ad620b957e79d3e279edfad381/README.md)
- **Live demo:** [open demo](https://rlorca.github.io/mall-action/opus-5.5/)
- **Additional live link:** [open demo](https://rlorca.github.io/mall-action/sonnet-5.5/)
- **Additional live link:** [open demo](https://rlorca.github.io/mall-action/gpt-6.1-sol/)

## Screenshots

Use the source screenshot links below. The list records these assets from the game repository or a related source.

- [screenshot 1](https://github.com/rlorca/mall-action/blob/sonnet-5-5/docs/mall.png) — 📸 7.7/10 · manual visual review · Inspect crisp arcade sprites, store signs, multiple mall floors and integrated score/package HUD; distinguish this Sonnet branch frame from other model variants.
- [screenshot 2](https://github.com/rlorca/mall-action/blob/opus-5-5/docs/screenshots/title.png) — 📸 5.2/10 · relative frame adjustment · Adjust this sibling frame relative to the selected manual-review frame. Discount title/menu overlays or missing play context.
- [screenshot 3](https://github.com/rlorca/mall-action/blob/opus-5-5/docs/screenshots/mall.png) — 📸 7.1/10 · relative frame adjustment · Adjust this sibling frame relative to the selected manual-review frame. Discount weaker framing, lower scene clarity or less visible gameplay context.
- [screenshot 4](https://github.com/rlorca/mall-action/blob/opus-5-5/docs/screenshots/store.png) — 📸 6.7/10 · relative frame adjustment · Adjust this sibling frame relative to the selected manual-review frame. Discount weaker framing, lower scene clarity or less visible gameplay context.
- [screenshot 5](https://github.com/rlorca/mall-action/blob/opus-5-5/docs/screenshots/spygram.png) — 📸 5.8/10 · relative frame adjustment · Adjust this sibling frame relative to the selected manual-review frame. Discount title/menu overlays or missing play context.
- [screenshot 6](https://github.com/rlorca/mall-action/blob/sonnet-5-5/docs/title.png) — 📸 5.6/10 · relative frame adjustment · Adjust this sibling frame relative to the selected manual-review frame. Discount title/menu overlays or missing play context.
- [screenshot 7](https://github.com/rlorca/mall-action/blob/sonnet-5-5/docs/store.png) — 📸 7.2/10 · relative frame adjustment · Adjust this sibling frame relative to the selected manual-review frame. Discount weaker framing, lower scene clarity or less visible gameplay context.
- [screenshot 8](https://github.com/rlorca/mall-action/blob/sonnet-5-5/docs/map.png) — 📸 5.5/10 · relative frame adjustment · Adjust this sibling frame relative to the selected manual-review frame. Discount title/menu overlays or missing play context.
- [screenshot 9](https://github.com/rlorca/mall-action/blob/sonnet-5-5/docs/levelclear.png) — 📸 5.1/10 · relative frame adjustment · Adjust this sibling frame relative to the selected manual-review frame. Discount title/menu overlays or missing play context.
- [screenshot 10](https://github.com/rlorca/mall-action/blob/sonnet-5-5/docs/spygram.png) — 📸 7.4/10 · relative frame adjustment · Adjust this sibling frame relative to the selected manual-review frame. Discount weaker framing, lower scene clarity or less visible gameplay context.
- [screenshot 11](https://github.com/rlorca/mall-action/blob/gpt-6-1-sol/public/screenshots/mall.png) — 📸 6.9/10 · relative frame adjustment · Adjust this sibling frame relative to the selected manual-review frame. Discount weaker framing, lower scene clarity or less visible gameplay context.
- [screenshot 12](https://github.com/rlorca/mall-action/blob/gpt-6-1-sol/public/screenshots/store.png) — 📸 6.7/10 · relative frame adjustment · Adjust this sibling frame relative to the selected manual-review frame. Discount weaker framing, lower scene clarity or less visible gameplay context.

## Model attribution

Open the evidence link above. Evidence grade: **creator-reported model evidence**.

## Source description

Inspect the opus-5-5, sonnet-5-5 and gpt-6-1-sol branches, not the README-only main branch. Verify mall movement, elevator controls, combat, shop searches, six hidden packages, getaway and escalating loops. Count one named game across model implementations. Use the root README branch-to-model mapping for creator-reported attribution. Inspect the checked-in entry point and gameplay systems. Treat repository creation as a freshness proxy, not proof of game creation or publication. Limit runtime confirmation to the recorded GPT-6.1 Sol branch smoke test.

### Gameplay source

- [https://github.com/rlorca/mall-action/blob/gpt-6-1-sol/src/main.ts](https://github.com/rlorca/mall-action/blob/gpt-6-1-sol/src/main.ts)
- [https://github.com/rlorca/mall-action/blob/23a4c80fd51237ad620b957e79d3e279edfad381/README.md](https://github.com/rlorca/mall-action/blob/23a4c80fd51237ad620b957e79d3e279edfad381/README.md)

## Verification notes

- **Status:** verified_source
- **Counted units in repository:** 1
- **Units covered by this note:** 1
- **Discovery:** GitHub model-and-date repository search; commit-attribution freshness join (September 29–30 UTC+7); https://github.com/rlorca/mall-action

[Back to the awesome list](../../README.md)
