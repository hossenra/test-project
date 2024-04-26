import { it, expect } from "vitest";
import { add } from "./math";
// Run | Debug;
it("should return the correct sum if an array of number is provided", () => {
  // Arrange
  const numbers = [1, 2, 3];
  const expectedResult = numbers.reduce((acc, cur) => acc + cur);

  // Actions
  const result = add(numbers);
  // Assertion
  expect(result).toBe(expectedResult);
});

// Run | Debug;
it("it should provide NaN if at least one invalid number is provided", () => {
  // Arrange
  const numbers = [1, "invalid", 3];

  // Actions
  const result = add(numbers);
  // Assertion
  expect(result).toBeNaN();
});

// Run | Debug;
it("it should provide correct sum if an array numeric string is provided", () => {
  // Arrange
  const numbers = ["1", "2", "3"];
  const expectedResult = numbers.reduce((acc, cur) => +acc + +cur);

  // Actions
  const result = add(numbers);
  // Assertion
  expect(result).toBe(expectedResult);
});

// Run | Debug;
it("it should through an error if no argument id passed", () => {
  const resultFn = () => {
    add();
  };

  expect(resultFn).toThrow();
});

// Run | Debug;
it("it should through an error if multiple argument is provided", () => {
  const resultFn = () => {
    add(1, 2, 3);
  };

  expect(resultFn).toThrow(/is not iterable/i);
});
