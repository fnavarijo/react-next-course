import { instance } from "../client";

export async function getProjects() {
  const { data } = await instance.get("/api/Projects");

  return data;
}
