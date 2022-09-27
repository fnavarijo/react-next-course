import { instance } from "../client";

export async function getActivities(config) {
  const { data } = await instance.get("/api/Activities", config);

  return data;
}
