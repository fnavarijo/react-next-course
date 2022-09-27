import { instance } from "../client";

export async function addActivity({ proyectoID, nombre, fechaInicio, fechaFin, costo, descripcion, nombreResponsable }) {
  const { data } = await instance.post("/api/Activities", {
    proyectoID,
    nombre,
    fechaInicio,
    fechaFin,
    costo,
    descripcion,
    nombreResponsable
  });

  return data;
}
