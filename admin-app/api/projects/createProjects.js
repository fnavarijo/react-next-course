import { instance } from "../client";

export async function createProjects({ nombre, fechaInicio, fechaFin, presupuesto, alcance }) {
  const { data } = await instance.post("/api/Projects", {
    nombre,
    fechaInicio,
    fechaFin,
    presupuesto,
    alcance
  });

  return data;
}
