

// https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams

// sports.leagues.teams.team.id
// sports.leagues.teams.team.displayName

// Display

import { useContext, useEffect } from "react";
import { TeamDataContext } from "../contexts/TeamDataProvider";




export default function TeamDisplay() {

    let team = useContext(TeamDataContext);

    useEffect(() => {
        console.log("Team display re-rendering now.");
    }, [team]);

    return(
        <div id="teamDisplay">

        </div>

    )
}

 