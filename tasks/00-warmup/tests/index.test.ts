import { describe, expect, it } from "vitest";
import { q1, q2, q3, q4, q5, q6, q7, q8, q9, q10 } from "../src/index.js";

describe("Equality", () => {
  it("0 == false", () => expect(q1).toBe(true));
  it("0 === false", () => expect(q2).toBe(false));
  it("null == undefined", () => expect(q3).toBe(true));
  it("NaN === NaN", () => expect(q4).toBe(false));
});

describe("typeof", () => {
  it("typeof null", () => expect(q5).toBe("object"));
  it("typeof NaN", () => expect(q6).toBe("number"));
  it("typeof undefined", () => expect(q7).toBe("undefined"));
});

describe("Hoisting", () => {
  it("var is hoisted but not initialised — foo() returns undefined", () =>
    expect(q8).toBeUndefined());
});

describe("Closures", () => {
  it("var in for-loop is shared — fns[0]() returns 3", () => expect(q9).toBe(3));
});

describe("Event loop", () => {
  it("microtasks run before macrotasks — order is ADCB", () => expect(q10).toBe("ADCB"));
});
