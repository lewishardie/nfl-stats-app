

// https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams

// sports.leagues.teams.team.id
// sports.leagues.teams.team.displayName

// Display

import { useContext, useEffect } from "react";
import { TeamDataContext } from "../contexts/TeamDataProvider";
import TeamInfoCard from "./TeamInfoCard";



export default function TeamDisplay() {

    let team = useContext(TeamDataContext);

    useEffect(() => {
        console.log("Team display re-rendering now.");
    // When player changes, re-render
    // useEffet is listening to the player variable
    }, [team]);

    return(
        <div id="teamDisplay">
            {team.map((element, index) => {
                return <TeamInfoCard 

                
                />

            })}

        </div>

    )
}

 