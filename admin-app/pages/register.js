import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import styles from "../styles/pages/Login.module.css";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const doLogin = (e) => {
    e.preventDefault();
    console.log("Hello", username, password);
  };

  const onUserNameChange = (e) => setUsername(e.target.value);
  const onPasswordNameChange = (e) => setPassword(e.target.value);
  const onConfirmPasswordNameChange = (e) => setConfirmPassword(e.target.value);

  return (
    <div className={styles.loginContainer}>
      <Form onSubmit={doLogin}>
        <Form.Group className="mb-3">
          <Form.Label>Usuario</Form.Label>
          <Form.Control
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={onUserNameChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={onPasswordNameChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Contraseña"
            value={confirmPassword}
            onChange={onConfirmPasswordNameChange}
          />
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
