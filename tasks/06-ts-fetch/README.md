# Task 06 — Typed Fetch Client

**Time target:** ~12 min
**File to edit:** `src/index.ts` — do not modify `tests/`

## Task

Implement `apiFetch<T>` — a typed wrapper around `fetch` that **never throws**
and returns a discriminated union instead.

```ts
const result = await apiFetch<User[]>("/api/users");

if (result.ok) {
  console.log(result.data); // User[]
} else {
  console.error(result.error.status, result.error.message);
}
```

### Return type

```ts
type ApiResult<T> =
  | { ok: true;  data: T }
  | { ok: false; error: ApiError }
```

### Error handling rules

| Situation | `ok` | `status` | `message` |
|---|---|---|---|
| HTTP 2xx | `true` | — | — |
| HTTP non-2xx, JSON has `message` | `false` | HTTP status | value of `body.message` |
| HTTP non-2xx, no `message` in JSON | `false` | HTTP status | HTTP `statusText` |
| `fetch` throws (network error, CORS…) | `false` | `0` | error message |

## Rules

- Do not throw — all error paths return `{ ok: false, ... }`
- No `any`
- Do not modify `tests/`

## Run tests

```sh
pnpm test
```

## What we look at

- Discriminated union pattern — correct narrowing in caller code
- All four error paths handled
- Clean async/await with proper error boundaries
- No accidental `any` in the generic plumbing
