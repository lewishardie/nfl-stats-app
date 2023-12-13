
import { useContext, useState } from "react";
import { ApiContext } from "../contexts/ApiProvider";

export function PlayerSearchForm(){
    let apiUrlBase = useContext(ApiContext);
    // input field as a variable, react has to control the variable
    let [searchData, setSearchData] = useState();


    const searchForPlayer = async () => {
        // console.log(`API URL is: ${apiUrlBase}`);
        let response = await fetch(apiUrlBase + "sports/football/leagues/nfl/" + searchData)
    }
    
    return (
        <div>
            <h5>Enter a Players name</h5>
            <input 
            type="text" 
            id="playerName"
            value={searchData}
            onChnage={event => setSearchData(event.target.value)} 
            />
            <button onClick={searchForPlayer} type="submit">Search</button>
        </div>
    )
}