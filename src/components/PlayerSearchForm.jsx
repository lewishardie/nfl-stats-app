
import { useContext, useState } from "react";
import { ApiContext } from "../contexts/ApiProvider";
import { PlayerDataContext } from "../contexts/PlayerDataProvider";

export function PlayerSearchForm(){
    let {url} = useContext(ApiContext);
    // let playerData = useContext(PlayerDataContext)
    let {setPlayer} = useContext(PlayerDataContext);
    
    // input field as a variable, react has to control the variable
    let [searchData, setSearchData] = useState("14876");

    const searchForPlayer = async () => {
        let response = await fetch(url + "athletes/" + searchData);
        let data = await response.json();
        // renders one player profile
        setPlayer([data]);
    }

    return (
        <div>
            <h5>Enter a Players name</h5>
            <input 
                type="text"
                name="playerName"
                id="playerName"
                value={searchData}
                onChange={event => setSearchData(event.target.value)} 
            />
            <button onClick={searchForPlayer} type="submit">Search</button>
            <div className="dropdown">

            </div>
        </div>
    )
}

// let fetchData = async () => {
//     let randomPokemonNumber = Math.floor(Math.random() * 1017) + 1;
//     let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonNumber}`);
//     let data = await response.json();
//     // setPokemon({name: data.name})
//     setPokemon(data);
// };


// function getPokemon(){
// fetchData();
// };