import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import styles from '../styles/pages/Login.module.css';

function Login () {
  return <div className={styles.loginContainer}>
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Usuario</Form.Label>
        <Form.Control type="text" placeholder="Usuario" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Contraseña" />
      </Form.Group>
    </Form>
    <div className={styles.loginButtons}>
      <Button>Iniciar Sesion</Button>
      <Button variant="outline-primary">Crear cuenta</Button>
    </div>
  </div>
}

export default Login;