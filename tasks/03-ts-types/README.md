# Task 03 — TypeScript Type Utilities

**Time target:** ~12 min
**File to edit:** `src/index.ts` — do not modify `tests/`

## Task

Implement two generic utility types in `src/index.ts`.

### `DeepReadonly<T>`

Makes every property in `T` readonly — recursively into nested objects.

```ts
type Config = { db: { host: string; port: number }; debug: boolean };

type R = DeepReadonly<Config>;
// { readonly db: { readonly host: string; readonly port: number }; readonly debug: boolean }
```

### `PickByValue<T, V>`

Like `Pick<T, K>`, but instead of picking by key name you pick by **value type**.

```ts
type User = { id: number; name: string; age: number; active: boolean };

type Nums = PickByValue<User, number>; // { id: number; age: number }
type Strs = PickByValue<User, string>; // { name: string }
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
- Handling of edge cases (primitives vs objects, empty result)
- Readability — a correct but unreadable solution scores lower
