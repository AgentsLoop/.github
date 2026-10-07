# Markdown tables

Run `node scripts/validate-markdown-tables.mjs` after every change to a Markdown table.
The script fails when one table mixes cell counts, which makes GitHub render the table as plain text.

- Count cells between the outermost pipes and keep the header, separator, and body rows identical.
- Check one file directly with `node scripts/validate-markdown-tables.mjs awesomelists.md`.
- Keep one canonical comparison table plus one checklist per topic; do not repeat the same tool in several tables.

Recorded root cause for 2026-10-07: the AI-generator checklist separator row held 14 cells under a 15-column header.
