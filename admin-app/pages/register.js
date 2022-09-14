import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import styles from "../styles/pages/Login.module.css";

function Register() {
  const [validated, setValidated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const doLogin = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity()) {
      console.log('Is working')
    }

    setValidated(true);
  };

  const onUserNameChange = (e) => setUsername(e.target.value);
  const onPasswordNameChange = (e) => setPassword(e.target.value);
  const onConfirmPasswordNameChange = (e) => setConfirmPassword(e.target.value);

  return (
    <div className={styles.loginContainer}>
      <Form noValidate validated={validated} onSubmit={doLogin}>
        <Form.Group className="mb-3">
          <Form.Label>Usuario</Form.Label>
          <Form.Control
            type="text"
            placeholder="Usuario"
            required
            value={username}
            onChange={onUserNameChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">Not cool!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Contraseña"
            required
            minLength={6}
            value={password}
            onChange={onPasswordNameChange}
          />
          <Form.Control.Feedback type="invalid">Ingrese contraseña valida!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Contraseña"
            required
            minLength={6}
            pattern={password}
            value={confirmPassword}
            onChange={onConfirmPasswordNameChange}
          />
          <Form.Control.Feedback type="invalid">
            { confirmPassword !== password ? 'Contraseñas no coinciden': 'Ingrese contraseña valida' }
          </Form.Control.Feedback>
        </Form.Group>
        <div className={styles.loginButtons}>
          <Button type="submit">Registrar</Button>
          <Button variant="outline-primary">Ya tengo cuenta</Button>
        </div>
      </Form>
    </div>
  );
}

export default Register;
