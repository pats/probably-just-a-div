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

| Situation    | `ok`    | `status`    | `message`        |
|--------------|---------|-------------|------------------|
| HTTP 2xx     | `true`  | —           | —                |
| HTTP non-2xx | `false` | HTTP status | HTTP `statusText` |

## Try it out

Use [JSONPlaceholder](https://jsonplaceholder.typicode.com) — a free, no-auth public REST API:

```ts
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// success
const ok = await apiFetch<Todo>("https://jsonplaceholder.typicode.com/todos/1");

// 404
const err = await apiFetch("https://jsonplaceholder.typicode.com/todos/99999");
```

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
- Clean async/await with proper error boundaries
- No accidental `any` in the generic plumbing
