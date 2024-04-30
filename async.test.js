import { it, expect, beforeAll, afterAll, beforeEach, afterEach } from "vitest";
import { encryptMessage, encryptMessagePromise } from "./async";

beforeAll(() => {
  console.log("Before All");
});

afterAll(() => {
  console.log("After All");
});

beforeEachEach(() => {
  console.log("Before Each Test");
});

afterEach(() => {
  console.log("After Each Test");
});

it("should encrypt a message ", async () => {
  const message = "Programming Hero";
  const secretKey = "43267890";

  const encryptedData = await new Promise((resolve, reject) => {
    encryptMessage(message, secretKey, (message) => {
      resolve(message);
    });
  });

  expect(encryptedData).toBeDefined();
});

// Run | Debug
it("should also just pass", async () => {
  const message = "Programming Hero";
  const secretKey = "43267890";

  const encryptedData = await encryptMessagePromise(message, secretKey);
  expect(encryptedData).toBeDefined();
});

// Run | Debug
it("should encrypt the message correctly", async () => {
  const message = "Programming Hero";
  const secretKey = "43267890";
});

// Run | Debug
it("should encrypt the message correctly", async () => {
  const message = "hello world";
  const key = "secret";
  const encryptedMessage = await encryptMessagePromise(message, key);
  expect(encryptMessage).toBeDefined();

  const decryptedMessage = CryptoJS.AES.decrypt(encryptedMessage, key).toString(
    CryptoJS.enc.Utf8
  );
  expect(decryptedMessage).toBe(message);
});
