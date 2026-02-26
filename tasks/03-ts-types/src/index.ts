// ─────────────────────────────────────────────
// Task 03 — TypeScript Type Utilities
// Implement the type below.
// Rules:
//   - No `any`, no `as unknown as T` tricks
//   - Do not modify the test file
// ─────────────────────────────────────────────

/**
 * Constructs a type by picking all properties from T
 * whose value type is assignable to V.
 *
 * Example:
 *   type User = { id: number; name: string; age: number; active: boolean }
 *   PickByValue<User, number>  // { id: number; age: number }
 *   PickByValue<User, string>  // { name: string }
 */
export type PickByValue<T, V> = never; // TODO
