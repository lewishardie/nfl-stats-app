// store api url in this context provider

import { createContext, useEffect, useState } from "react";

export const ApiContext = createContext({
    playerApi:"https://sports.core.api.espn.com/v2/sports/football/",
    standingsApi: "https://site.api.espn.com/apis/v2/sports/football/nfl/standings"
})
                                            
export function ApiProvider(props) {

    let [ url, setUrl ] = useState({
        playerApi: process.env.REACT_APP_PLAYER_API_URL || "default_player_api_url",
        standingsApi: process.env.REACT_APP_STANDINGS_API_URL || "default_player_api_url",
    });

    useEffect(() => {
        console.log("Player API url: " + url.playerApi);
        console.log("Standings API url: " + url.standingsApi);
    }, [url]);

    return (
        // sets useState hook to be provided throughout the data
        <ApiContext.Provider value={{url, setUrl}}>
            {props.children}
        </ApiContext.Provider>
    )
}

