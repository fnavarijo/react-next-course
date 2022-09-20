import { useEffect, useState } from "react";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import Button from "react-bootstrap/Button";

import PageArticle from "../components/section/PageArticle";
import Dialog from "../components/common/Dialog";
import Form from "react-bootstrap/Form";

import { getProjects } from "../api/projects/getProjects";
import { createProjects } from "../api/projects/createProjects";

dayjs.extend(customParseFormat);

function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [projectInfo, setProjectInfo] = useState({});
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openNewProject = () => {
    setIsDialogOpen(true);
  };

  const createNewProject = async () => {
    const project = await createProjects({
      ...projectInfo,
      fechaInicio: dayjs(projectInfo.fechaInicio, 'MM/D/YYYY').toISOString(),
      fechaFin: dayjs(projectInfo.fechaFin, 'MM/D/YYYY').toISOString()
    });

    const userProjects = await getProjects();
    setProjects(userProjects);
  };

  const options = (
    <div>
      <Button onClick={openNewProject}>Nuevo</Button>
    </div>
  );

  useEffect(() => {
    async function fetchProject() {
      const userProjects = await getProjects();
      setProjects(userProjects);
    }

    fetchProject();
  }, []);

  return (
    <PageArticle title="Proyectos" options={options}>
      <div>{projects.length === 0 ? "Nada por aqui." : <div>Hello</div>}</div>
      <Dialog
        title="Crear proyecto"
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onCreate={createNewProject}
      >
        <Form>
          <Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre del proyecto"
              value={setProjectInfo.nombre}
              onChange={(e) =>
                setProjectInfo((prev) => ({ ...prev, nombre: e.target.value }))
              }
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Presupuesto</Form.Label>
            <Form.Control
              type="number"
              placeholder="Q. 250.00"
              value={setProjectInfo.presupuesto}
              onChange={(e) =>
                setProjectInfo((prev) => ({
                  ...prev,
                  presupuesto: parseFloat(e.target.value),
                }))
              }
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Fecha Inicio</Form.Label>
            <Form.Control
              type="text"
              placeholder="20/2/2022"
              value={setProjectInfo.fechaInicio}
              onChange={(e) =>
                setProjectInfo((prev) => ({
                  ...prev,
                  fechaInicio: e.target.value,
                }))
              }
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Fecha Final</Form.Label>
            <Form.Control
              type="text"
              placeholder="20/2/2022"
              value={setProjectInfo.fechaFin}
              onChange={(e) =>
                setProjectInfo((prev) => ({
                  ...prev,
                  fechaFin: e.target.value,
                }))
              }
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Alcance</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Alcance"
              value={setProjectInfo.alcance}
              onChange={(e) =>
                setProjectInfo((prev) => ({
                  ...prev,
                  alcance: e.target.value,
                }))
              }
            />
          </Form.Group>
        </Form>
      </Dialog>
    </PageArticle>
  );
}

export default Dashboard;
