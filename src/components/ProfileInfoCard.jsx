// display rendered items
// data comes from props


export default function ProfileInfoCard(props) {

    return(
        <div className="profileInfoCard">
            <div>
            <h1>{props.name}</h1>
            <h1>{props.id}</h1>
            <h2>{props.jersey}</h2>
            <img src={props.imgUrl} alt="default"/>
            </div>
            <div>
            <h2>hello</h2>
            <h3>{props.stats}</h3>
            <h3>{props.position}</h3>
            <h3>{props.team}</h3>
            </div>

        </div>

    )
}

// https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/athletes/{14876}/statistics/0