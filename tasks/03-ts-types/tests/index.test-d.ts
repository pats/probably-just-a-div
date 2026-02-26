import { describe, expectTypeOf, it } from "vitest";
import type { PickByValue } from "../src/index.js";

// ── PickByValue ───────────────────────────────

describe("PickByValue", () => {
  type User = {
    id: number;
    name: string;
    age: number;
    active: boolean;
    role: string;
  };

  it("picks properties with a number value type", () => {
    expectTypeOf<PickByValue<User, number>>().toEqualTypeOf<{ id: number; age: number }>();
  });

  it("picks properties with a string value type", () => {
    expectTypeOf<PickByValue<User, string>>().toEqualTypeOf<{ name: string; role: string }>();
  });

  it("picks properties with a boolean value type", () => {
    expectTypeOf<PickByValue<User, boolean>>().toEqualTypeOf<{ active: boolean }>();
  });

  it("returns empty object when no properties match", () => {
    expectTypeOf<PickByValue<User, Date>>().toEqualTypeOf<Record<never, never>>();
  });
});
