import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import PageArticle from "../../components/section/PageArticle";

import { getProject } from '../../api/projects/getProject';

import styles from '../../styles/pages/Proyectos.module.css';

export default function Proyectos ({ proyecto }) {
  return (
    <PageArticle title={proyecto.nombre}>
      <section>
        <div>
          <span className={styles.projectPropertyLabel}>Fecha inicio:</span>
          { proyecto.fechaInicio }
        </div>
        <div>
          <span className={styles.projectPropertyLabel}>Fecha final:</span>
          { proyecto.fechaFin }
        </div>
        <div>
          <span className={styles.projectPropertyLabel}>Presupuesto:</span>
          Q. { parseFloat(proyecto.presupuesto).toFixed(2) }
        </div>
        <div>
          <span className={styles.projectPropertyLabel}>Alcance:</span>
          { proyecto.alcance }
        </div>
      </section>
    </PageArticle>
  )
}

export async function getServerSideProps ({ query, req }) {
  const { token } = req.cookies;
  const proyecto = await getProject(
    { proyectoID: query.id },
    { headers:
      { authorization: `Bearer ${token}` }
    }
  );
  
  return {
    props: {
      proyecto
    }
  }
}