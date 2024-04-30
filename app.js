import crypto from "crypto";
import { saveTokenToFile } from "./io";

function log(message) {
  console.log(message);
}

export function generateToken(logger) {
  const token = crypto.randomBytes(32).toString("hex");
  if (logger) console.log(token);
  return token;
}

export async function storeToken(data) {
  if (!data) {
    throw new Error("No token received");
  }
  await saveTokenToFile(data, "data txt");
}

const data = generateToken(log);
storeToken(data);
