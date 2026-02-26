import type { User } from "./data.js";

// ─────────────────────────────────────────────
// Task 04 — DOM Search with Highlight
// Implement the functions below.
//
// Rules:
//   - Do not modify tests/.
// ─────────────────────────────────────────────

/**
 * Returns a DocumentFragment containing the text with the first occurrence
 * of `query` wrapped in a <mark> element.
 * Matching must be case-insensitive.
 * Returns a plain text node when `query` is empty.
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
 * Bonus: Renders `users` into `container`, highlighting `query` in each
 * user's name. Each list item must show the user's name (with highlight)
 * and department. Clears the container before rendering.
 */
export function renderList(container: HTMLUListElement, users: User[], query: string): void {
  // TODO (bonus)
}
