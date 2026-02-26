import { describe, expectTypeOf, it } from "vitest";
import type { DeepReadonly, PickByValue } from "../src/index.js";

// ── DeepReadonly ──────────────────────────────

describe("DeepReadonly", () => {
  type Config = {
    db: { host: string; port: number };
    flags: { beta: boolean; experimental: boolean };
    name: string;
  };

  type ReadonlyConfig = DeepReadonly<Config>;

  it("makes top-level properties readonly", () => {
    expectTypeOf<ReadonlyConfig["name"]>().toEqualTypeOf<string>();
    // The property must be readonly — this should NOT compile if writable:
    type _check = Readonly<ReadonlyConfig> extends ReadonlyConfig ? true : false;
    expectTypeOf<_check>().toEqualTypeOf<true>();
  });

  it("makes nested object properties readonly", () => {
    expectTypeOf<ReadonlyConfig["db"]["host"]>().toEqualTypeOf<string>();
    type _check = Readonly<ReadonlyConfig["db"]> extends ReadonlyConfig["db"] ? true : false;
    expectTypeOf<_check>().toEqualTypeOf<true>();
  });

  it("does not change primitive value types", () => {
    expectTypeOf<ReadonlyConfig["name"]>().toEqualTypeOf<string>();
    expectTypeOf<ReadonlyConfig["db"]["port"]>().toEqualTypeOf<number>();
  });
});

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
