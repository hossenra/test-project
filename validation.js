// export function validateStringNotEmpty(value) {
//   if (value.trim().length === 0) {
//     throw new Error("Input can not be empty");
//   }
// }

import { a } from "vitest/dist/suite-a18diDsI.js";

// export function validateNumber(number) {
//   if (isNaN(number)) {
//     throw new Error("Invalid number input");
//   }
// }

export function validateEmail(email) {
  const emailRegex = /^[a-zA-Z]{7}$/;
  if (!emailRegex.test(email)) {
    throw new Error("Invalid email Address");
  }
}

export function validateArrayNotEmpty(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Array can not be empty");
  }
}
