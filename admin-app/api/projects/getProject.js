import { instance } from "../client";

export async function getProject({ proyectoID }, config) {
  const { data } = await instance.get(`/api/Projects/${proyectoID}`, { ...config });

  return data;
}
