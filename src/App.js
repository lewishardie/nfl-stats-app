import './App.css';

import { PlayerSearchForm } from './components/PlayerSearchForm';
import ProfileDisplay from './components/ProfileDisplay';

function App() {

  return (
    <div className="App">

      <h1>NFL stats APP</h1>
      <PlayerSearchForm/>
      
      <ProfileDisplay />


      {/* <h1>{apiUrl}</h1> */}
    </div>
  );
}

export default App;
