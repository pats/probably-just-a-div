# Task 05 — debounce & throttle

**Time target:** ~12 min
**File to edit:** `src/index.ts` — do not modify `tests/`

## Task

Implement `debounce` and `throttle` in `src/index.ts`.

### `debounce(fn, ms)`

Returns a function that delays calling `fn` until `ms` milliseconds
have passed since the **last** invocation.

```ts
const save = debounce((text: string) => api.save(text), 300);
save("hello"); // timer starts
save("world"); // timer resets
// 300ms after last call → api.save("world") called once
```

### `throttle(fn, ms)`

Returns a function that calls `fn` at most once per `ms` milliseconds.
The **first** call executes immediately; subsequent calls within the window are dropped.

```ts
const onScroll = throttle(() => updateUI(), 100);
// updateUI() runs immediately on first call,
// then at most once every 100ms
```

### Type requirements

Both functions must **fully preserve** the wrapped function's signature.
TypeScript callers must get correct parameter types and no accidental `any`.

```ts
const debounced = debounce((x: number, y: string) => x + y.length, 100);
debounced(1, "hi");  // ✓
debounced("nope");   // ✗ type error
```

## Rules

- No `any`, no `Function` type
- Do not modify `tests/`

## Run tests

```sh
pnpm test
```

## What we look at

- Correct closure mechanics (timer reference, latest args)
- TypeScript generics — `Parameters<T>` usage
- Edge cases: rapid repeated calls, argument forwarding
