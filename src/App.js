import profile from './assets/profile.png';
import './App.css';

import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <article className="App-login">
        <header>
          <img src={profile} className="App-profile" alt="" />
        </header>
        <div className="App-form">

          <Button label="Iniciar sesión"/>
          <Button label="Crear cuenta" inverted className="App-form-button"/>
        </div>

      </article>
    </div>
  );
}

export default App;
