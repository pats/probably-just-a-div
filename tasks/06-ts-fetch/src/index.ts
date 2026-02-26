// ─────────────────────────────────────────────
// Task 06 — Typed Fetch Client
// ─────────────────────────────────────────────
// Implement `apiFetch` — a thin, typed wrapper
// around the native fetch API.
//
// See README.md for full requirements.
// ─────────────────────────────────────────────

export interface ApiError {
  status: number;
  message: string;
}

/**
 * A discriminated union result type — no exceptions thrown.
 *
 * On success: { ok: true;  data: T }
 * On failure: { ok: false; error: ApiError }
 */
export type ApiResult<T> = { ok: true; data: T } | { ok: false; error: ApiError };

/**
 * Fetches `url` and returns an `ApiResult<T>`.
 *
 * Requirements:
 * 1. Parse the response body as JSON.
 * 2. If the HTTP status is not 2xx, return ok: false with the status code
 *    and the HTTP status text as the error message.
 * 3. The caller supplies the expected shape via the generic parameter T.
 *    Trust it — no runtime schema validation is required.
 *
 * @example
 *   const result = await apiFetch<User[]>("/api/users");
 *   if (result.ok) {
 *     console.log(result.data); // User[]
 *   } else {
 *     console.error(result.error.status, result.error.message);
 *   }
 */
export async function apiFetch<T>(
  url: string,
  options?: RequestInit,
): Promise<ApiResult<T>> {
  // TODO
  throw new Error("not implemented");
}
