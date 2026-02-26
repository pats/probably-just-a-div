import type { User } from "./data.js";

// ─────────────────────────────────────────────
// Task 04 — DOM Search with Highlight
// Implement the two functions below.
//
// Rules:
//   - Do NOT use innerHTML with the raw user query.
//   - Do not modify tests/ or data.ts.
// ─────────────────────────────────────────────

/**
 * Returns a DocumentFragment containing the text with every occurrence
 * of `query` wrapped in a <mark> element.
 * Matching must be case-insensitive.
 *
 * IMPORTANT: Do NOT use innerHTML with unsanitised user input.
 *
 * @example
 *   highlightMatches("Alice Nowak", "ali")
 *   // <mark>Ali</mark>ce Nowak
 */
export function highlightMatches(text: string, query: string): DocumentFragment {
  // TODO
  const fragment = document.createDocumentFragment();
  fragment.appendChild(document.createTextNode(text));
  return fragment;
}

/**
 * Renders `users` into `container`, highlighting `query` in each user's name.
 * Each list item must contain the user's name (with highlight) and department.
 * Clears the container before rendering.
 */
export function renderList(container: HTMLUListElement, users: User[], query: string): void {
  // TODO
}
