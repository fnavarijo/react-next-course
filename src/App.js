import profile from './assets/profile.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <article className="App-login">
        <header>
          <img src={profile} className="App-profile" alt="" />
        </header>
      </article>
    </div>
  );
}

export default App;
