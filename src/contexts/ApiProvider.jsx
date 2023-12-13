// store api url in this context provider

import { createContext, useEffect, useState } from "react";

// const defaultConnectionData = {
//     url: "http://sports.core.api.espn.com/v2/"
// }

export const ApiContext = createContext("https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/")

export function ApiProvider(props) {

    let [ url, setUrl ] = useState(process.env.REACT_APP_API_URL);

    useEffect(() => {
        console.log("APP url: " + url);
    }, [url]);

    return (
        // sets useState hook to be provided throught the data
        <ApiContext.Provider value={{url, setUrl}}>
            {props.children}
        </ApiContext.Provider>
    )
}

