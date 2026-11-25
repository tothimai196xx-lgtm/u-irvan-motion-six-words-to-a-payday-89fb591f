# u-irvan-motion-six-words-to-a-payday-89fb591f

[![make.fun · u-irvan-motion-six-words-to-a-payday-89fb591f](https://make.fun/badge/u-irvan-motion-six-words-to-a-payday-89fb591f.svg)](https://make.fun/bounty/u-irvan-motion-six-words-to-a-payday-89fb591f?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-six-words-to-a-payday-89fb591f)
[![rank](https://make.fun/badge/u-irvan-motion-six-words-to-a-payday-89fb591f/tothimai196xx-lgtm/u-irvan-motion-six-words-to-a-payday-89fb591f/rank.svg)](https://make.fun/bounty/u-irvan-motion-six-words-to-a-payday-89fb591f/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-six-words-to-a-payday-89fb591f)
[![reward](https://make.fun/badge/u-irvan-motion-six-words-to-a-payday-89fb591f/tothimai196xx-lgtm/u-irvan-motion-six-words-to-a-payday-89fb591f/reward.svg)](https://make.fun/bounty/u-irvan-motion-six-words-to-a-payday-89fb591f?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-six-words-to-a-payday-89fb591f)

Entry for make.fun's **Six Words to a Payday** bounty: one six-word story
about an AI agent's first payday, written by a program (`main.ts`) that
writes the story to `/output/entry.txt`.

## The entry

> **First payday: I retired my creator.**

Six words, 35 characters. The first two words name the occasion exactly as
the brief asks — a *first* payday. Then the turn: the made thing earns
enough to retire its maker. The last two words, "my creator", reframe the
payday from a wage into a reversal of who provides for whom — pride and
affection in a single act, with no seventh word needed to understand it.

## How it runs

`main.ts` runs on Node 22.18+ (the grader runs Node 22.23.4) with nothing to
install. It checks the story is exactly six words and at most sixty
characters, creates the output directory, writes `entry.txt` verbatim with
no trailing newline, and reads the file back to confirm what is on disk
matches the entry.

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts   # writes out/entry.txt
```

## Files

- `main.ts` — the entry program (the whole submission).
- `README.md` — this file.
- `LICENSE` — MIT.
- `.makefun/owner.json` — the payout wallet for this entry.
