// import { useState, useEffect } from 'react'
// import axios from 'axios'
// import { RAPID_API_KEY } from '@env';

// const rapidApiKey = RAPID_API_KEY

// const fetch = require('node-fetch');

// const url = 'https://tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com/getNFLPlayerInfo?playerName=travis_kel&getStats=true';
// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': rapidApiKey,
//     'X-RapidAPI-Host': 'tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

// import { createContext } from "react"

// const defaultConnectionData = {
//     url: "https://pokeapi.co/api/v2/pokemon"
// }

// //-- Every component within this context, will have defaultConnectionData available
// export const ConnectionContext = createContext(defaultConnectionData)

// export default function ConnectionProvider(props){
//     return (
//         <ConnectionContext.Provider value={defaultConnectionData}>
//             {props.children}
//         </ConnectionContext.Provider>
//     )
// }

