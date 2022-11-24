import axios from 'axios';
import './App.css';
import Routing from './Routing';



axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routing />
      </header>
    </div>
  );
}

export default App;
