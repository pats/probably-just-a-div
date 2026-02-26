# Task 04 — DOM Search with Highlight

**Time target:** ~12 min
**File to edit:** `src/search.ts` — do not modify `tests/`, `src/data.ts`, or `src/index.ts`

## Task

Implement a live search that filters a user list and highlights matching text.

### `highlightMatches(text, query)`

Returns a `DocumentFragment` with every occurrence of `query` (case-insensitive)
wrapped in a `<mark>` element. The rest of the text is plain `Text` nodes.

```
highlightMatches("Alice Nowak", "ali")
→ [<mark>Ali</mark>, "ce Nowak"]
```

**Important:** Do **not** build the result using `innerHTML` with the raw user query.

### `renderList(users, query)`

Renders each user as a `<li>` containing their highlighted name and department.
Clears the list before each render.

### Event wiring

Already done in `src/index.ts` — do not modify it.
Focus entirely on `src/search.ts`.

## Run tests

```sh
pnpm test
```

## What we look at

- `DocumentFragment` + `Text` nodes + `createElement` — no `innerHTML` shortcut
- XSS awareness — the test explicitly checks for it
- Clean, readable DOM manipulation
