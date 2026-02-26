# Task 02 — CSS Skeleton Loader

**Time target:** ~10 min
**Files to edit:** `src/style.css` and `index.html` (ARIA attributes only)

## Task

Implement a loading skeleton for a profile card.

### Visual requirements

- Grey blocks that match the shape of the real card (avatar circle + text lines)
- A **shimmer animation**: a lighter gradient sweeps from left to right
- Line variants: full width, 70%, and 40%

### Accessibility requirements

The skeleton `<div class="card card--skeleton">` in `index.html` is missing ARIA attributes.
Add the **minimum required** attributes so that screen readers:

1. Understand the section is in a loading state
2. Do not read out the individual skeleton shapes as content

### Motion requirements

The shimmer animation **must be disabled** when `prefers-reduced-motion: reduce` is set.
A static grey block is acceptable — no animation at all is fine.

## What we look at

- Shimmer technique (`@keyframes` + `background-position` or `clip-path` — pick what you know)
- Correct ARIA usage — not over-engineered, not missing
- `prefers-reduced-motion` handling
