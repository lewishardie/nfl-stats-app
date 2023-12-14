// player data

import { createContext, useState } from "react";

export const PlayerDataContext = createContext([]);

export function PlayerDataProvider(props){
    
    let [player, setPlayer] = useState([]);
    
    return(

        <PlayerDataContext.Provider value={{player, setPlayer}}>
            {props.children}
        </PlayerDataContext.Provider>
    )
}