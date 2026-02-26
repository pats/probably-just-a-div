import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { debounce, throttle } from "../src/index.js";

beforeEach(() => vi.useFakeTimers());
afterEach(() => vi.useRealTimers());

// ── debounce ─────────────────────────────────

describe("debounce", () => {
  it("does not call fn immediately", () => {
    const fn = vi.fn();
    const debounced = debounce(fn, 100);
    debounced();
    expect(fn).not.toHaveBeenCalled();
  });

  it("calls fn once after the delay", () => {
    const fn = vi.fn();
    const debounced = debounce(fn, 100);
    debounced();
    vi.advanceTimersByTime(100);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("passes the latest arguments to fn", () => {
    const fn = vi.fn();
    const debounced = debounce(fn, 100);
    debounced("first");
    debounced("second");
    vi.advanceTimersByTime(100);
    expect(fn).toHaveBeenCalledWith("second");
  });
});

// ── throttle ─────────────────────────────────

describe("throttle", () => {
  it("calls fn immediately on first call", () => {
    const fn = vi.fn();
    const throttled = throttle(fn, 100);
    throttled();
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("ignores calls within the throttle window", () => {
    const fn = vi.fn();
    const throttled = throttle(fn, 100);
    throttled();
    throttled();
    throttled();
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("allows another call after the window expires", () => {
    const fn = vi.fn();
    const throttled = throttle(fn, 100);
    throttled();
    vi.advanceTimersByTime(100);
    throttled();
    expect(fn).toHaveBeenCalledTimes(2);
  });

  it("passes arguments correctly", () => {
    const fn = vi.fn();
    const throttled = throttle(fn, 100);
    throttled("a", 1);
    expect(fn).toHaveBeenCalledWith("a", 1);
  });
});
