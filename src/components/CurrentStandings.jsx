import { useContext, useEffect} from "react";
import { StandingsDataContext } from "../contexts/StandingsDataProvider";
import CurrentStandingsInfoCard from "./CurrentStandingsInfoCard";
// import Conference from "./Conference";
import { ApiContext } from "../contexts/ApiProvider";

export function CurrentStandings(){
    let {url} = useContext(ApiContext)
    let {standings, setStandings} = useContext(StandingsDataContext);

        const fetchStandings = async () => {
            try {
                let response = await fetch(url.standingsApi);
                // look into using CORS
                // mode: "cors"
                // headers: {}
                let data = await response.json();
                setStandings([data]);
            } catch(error) {
                console.error("Error fetching standings: ", error)
            }
        }
    
        useEffect(() => {
            fetchStandings();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])

    // const { }
    //-- html content with if, else   
    return(
        // <div id="standings">
        //     {standings.map((conference, index) => (
        //     <Conference key={index} conference={conference} />
        //     ))}
        // </div>
        <div id="standings">
            {standings.map((element) => {
                return <CurrentStandingsInfoCard
                    key={element.abbreviation}
                    id={element.abbreviation}
                    name={element.name}
                    afc={element.children[0].name}
                        ne={element.children[0].standings.entries[0].team.displayName}
                            neImg={element.children[0].standings.entries[0].team.logos[0].href}
                            neWins={element.children[0].standings.entries[0].stats[11].displayValue}
                            neLosses={element.children[0].standings.entries[0].stats[3].displayValue}
                            neSeed={element.children[0].standings.entries[0].stats[4].displayValue}
                        bal={element.children[0].standings.entries[1].team.displayName}
                        mia={element.children[0].standings.entries[2].team.displayName}

                    nfc={element.children[1].forAll}
                />
            })}

        </div>

    )
};