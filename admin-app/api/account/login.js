import { instance } from "../client";

export async function login({ email, password }) {
  const { data } = await instance.post("/api/Accounts/Login", {
    email,
    password,
  });

  return data;
}
