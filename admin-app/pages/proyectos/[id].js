import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import Button from "react-bootstrap/Button";

import PageArticle from "../../components/section/PageArticle";
import { ProjectDialog } from "../../components/dashboard/dialog/ProjectDialog";
import { ConfirmDialog } from "../../components/dashboard/dialog/ConfirmDialog";

import { getProject } from "../../api/projects/getProject";
import { updateProject } from "../../api/projects/updateProject";
import { deleteProject } from "../../api/projects/deleteProject";

import styles from "../../styles/pages/Proyectos.module.css";

export default function Proyectos({ proyecto }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [userProject, setUserProject] = useState({});
  const [projectForm, setProjectForm] = useState({
    nombre: "",
    presupuesto: 0,
    fechaInicio: "",
    fechaFin: "",
    alcance: "",
  });

  const router = useRouter();

  const onUpdateForm = async () => {
    const { id } = router.query;
    const response = await updateProject({
      proyectoID: id,
      payload: {
        ...projectForm,
        fechaInicio: dayjs(projectForm.fechaInicio, 'MM/D/YYYY').toISOString(),
        fechaFin: dayjs(projectForm.fechaFin, 'MM/D/YYYY').toISOString(),
      },
    });

    setIsDialogOpen(false);
    setUserProject({ ...projectForm })
  };

  const onDeleteProject = async () => {
    const { id } = router.query;
    const response = await deleteProject({ proyectoID: id });
    router.push('/dashboard');
  }

  const options = (
    <div>
      <Button onClick={() => setIsDialogOpen(true)}>Editar</Button>
      <Button variant="danger" onClick={() => setIsDeleteDialogOpen(true)} >Eliminar</Button>
    </div>
  );

  useEffect(() => {
    setProjectForm((prev) => ({
      ...prev,
      ...proyecto,
      fechaInicio: dayjs(proyecto.fechaInicio).format("DD/M/YYYY"),
      fechaFin: dayjs(proyecto.fechaFin).format("DD/M/YYYY"),
    }));

    setUserProject({ ...proyecto });
  }, []);

  return (
    <PageArticle title={userProject.nombre} options={options}>
      <section>
        <div>
          <span className={styles.projectPropertyLabel}>Fecha inicio:</span>
          {userProject.fechaInicio}
        </div>
        <div>
          <span className={styles.projectPropertyLabel}>Fecha final:</span>
          {userProject.fechaFin}
        </div>
        <div>
          <span className={styles.projectPropertyLabel}>Presupuesto:</span>
          Q. {parseFloat(userProject.presupuesto).toFixed(2)}
        </div>
        <div>
          <span className={styles.projectPropertyLabel}>Alcance:</span>
          {userProject.alcance}
        </div>
      </section>

      <ProjectDialog
        fields={projectForm}
        setFields={setProjectForm}
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onCreate={onUpdateForm}
      />
      <ConfirmDialog
        isOpen={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
        onDelete={onDeleteProject}
      />
    </PageArticle>
  );
}

export async function getServerSideProps({ query, req }) {
  const { token } = req.cookies;
  const proyecto = await getProject(
    { proyectoID: query.id },
    { headers: { authorization: `Bearer ${token}` } }
  );

  return {
    props: {
      proyecto,
    },
  };
}
