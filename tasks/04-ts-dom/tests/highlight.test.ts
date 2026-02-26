import { describe, expect, it } from "vitest";
import { highlightMatches } from "../src/search.js";

describe("highlightMatches", () => {
  it("returns plain text when query is empty", () => {
    const fragment = highlightMatches("Alice Nowak", "");
    expect(fragment.textContent).toBe("Alice Nowak");
    expect(fragment.querySelector("mark")).toBeNull();
  });

  it("wraps the matching substring in <mark>", () => {
    const fragment = highlightMatches("Alice Nowak", "Ali");
    const mark = fragment.querySelector("mark");
    expect(mark).not.toBeNull();
    expect(mark?.textContent).toBe("Ali");
  });

  it("is case-insensitive", () => {
    const fragment = highlightMatches("Alice Nowak", "alice");
    const mark = fragment.querySelector("mark");
    expect(mark?.textContent?.toLowerCase()).toBe("alice");
  });
});
