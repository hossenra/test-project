import { describe, it, expect, vi } from "vitest";
import { generateToken } from "./app";

describe("generateToken()", () => {
  // Run | Debug
  it("should execute the logger function if passed", () => {
    const loggerFn = vi.fn();
    generateToken(loggerFn);

    expect(loggerFn).toBeCalled();
  });
});
