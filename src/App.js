import { useState } from 'react';

import profile from './assets/profile.png';
import './App.css';

import Button from './components/Button';
import Input from './components/Input';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitForm = () => {
    console.log('Credentials: ', username, password);
  }

  return (
    <div className="App">
      <article className="App-login">
        <header>
          <img src={profile} className="App-profile" alt="" />
        </header>
        <div className="App-form">
          <Input
            name="user"
            label="Usuario"
            placeholder="Usuario"
            value={username}
            onChange={setUsername}
          />
          <Input
            name="password"
            label="Contraseña"
            placeholder="Contraseña"
            type="password"
            className="App-form-password"
            value={password}
            onChange={setPassword}
          />
          <a href="http://google.com" className="App-form-forgot-password">
            Olvide la contraseña
          </a>
          <Button label="Iniciar sesión" className="App-form-button-login" onClick={submitForm} />
          <Button label="Crear cuenta" inverted className="App-form-button" />
        </div>
      </article>
    </div>
  );
}

export default App;
