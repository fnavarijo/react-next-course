import { instance } from "../client";

export async function registerAccount({ email, password }) {
  const response = await instance.post("/api/Accounts", {
    email,
    password,
  });

  return response;
}
