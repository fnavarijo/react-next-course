import { useState } from "react";
import { useRouter } from 'next/router';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Cookie from 'js-cookie';

import { login } from '../api/account/login';
import { useSession } from '../custom-hooks/useSession';

import styles from "../styles/pages/Login.module.css";

function Login() {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useSession();
  const router = useRouter();

  const doLogin = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity()) {
      const { token, expirationDate } = await login({ email, password });
      Cookie.set('token', token);
      Cookie.set('expirationDate', expirationDate);

      router.push('/dashboard');
    }

    setValidated(true);
  };

  const onUserNameChange = (e) => setEmail(e.target.value);
  const onPasswordNameChange = (e) => setPassword(e.target.value);

  return (
    <div className={styles.loginContainer}>
      <Form noValidate validated={validated} onSubmit={doLogin}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Usuario</Form.Label>
          <Form.Control
            type="text"
            placeholder="Usuario"
            required
            value={email}
            onChange={onUserNameChange}
          />
          <Form.Control.Feedback type="invalid">
            Campo requerido
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Contraseña"
            required
            value={password}
            onChange={onPasswordNameChange}
          />
          <Form.Control.Feedback type="invalid">
            Campo requerido
          </Form.Control.Feedback>
        </Form.Group>
        <div className={styles.loginButtons}>
          <Button type="submit">Iniciar Sesion</Button>
          <Button variant="outline-primary">Crear cuenta</Button>
        </div>
      </Form>
    </div>
  );
}

export default Login;
