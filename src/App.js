import './App.css';
import { PlayerSearchForm } from './components/PlayerSearchForm';

function App() {

  // let apiUrl = useContext(ApiContext)

  return (
    <div className="App">

      <h1>NFL stats APP</h1>
      <PlayerSearchForm/>


      {/* <h1>{apiUrl}</h1> */}
    </div>
  );
}

export default App;
