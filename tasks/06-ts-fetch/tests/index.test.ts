import { afterEach, describe, expect, it, vi } from "vitest";
import { apiFetch } from "../src/index.js";

// We mock globalThis.fetch so no real network requests are made.

afterEach(() => vi.restoreAllMocks());

function mockFetch(status: number, body: unknown, statusText = "OK") {
  vi.spyOn(globalThis, "fetch").mockResolvedValue(
    new Response(JSON.stringify(body), {
      status,
      statusText,
      headers: { "Content-Type": "application/json" },
    }),
  );
}

// ── Happy path ───────────────────────────────

describe("apiFetch — success", () => {
  it("returns ok: true with parsed data on 200", async () => {
    const payload = [{ id: 1, name: "Alice" }];
    mockFetch(200, payload);

    const result = await apiFetch<typeof payload>("/api/users");

    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.data).toEqual(payload);
    }
  });

  it("accepts 201 as success", async () => {
    mockFetch(201, { id: 42 });
    const result = await apiFetch<{ id: number }>("/api/items");
    expect(result.ok).toBe(true);
  });
});

// ── HTTP errors ──────────────────────────────

describe("apiFetch — HTTP errors", () => {
  it("returns ok: false on 404", async () => {
    mockFetch(404, {}, "Not Found");
    const result = await apiFetch("/api/missing");
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.error.status).toBe(404);
    }
  });

  it("uses statusText as the error message", async () => {
    mockFetch(500, {}, "Internal Server Error");
    const result = await apiFetch("/api/boom");
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.error.message).toBe("Internal Server Error");
    }
  });
});
