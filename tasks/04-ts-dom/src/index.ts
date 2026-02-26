import { USERS } from "./data.js";
import { highlightMatches, renderList } from "./search.js";

// ── Init ──────────────────────────────────────
// Wire up the search input to filter + re-render the list.
// Do not modify this file — implement the functions in search.ts.

const searchInput = document.getElementById("search") as HTMLInputElement;
const userList = document.getElementById("user-list") as HTMLUListElement;

renderList(userList, USERS, "");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim();
  const filtered = USERS.filter((u) =>
    u.name.toLowerCase().includes(query.toLowerCase()),
  );
  renderList(userList, filtered, query);
});

export { highlightMatches, renderList };
