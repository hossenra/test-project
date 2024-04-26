import { it, expect } from "vitest";
import { cleanNumbers } from "./numbers";

// Run | Debug
it("should return an array of numbers if an array of string number is provided", () => {
  const stringNumbers = ["2", "3"];

  const result = cleanNumbers(stringNumbers);

  expect(result[0]).toBeTypeOf("string");
});

// Run | Debug
it("should through error if at least an empty string is provided", () => {
  const stringNumbers = ["", "3"];

  const resultFn = () => cleanNumbers(stringNumbers);

  expect(resultFn).toThrow();
});
