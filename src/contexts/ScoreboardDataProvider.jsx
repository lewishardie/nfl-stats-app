// Currentl scoreboard

import { createContext, useState } from "react";

export const ScoreboardDataContext = createContext([]);

export function ScoreboardDataProvider(props){
    
    let [scoreboard, setScoreboard] = useState([]);
    
    return(

        <ScoreboardDataContext.Provider value={{scoreboard, setScoreboard}}>
            {props.children}
        </ScoreboardDataContext.Provider>
    )
}