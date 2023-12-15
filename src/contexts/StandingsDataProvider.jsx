// Currentl scoreboard

import { createContext, useState } from "react";

export const StandingsDataContext = createContext(["default"]);

export function StandingsDataProvider(props){
    
    let [standings, setStandings] = useState([]);
    
    return(

        <StandingsDataContext.Provider value={{standings, setStandings}}>
            {props.children}
        </StandingsDataContext.Provider>
    )
}

// https://site.api.espn.com/apis/v2/sports/football/nfl/standings