
import { useContext, useState } from "react";
import { ApiContext } from "../contexts/ApiProvider";
import { PlayerDataContext } from "../contexts/PlayerDataProvider";

export function PlayerSearchForm(){
    let {url} = useContext(ApiContext);
    // let playerData = useContext(PlayerDataContext)
    let {player, setPlayer} = useContext(PlayerDataContext);
    
    // input field as a variable, react has to control the variable
    let [searchData, setSearchData] = useState(14856);

    const searchForPlayer = async () => {
        // console.log(`API URL is: ${apiUrlBase}`);
        let response = await fetch(url + "athletes/" + searchData);
        let data = await response.json();
        // playerData.push(data);
        setPlayer([...player, data]);
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
        </div>
    )
}