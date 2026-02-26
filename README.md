# probably-just-a-div

Frontend recruitment challenge — senior / principal level.

## Setup

```sh
pnpm install
```

## Tasks

Work through them in any order. Each task is self-contained.

| # | Folder | Topic | Time |
|---|---|---|---|
| 00 | [`tasks/00-warmup`](tasks/00-warmup/README.md) | JS fundamentals quiz — equality, `typeof`, hoisting, closures, event loop | ~5 min |
| 01 | [`tasks/01-css-layout`](tasks/01-css-layout/README.md) | CSS Grid — responsive layout without media queries | ~10 min |
| 02 | [`tasks/02-css-skeleton`](tasks/02-css-skeleton/README.md) | CSS skeleton loader + accessibility + reduced motion | ~10 min |
| 03 | [`tasks/03-ts-types`](tasks/03-ts-types/README.md) | TypeScript type utility (`PickByValue`) | ~10 min |
| 04 | [`tasks/04-ts-dom`](tasks/04-ts-dom/README.md) | DOM search with text highlight | ~12 min |
| 05 | [`tasks/05-ts-algo`](tasks/05-ts-algo/README.md) | `debounce` & `throttle` with preserved TypeScript types | ~12 min |
| 06 | [`tasks/06-ts-fetch`](tasks/06-ts-fetch/README.md) | Typed `fetch` wrapper — discriminated union, no throws | ~12 min |

## Rules

- **No external libraries.** Vanilla TypeScript, HTML, and CSS only.
  The only allowed packages are already listed in `package.json` (TypeScript, Vitest, Biome).
- **No AI-generated code.** We check for it — it also doesn't help you in the follow-up conversation.
- Each task's `README.md` tells you exactly which files to edit.
  Do not modify test files.

## Running tests (TypeScript tasks)

```sh
# all tasks
pnpm test

# single task
cd tasks/05-ts-algo && pnpm test
```

## Type checking

```sh
pnpm typecheck
```

## What to submit

A link to a public fork or a zip of this repository.
Include a `DECISIONS.md` at the root with a short note (5–10 sentences) on:

- Which task you found most interesting and why
- Any trade-off or edge case you intentionally left out
- Anything you would do differently with more time
