import { it, expect, beforeEach, describe, beforeAll } from "vitest";

import { User } from "./hooks";

const testEmail = "test@test.com";
let user;

beforeEach(() => {
  user = new User(testEmail);
});

beforeAll();

describe("test", () => {
  // Run | Debug
  it("should have an email property", () => {
    expect(user).toHaveProperty("email");
  });

  // Run | Debug
  it("should update the email", () => {
    const newTestEmail = "test2@test.com";
    user.updateEmail(newTestEmail);

    expect(user.email).toBe(newTestEmail);
  });
});

// Run | Debug
it("should store the provided email value", () => {
  expect(user.email).toBe(testEmail);
});

// Run | Debug
it("should clear the email", () => {
  user.clearEmail();

  expect(user.email).toBe("");
});

// Run | Debug
it("should still have an email property after clearing the email", () => {
  user.clearEmail();

  expect(user).toHaveProperty("email");
});
