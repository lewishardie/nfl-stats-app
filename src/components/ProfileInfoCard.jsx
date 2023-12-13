// display rendered items
// data comes from props


export default function ProfileInfoCard(props) {

    return(
        <div>
            <h1>{props.name}</h1>
            <img src={props.imageUrl} alt="Default profile image" />
        </div>
    )
}