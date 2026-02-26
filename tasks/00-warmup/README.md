# Task 00 — Warm-up: JS Fundamentals

**Time target:** ~5 min
**File to edit:** `src/index.ts` — do not modify `tests/`

## Task

For each question, replace `null!` with the value the expression evaluates to.
The type annotation tells you what type to use — do not change it.

```ts
// Example: the expression `1 + 1` evaluates to 2
export const example: number = 2;
```

## Topics covered

| Section    | Questions |
|------------|-----------|
| Equality   | `==` vs `===`, `null`/`undefined`, `NaN` |
| `typeof`   | quirky return values |
| Hoisting   | `var` declaration hoisting |
| Closures   | `var` in a `for` loop |
| Event loop | microtasks vs macrotasks |

## Run tests

```sh
pnpm test
```

## What we look at

- Knowledge of JS coercion rules and `==` / `===` semantics
- Awareness of `typeof` quirks (`null`, `NaN`)
- Understanding of `var` hoisting and closure mechanics
- Familiarity with the event loop (microtask vs macrotask order)
