import { instance } from "../client";

export async function updateProject({ proyectoID, payload }, config) {
  const { data } = await instance.put(
    `/api/Projects/${proyectoID}`,
    { ...payload },
    { ...config }
  );

  return data;
}
