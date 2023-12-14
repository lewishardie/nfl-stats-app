// Display

import { useContext, useEffect } from "react";
import { PlayerDataContext } from "../contexts/PlayerDataProvider";
import ProfileInfoCard from "./ProfileInfoCard";


export default function ProfileDisplay() {

    let {player} = useContext(PlayerDataContext);

    useEffect(() => {
        console.log("Team display re-rendering now.");
    // When player changes, re-render
    // useEffet is listening to the player variable
    }, [player]);

    return(
        <div id="playerProfile">
            {player.map((element, index) => {
                return <ProfileInfoCard
                    key={element.displayName + index}
                    id={element.id}
                    name={element.displayName}
                    imgUrl={element.headshot.href}
                    // stats={element.statistics.{id}.}
                    team={element.team.href}
                    position={element.position.name}
                    jersey={element.jersey}
                />
            })}

        </div>

    )
}

// https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/athletes/{player.id}/statistics
// 