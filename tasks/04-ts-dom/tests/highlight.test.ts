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

  it("wraps multiple occurrences", () => {
    const fragment = highlightMatches("banana", "an");
    const marks = fragment.querySelectorAll("mark");
    expect(marks.length).toBe(2);
  });

  it("does not use innerHTML with raw user input (XSS check)", () => {
    // If innerHTML is used naively, this would throw or render a script tag
    const xssPayload = '<img src=x onerror=alert(1)>';
    const fragment = highlightMatches("safe text", xssPayload);
    // The fragment must contain only text — no element nodes from the payload
    expect(fragment.querySelector("img")).toBeNull();
    expect(fragment.textContent).toBe("safe text");
  });
});
