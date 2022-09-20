import { instance } from "../client";

export async function getProject({ proyectoID }) {
  const { data } = await instance.get(`/api/Projects/${proyectoID}`);

  return data;
}
