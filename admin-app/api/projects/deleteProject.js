import { instance } from '../client';

export async function deleteProject({ proyectoID, payload }, config) {
  const { data } = await instance.delete(
    `/api/Projects/${proyectoID}`,
    { ...config }
  );

  return data;
}
