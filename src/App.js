import './App.css';

import { Routes, Route } from 'react-router-dom';


import Navbar from './components/NavBar';
import PlayerProfile from './pages/PlayerProfile';
import Teams from './pages/Teams';
import Standings from './pages/Standings';
import Home from './pages/Home';



function App() {

  return (
    <div className="App">
      <h1>NFL stats APP</h1>
      <Navbar />
      <div className="container">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/players" element={<PlayerProfile/>} />
        <Route path="/teams" element={<Teams/>} />
        <Route path="/standings" element={<Standings />} />
      </Routes>
      </div>
      
      {/* <ProfileDisplay /> */}

    </div>
  );
}

export default App;