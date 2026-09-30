# Game Rankings

> Generate these reports with `node scripts/generate-rankings.mjs --as-of=YYYY-MM-DD`.

## Current reports

- [Top games this week](this-week.md) — **10** ranked rows.
- [Top games this month](this-month.md) — **10** ranked rows.
- [Date audit data](date-audit.json) — normalized date fields for every curated game unit.

## Daily rankings

| Date | Ranked rows | Counted units | Report |
| --- | ---: | ---: | --- |
| 2026-09-24 | 0 | 0 | [Open report](daily/2026-09-24.md) |
| 2026-09-25 | 0 | 0 | [Open report](daily/2026-09-25.md) |
| 2026-09-26 | 0 | 0 | [Open report](daily/2026-09-26.md) |
| 2026-09-27 | 0 | 0 | [Open report](daily/2026-09-27.md) |
| 2026-09-28 | 0 | 0 | [Open report](daily/2026-09-28.md) |
| 2026-09-29 | 0 | 0 | [Open report](daily/2026-09-29.md) |
| 2026-09-30 | 0 | 0 | [Open report](daily/2026-09-30.md) |

## Date coverage

| Date signal | Records | Game units | Meaning |
| --- | ---: | ---: | --- |
| Explicit publication date | 152 | 287 | `published_on` |
| Publication or qualifying evidence date | 165 | 325 | `published_on`, `recent_game_evidence_on`, or `fresh_activity_date` |
| Date unknown for ranking | 433 | 547 | Exclude from date rankings |
| Repository creation metadata | 598 | 872 | Audit context only; not publication |

## Date policy

- Treat `published_on` as the preferred publication date.
- Use recent gameplay evidence or fresh repository activity only when no publication date exists, and label the basis in the report.
- Use game-creation evidence or a labeled repository-creation proxy for the seven-day weekly ranking only.
- Keep repository creation and `verified_on` dates separate from publication.
- Exclude low-quality records below the 7.0 curated-list threshold; keep them in [bad-games.md](../bad-games.md).
- Show unknown dates instead of guessing.
- Regenerate all reports after changing `games.json`.

As of: **2026-09-30**
