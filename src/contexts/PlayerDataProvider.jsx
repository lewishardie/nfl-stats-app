import { createContext } from "react";

export const PlayerDataContext = createContext([]);

export function PlayerDataProvider(props){
    
    return(

        <PlayerDataContext.Provider value={[]}>
            {props.children}
        </PlayerDataContext.Provider>
    )
}