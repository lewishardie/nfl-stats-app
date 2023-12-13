// Display

import { useContext, useEffect } from "react";
import { PlayerDataContext } from "../contexts/PlayerDataProvider";
import ProfileInfoCard from "./ProfileInfoCard";


export default function ProfileDisplay() {

    let {player} = useContext(PlayerDataContext);

    useEffect(() => {
        console.log("Team display re-rendering now.");

    }, [player]);

    return(
        <div>
            {player.map((element, index) => {
                return <ProfileInfoCard name={element.name}/>
            })}

        </div>
    )
}