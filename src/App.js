import './App.css';

import Navbar from './components/NavBar';

import { Routes, Route } from 'react-router-dom';
import { PlayerSearchForm } from './components/PlayerSearchForm';
import ProfileDisplay from './components/ProfileDisplay';
// import { BrowserRouter, NavLink, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <h1>NFL stats APP</h1>
      <Navbar />
      <div className="container">
      <Routes>
        {/* <Route path="/" element={<PlayerSearchForm/>} /> */}
        <Route path="/players" element={<PlayerSearchForm/>} />
        {/* <Route path="/teams" element={<PlayerSearchForm/>} />
        <Route path="/scoreboard" element={<PlayerSearchForm/>} /> */}
      </Routes>
      </div>
      
      <ProfileDisplay />

    </div>
  );
}

export default App;


// {/* <Routes>
// <Route path='/' element={<HomePage />} />
// {/* This works, but there can be tedious when there are many nested routes

// <Route path='/about' element={<AboutPage />} />
// <Route path='/about/contact' element={<ContactPage />} /> 

// Better alternatives available
// */}
// <Route path='/about' element={<Outlet />}>
//   <Route index element={<AboutPage />} />
//   <Route path='contact' element={<ContactPage />} />

// </Route>
// <Route path='/cards' element={<BusinessCardPage />} />
// <Route path='/pokemon' element={<PokemonFetcherPage />} />
// </Routes> */}



// import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';

//   return (
//     <div className="App">
//       {message && <h1>{message}</h1>}
//       <BrowserRouter>
//         <ul>
//           <li>
//             <NavLink to='/leagues/12345/team_1'>Page 1</NavLink>
//           </li>
//           <li>
//             <NavLink to='/2/4/8'>Page 2</NavLink>
//           </li>
//         </ul>
//         <Routes>
//           <Route path="/:banana/:id/:potato" element={<NumberGrabber/>} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;