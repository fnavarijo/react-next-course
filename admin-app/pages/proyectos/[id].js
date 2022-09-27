import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import Button from "react-bootstrap/Button";

import PageArticle from "../../components/section/PageArticle";
import { ProjectDialog } from "../../components/dashboard/dialog/ProjectDialog";
import { ConfirmDialog } from "../../components/dashboard/dialog/ConfirmDialog";
import { CreateActivityDialog } from "../../components/dashboard/dialog/CreateActivityDialog";
import { AppTable } from "../../components/common/AppTable";

import { getProject } from "../../api/projects/getProject";
import { updateProject } from "../../api/projects/updateProject";
import { deleteProject } from "../../api/projects/deleteProject";
import { addActivity } from "../../api/activities/addActivity";
import { getActivities } from "../../api/activities/getActivities";

import styles from "../../styles/pages/Proyectos.module.css";

dayjs.extend(customParseFormat);

export default function Proyectos({ proyecto, activities }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isActivityDialogOpen, setIsActivityDialogOpen] = useState(false);
  const [userProject, setUserProject] = useState({});
  const [projectActivities, setProjectActivities] = useState([]);
  const [projectForm, setProjectForm] = useState({
    nombre: "",
    presupuesto: 0,
    fechaInicio: "",
    fechaFin: "",
    alcance: "",
  });
  const [activityForm, setActivityForm] = useState({});

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

  const onActivityAdd = async () => {
    const { id } = router.query;
    await addActivity({
      ...activityForm,
      proyectoID: id,
      fechaInicio: dayjs(activityForm.fechaInicio, 'MM/D/YYYY').toISOString(),
      fechaFin: dayjs(activityForm.fechaFin, 'MM/D/YYYY').toISOString(),
    });
    const activities = await getActivities();

    setProjectActivities(activities);
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

    console.log(activities);

    setUserProject({ ...proyecto });
    setProjectActivities(activities)
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

      <section className={styles.projectActivitiesSection}>
        <header>
          <h2>Actividades</h2>
        </header>
        <hr />
        <div className={styles.activitiesCreate}>
          <Button onClick={() => setIsActivityDialogOpen(true)}>
            Agregar
          </Button>
        </div>
        <AppTable
          headers={['#', 'Nombre', 'Fecha Inicio', 'Fecha Final', 'Costo', 'Responsable']}
          body={projectActivities}
          hasOptions
        />
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
      <CreateActivityDialog
        isOpen={isActivityDialogOpen}
        onClose={() => setIsActivityDialogOpen(false)}
        fields={activityForm}
        setFields={setActivityForm}
        onCreate={onActivityAdd}
      />
    </PageArticle>
  );
}

export async function getServerSideProps({ query, req }) {
  const { token } = req.cookies;
  
  try {
    const proyecto = await getProject(
      { proyectoID: query.id },
      { headers: { authorization: `Bearer ${token}` } }
    );
    let activities = await getActivities(
      { headers: { authorization: `Bearer ${token}` } }
    );

    activities = activities.map((
      { actividadID, nombre, fechaInicio, fechaFin, costo, nombreResponsable }
    ) => [actividadID, nombre, fechaInicio, fechaFin, costo, nombreResponsable]);

    return {
      props: {
        proyecto,
        activities
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false
      }
    }
  }
}
