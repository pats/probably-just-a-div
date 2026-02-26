// ─────────────────────────────────────────────────────────────────
// Task 00 — Warm-up: JS Fundamentals
//
// For each question, replace `null!` with the value the expression
// evaluates to. Do not change the type annotation.
// Do not modify tests/.
//
// Example — the expression `1 + 1` evaluates to `2`:
//   export const example: number = 2;
// ─────────────────────────────────────────────────────────────────

// ── Equality ─────────────────────────────────────────────────────

/** Q1:  0 == false */
export const q1: boolean = null!;

/** Q2:  0 === false */
export const q2: boolean = null!;

/** Q3:  null == undefined */
export const q3: boolean = null!;

/** Q4:  NaN === NaN */
export const q4: boolean = null!;

// ── typeof ───────────────────────────────────────────────────────

/** Q5:  typeof null */
export const q5: string = null!;

/** Q6:  typeof NaN */
export const q6: string = null!;

/** Q7:  typeof undefined */
export const q7: string = null!;

// ── Hoisting ─────────────────────────────────────────────────────

/**
 * Q8: What does this function return?
 *
 *   function foo() {
 *     return x;
 *     var x = 1;
 *   }
 *   foo()
 */
export const q8: undefined = null!;

// ── Closures ─────────────────────────────────────────────────────

/**
 * Q9: What does fns[0]() return?
 *
 *   const fns: Array<() => number> = [];
 *   for (var i = 0; i < 3; i++) {
 *     fns.push(() => i);
 *   }
 *   fns[0]()
 */
export const q9: number = null!;

// ── Event loop ───────────────────────────────────────────────────

/**
 * Q10: In what order are the letters logged to the console?
 *
 *   console.log("A");
 *   setTimeout(() => console.log("B"), 0);
 *   Promise.resolve().then(() => console.log("C"));
 *   console.log("D");
 *
 * Fill in a 4-letter string, e.g. "ABCD".
 */
export const q10: string = null!;
