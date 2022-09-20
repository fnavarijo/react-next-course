import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import PageArticle from "../../components/section/PageArticle";

import { getProject } from '../../api/projects/getProject';

import styles from '../../styles/pages/Proyectos.module.css';

export default function Proyectos () {
  const { query } = useRouter();
  const [currentProject, setCurrentProject] = useState({});

  useEffect(() => {
    async function fetchProject () {
      const proyecto = await getProject({ proyectoID: query.id });

      setCurrentProject(proyecto);
    }

    fetchProject();
  }, [])

  return (
    <PageArticle title={currentProject.nombre}>
      <section>
        <div>
          <span className={styles.projectPropertyLabel}>Fecha inicio:</span>
          { currentProject.fechaInicio }
        </div>
        <div>
          <span className={styles.projectPropertyLabel}>Fecha final:</span>
          { currentProject.fechaFin }
        </div>
        <div>
          <span className={styles.projectPropertyLabel}>Presupuesto:</span>
          Q. { parseFloat(currentProject.presupuesto).toFixed(2) }
        </div>
        <div>
          <span className={styles.projectPropertyLabel}>Alcance:</span>
          { currentProject.alcance }
        </div>
      </section>
    </PageArticle>
  )
}