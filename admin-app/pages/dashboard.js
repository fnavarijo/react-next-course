import { useEffect, useState } from "react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

import PageArticle from "../components/section/PageArticle";
import Dialog from "../components/common/Dialog";
import { ProjectDialog } from "../components/dashboard/dialog/ProjectDialog";
import DashboardCard from "../components/dashboard/DashboardCard";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { getProjects } from "../api/projects/getProjects";
import { createProjects } from "../api/projects/createProjects";

import styles from "../styles/pages/Dashboard.module.css";

dayjs.extend(customParseFormat);

function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [projectInfo, setProjectInfo] = useState({
    nombre: '',
    presupuesto: 0,
    fechaInicio: '',
    fechaFin: '',
    alcance: ''
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openNewProject = () => {
    setIsDialogOpen(true);
  };

  const createNewProject = async () => {
    const project = await createProjects({
      ...projectInfo,
      fechaInicio: dayjs(projectInfo.fechaInicio, "MM/D/YYYY").toISOString(),
      fechaFin: dayjs(projectInfo.fechaFin, "MM/D/YYYY").toISOString(),
    });

    const userProjects = await getProjects();
    setProjects(userProjects);
    setProjectInfo({
      nombre: '',
      presupuesto: 0,
      fechaInicio: '',
      fechaFin: '',
      alcance: ''
    });
    setIsDialogOpen(false);
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
      <div className={styles.dashboardGrid}>
        {projects.length === 0
          ? "Nada por aqui."
          : projects.map((project, index) => (
              <DashboardCard
                nombre={project.nombre}
                fechaInicio={dayjs(project.fechaInicio).format("DD/M/YYYY")}
                fechaFin={dayjs(project.fechaFin).format("DD/M/YYYY")}
                proyectoID={project.proyectoID}
                key={index}
              />
            ))}
      </div>
      <ProjectDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        fields={projectInfo}
        setFields={setProjectInfo}
        onCreate={createNewProject}
      />
    </PageArticle>
  );
}

export default Dashboard;
