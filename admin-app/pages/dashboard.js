import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';

import PageArticle from "../components/section/PageArticle";

import { getProjects } from '../api/projects/getProjects';

function Dashboard () {
  const createNewProject = () => {
    console.log('Creating');
  }
  
  const options = (
    <div>
      <Button onClick={createNewProject}>Nuevo</Button>
    </div>
  )

  useEffect(() => {
    async function fetchProject () {
      const projects = await getProjects();
      console.log('Projects', projects);
    }

    fetchProject();
  }, []);

  return (
    <PageArticle title="Proyectos" options={options} >
      <div>
        Hola mundo
      </div>
    </PageArticle>
  )
}

export default Dashboard;