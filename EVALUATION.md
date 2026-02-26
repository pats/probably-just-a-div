# Evaluation rubric

> Internal document — do not share with candidates.

## Scoring overview

Each task is scored 0–3:

| Score | Meaning |
|---|---|
| 0 | Not attempted or fundamentally wrong |
| 1 | Works but shows gaps (wrong approach, missing edge cases) |
| 2 | Correct, clean, handles expected cases |
| 3 | Correct + handles edge cases + demonstrates depth of knowledge |

---

## Task 01 — CSS Layout

| Signal | What to look for |
|---|---|
| `auto-fill` vs `auto-fit` | Does the candidate know the difference? `auto-fill` is correct here. |
| `clamp()` | Used correctly for min/max column width — not hardcoded breakpoints |
| `aspect-ratio` | Preferred over padding hack; candidate should be able to explain why |
| Footer pinned | `flex-grow` on `.product-card__body` or equivalent — not absolute positioning |
| No `@media` | Disqualifying if used |

**Red flag:** Using `@media` queries instead of fluid techniques.

---

## Task 02 — CSS Skeleton

| Signal | What to look for |
|---|---|
| Shimmer technique | `background: linear-gradient(...)` + `background-size` + `@keyframes` animating `background-position`. Accepts `clip-path` approach too. |
| `prefers-reduced-motion` | `@media (prefers-reduced-motion: reduce)` disabling the animation |
| ARIA | `aria-busy="true"` or `role="status"` on the skeleton container; `aria-hidden="true"` on individual shape divs |
| Over-engineering | Penalise adding JavaScript just to toggle visibility |

**Red flag:** `animation: none` is enough for reduced-motion — candidate does not need a separate static style.

---

## Task 03 — TypeScript Type Utilities

| Signal | What to look for |
|---|---|
| `DeepReadonly` | Mapped type + conditional branch for object vs primitive |
| Handles arrays | Does `DeepReadonly` recurse into `T[]`? |
| `PickByValue` | `{ [K in keyof T as T[K] extends V ? K : never]: T[K] }` or equivalent key remapping |
| No `any` | Hard requirement — instant score 1 cap if `any` is used |
| Readability | A one-liner is fine if readable; a 20-line version for a simple type is a signal |

**Green flag:** Candidate mentions `noUncheckedIndexedAccess` interaction or `exactOptionalPropertyTypes` edge cases.

---

## Task 04 — DOM Search

| Signal | What to look for |
|---|---|
| No `innerHTML` with user input | Core requirement — auto-fail the XSS test if violated |
| `DocumentFragment` | Correct use of `createDocumentFragment` + `createTextNode` + `createElement("mark")` |
| Multiple matches | `String.indexOf` loop or `RegExp` with `g` flag — both valid |
| Empty query | No `<mark>` elements, original text returned intact |
| `renderList` clears before render | `replaceChildren()` or `innerHTML = ""` — candidate should prefer `replaceChildren` |

**Red flag:** Using `innerHTML` anywhere near the query string.
**Green flag:** Uses `replaceChildren()` instead of `innerHTML = ""`.

---

## Task 05 — debounce & throttle

| Signal | What to look for |
|---|---|
| Timer ref cleared | `clearTimeout` before setting new timer in debounce |
| Latest args captured | Closure captures `args` from the most recent call |
| Throttle leading edge | First call executes immediately |
| `Parameters<T>` | Generic constraint + `Parameters` — not `...args: any[]` |
| No `any` | Hard requirement |

**Common mistake:** Debounce that calls `fn` with stale arguments from the first call.
**Green flag:** Candidate mentions that this implementation is "leading edge only" for throttle and could be extended.

---

## Task 06 — Typed Fetch

| Signal | What to look for |
|---|---|
| Discriminated union | Return type is `ApiResult<T>` — not `T \| null` or throwing |
| All four error paths | 2xx, non-2xx with message, non-2xx without message, network throw |
| `response.ok` check | Uses built-in `.ok` or explicit `status >= 200 && status < 300` |
| `try/catch` around `fetch()` | Network errors caught and mapped to `{ ok: false, error: { status: 0 } }` |
| No `any` | Generic `T` must be threaded correctly |

**Red flag:** Function that throws on error — defeats the entire purpose.
**Green flag:** Mentions that the `T` cast is intentionally unchecked and explains when you'd want runtime validation (zod etc.).

---

## DECISIONS.md bonus

Award up to +2 points (across the total score) for a `DECISIONS.md` that:

- Identifies a real trade-off or edge case (not just restating what they did)
- Mentions what they would do differently at scale
- Shows awareness of browser compatibility, accessibility, or performance implications

Penalise generic/AI-sounding text with 0 bonus.

---

## Disqualifiers

- Use of `any` in TypeScript tasks
- Use of `innerHTML` with raw user input in task 04
- Use of `@media` queries in task 01
- Modifying test files
