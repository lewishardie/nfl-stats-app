


export default function CurrentStandingsInfoCard(props) {

    return(
        <div className="currentStandingsInforCard">
            <div>
                <h1>{props.name}</h1>
                <h1>{props.id}</h1>
            </div>
            <div className="afc">
                <h1>{props.afc}</h1>
                <div className="ne">
                    <h2>{props.ne}</h2>
                    <img src={props.neImg} alt="default"/>
                    <h3>Wins: {props.neWins}</h3>
                    <h3>Losses: {props.neLosses}</h3>
                    <h3>Playoff Seed: {props.neSeed}</h3>
                </div>
                <div className="bal">
                    <h2>{props.bal}</h2>
                    <img src={props.balImg} alt="default"/>
                </div>
                <div className="mia">
                    <h2>{props.mia}</h2>
                    <img src={props.miaImg} alt="default"/>
                </div>
            </div>
            <div className="afc">
                <h1>{props.nfc}</h1>
            </div>

        </div>

    )
}
