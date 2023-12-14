import ProfileDisplay from "../components/ProfileDisplay";
import { PlayerSearchForm } from "../components/PlayerSearchForm";


export default function PlayerProfile(props) {

    return(
        <div className="playerProfile">
            <h1>Player Profile</h1>

            <PlayerSearchForm />
            <ProfileDisplay />

        </div>

    )
}