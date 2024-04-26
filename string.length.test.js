import { it, expect } from "vitest";
import { stringLength } from "./string.length";

// Run | Debug
it("returns correct length for non-empty string", () => {
  expect(stringLength("hello")).toBe(5);
  expect(stringLength("world")).toBe(5);
  expect(stringLength("hello world")).toBe(11);
});

// Run | Debug
it("returns 0 for empty string", () => {
  expect(stringLength("")).toBe(0);
});

// Run | Debug
it("throws error for non-string input", () => {
  expect(() => stringLength(null)).toThrow();
  expect(() => stringLength(undefined)).toThrow();
  expect(stringLength(125)).toBeUndefined();
});
