import { it, expect, describe } from "vitest";
import { validateArrayNotEmpty, validateEmail } from "./validation";

describe("validateEmail()", () => {
  // Run | Debug
  it("should validate a correct email address", () => {
    const email = "example@gmail.com";
    const resultFn = () => validateEmail(email);
    expect(resultFn).not.toThrow();
  });

  // Run | Debug
  it("should through an error if an invalid email is passed", () => {
    const email = "example";
    const resultFn = () => validateEmail(email);
    expect(resultFn).toThrow();
  });

  // Run | Debug
  it("should through an error if an empty string is passed", () => {
    const email = "";
    const resultFn = () => validateEmail(email);
    expect(resultFn).toThrow();
  });
});

describe("validateArrayNotEmpty()", () => {
  // Run | Debug
  it("should validate a non-empty ", () => {
    const array = [2, 5];
    const resultFn = () => validateArrayNotEmpty(array);
    expect(resultFn).not.toThrow();
  });
});
