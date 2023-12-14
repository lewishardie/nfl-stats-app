// Currentl scoreboard

import { createContext, useState } from "react";

export const TeamDataContext = createContext([]);

export function TeamDataProvider(props){
    
    let [team, setTeam] = useState([]);
    
    return(

        <TeamDataContext.Provider value={{team, setTeam}}>
            {props.children}
        </TeamDataContext.Provider>
    )
}