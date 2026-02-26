# Task 01 — CSS Layout

**Time target:** ~10 min
**File to edit:** `src/style.css` — do not modify `index.html`

## Task

Style the product grid and card using **only CSS** — no JavaScript, no frameworks.

### `.product-grid`

- Responsive columns **without any `@media` queries**
- Minimum card width **260px**, maximum **1fr**
- Gap between cards: **1.5rem**

### `.product-card`

- White background, rounded corners, subtle shadow
- The card image fills the full card width with a fixed **4:3 aspect ratio** (no distortion)
- The card body is a flex column — `.product-card__footer` (price + button) must always sit
  at the **bottom** of the card, even when descriptions differ in length

### `.product-card__footer`

- Price and button on the **same row**, button pushed to the right

## What we look at

- Correct use of `auto-fill` / `auto-fit` and `clamp()`
- `aspect-ratio` vs padding-hack — and why you chose what you chose
- Clean, minimal CSS — no unnecessary rules
