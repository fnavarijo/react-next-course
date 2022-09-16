import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useSession } from '../../custom-hooks/useSession';

import styles from '../../styles/layout/Dashboard.module.css';

function AuthenticationLayout({ children }) {
  useSession();

  return (
    <div>
      <Navbar className={styles.dashboardNav}>
        <Nav className='justify-content-end'>
            <Nav.Link>
              Proyectos
            </Nav.Link>
            <Nav.Link>
              Ejecutores
            </Nav.Link>
            <Nav.Link>
              Beneficiarios
            </Nav.Link>
            <Nav.Link>
              Cerrar sesión
            </Nav.Link>
          
        </Nav>
      </Navbar>
      <div className={styles.dashboardContainer}>
        {children}
      </div>
    </div>
  );
}

export default AuthenticationLayout;
