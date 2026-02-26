// ─────────────────────────────────────────────
// Task 05 — debounce & throttle
// Implement the two functions below.
// Rules:
//   - The TypeScript types must fully preserve
//     the wrapped function's signature.
//   - No `any`, no `Function` type.
//   - Do not modify tests/.
// ─────────────────────────────────────────────

/**
 * Returns a debounced version of `fn` that delays invocation
 * until `ms` milliseconds have elapsed since the last call.
 *
 * The returned function has the same parameter and return-value
 * types as `fn` — callers must not lose type information.
 *
 * @example
 *   const save = debounce((text: string) => api.save(text), 300);
 *   save("hello"); // called but not yet executed
 *   save("world"); // resets the timer
 *   // 300ms later → api.save("world") is called once
 */
export function debounce<T extends (...args: unknown[]) => void>(
  fn: T,
  ms: number,
): (...args: Parameters<T>) => void {
  // TODO
  return fn;
}

/**
 * Returns a throttled version of `fn` that invokes it at most
 * once per `ms` milliseconds. The first call executes immediately.
 * Subsequent calls within the window are ignored.
 *
 * @example
 *   const onScroll = throttle(() => updateUI(), 100);
 *   // Regardless of how often onScroll is called,
 *   // updateUI() runs at most 10 times per second.
 */
export function throttle<T extends (...args: unknown[]) => void>(
  fn: T,
  ms: number,
): (...args: Parameters<T>) => void {
  // TODO
  return fn;
}
