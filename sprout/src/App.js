import logo from './sproutLogo.png';
import './App.css';
import { NavBar } from './components/navbar.js';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
        </header>
        <div className='Tabs'>
          <NavBar></NavBar>
        </div>
      </div>
  );
}

export default App;
