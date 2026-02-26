# Task 04 — DOM Search with Highlight

**Time target:** ~12 min
**File to edit:** `src/search.ts` — do not modify `tests/`, `src/data.ts`, or `src/index.ts`

## Task

Implement `highlightMatches` in `src/search.ts`.

### `highlightMatches(text, query)`

Returns a `DocumentFragment` with the first occurrence of `query` (case-insensitive)
wrapped in a `<mark>` element. The surrounding text is plain `Text` nodes.
Returns a plain text node when `query` is empty.

```
highlightMatches("Alice Nowak", "ali")
→ [<mark>Ali</mark>, "ce Nowak"]

highlightMatches("Alice Nowak", "")
→ ["Alice Nowak"]
```

### `renderList(container, users, query)` — bonus

Already wired up in `src/index.ts`. If you have time, implement it in `src/search.ts`
to see the live demo in the browser: renders each user as a `<li>` with their
highlighted name and department.

## Run tests

```sh
pnpm test
```

## What we look at

- `DocumentFragment` + `Text` nodes + `createElement`
- Correct case-insensitive matching
- Clean, readable DOM manipulation
