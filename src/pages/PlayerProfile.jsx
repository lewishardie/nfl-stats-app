import ProfileDisplay from "../components/ProfileDisplay";
import { PlayerSearchForm } from "../components/playerSearchForm";


export default function PlayerProfile(props) {

    return(
        <div className="playerProfile">
            <PlayerSearchForm />
            <ProfileDisplay />

        </div>

    )
}