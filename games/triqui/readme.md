# Triqui

> Top-list entry: **this month** (#7).

![Triqui screenshot placeholder](triqui-placeholder.svg)

## At a glance

- **Score:** 7.8/10
- **Model:** Claude Sonnet 5.5
- **Technology:** Python, Pygame, Desktop game, pytest
- **Estimated FP32 operations/s at 60 FPS:** 40,000,000 (low confidence; static estimate, not measured).
- **Rating basis:** A polished full game package with multiple modes, three bot levels, undo, session scoreboard, modular source and rules/UI tests. No independent gameplay run performed.
- **Verified:** 2026-10-02
- **Repository:** [https://github.com/vescobars/tic-tac-toe](https://github.com/vescobars/tic-tac-toe)
- **Evidence:** [direct model evidence](https://github.com/vescobars/tic-tac-toe/commit/e509d7765cb4cf0fc11d1824ac333e1802ebaa8b)

## Screenshots

No screenshot source is recorded yet. Keep the placeholder until a repository, awesome list, or creator source provides an image.

## Model attribution

Open the evidence link above. Evidence grade: **direct model evidence**.

## Source description

The README, pure rules module and test suite describe and implement a complete desktop Tic-Tac-Toe game with local two-player and vs-machine modes, three AI difficulties including minimax, move undo, round/session scoreboard, controls and win/draw outcomes. PROMPT.md documents the original build request. The game-addition commit explicitly credits Claude Sonnet 5.5. No hosted demo is published.

### Gameplay source

- [https://github.com/vescobars/tic-tac-toe/blob/main/README.md](https://github.com/vescobars/tic-tac-toe/blob/main/README.md)
- [https://github.com/vescobars/tic-tac-toe/commit/e509d7765cb4cf0fc11d1824ac333e1802ebaa8b](https://github.com/vescobars/tic-tac-toe/commit/e509d7765cb4cf0fc11d1824ac333e1802ebaa8b)

## Verification notes

- **Status:** verified_source
- **Counted units in repository:** 1
- **Units covered by this note:** 1
- **Discovery:** GitHub commit search: "Claude Sonnet 5.5" game committer-date:2026-09-29..2026-10-02; https://github.com/vescobars/tic-tac-toe

[Back to the awesome list](../../README.md)
