# Task 03 — TypeScript Type Utilities

**Time target:** ~10 min
**File to edit:** `src/index.ts` — do not modify `tests/`

## Task

Implement the generic utility type in `src/index.ts`.

### `PickByValue<T, V>`

Like `Pick<T, K>`, but instead of picking by key name you pick by **value type**.

```ts
type User = { id: number; name: string; age: number; active: boolean };

type Nums = PickByValue<User, number>; // { id: number; age: number }
type Strs = PickByValue<User, string>; // { name: string; role: string }
type None = PickByValue<User, Date>;   // Record<never, never>
```

## Rules

- No `any`
- No `as unknown as T` or other type-level escape hatches
- Do not modify `tests/`

## Run tests

```sh
pnpm test
pnpm typecheck
```

## What we look at

- Knowledge of mapped types and conditional types
- Handling of edge cases (no matching properties)
- Readability — a correct but unreadable solution scores lower
