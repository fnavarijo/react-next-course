import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

import PageArticle from "../components/section/PageArticle";

import { getProjects } from '../api/projects/getProjects';

function Dashboard () {
  const [projects, setProjects] = useState([]);

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
      const userProjects = await getProjects();
      setProjects(userProjects);
    }

    fetchProject();
  }, []);

  return (
    <PageArticle title="Proyectos" options={options} >
      <div>
        { projects.length === 0 ? 'Nada por aqui.' : <div>Hello</div> }
      </div>
    </PageArticle>
  )
}

export default Dashboard;