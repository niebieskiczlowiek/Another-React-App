import './Profile.scss'
import '../../App.scss'

const Profile = (props) => {
    return (
        <div className="profile-container">
            <div className="container profile">
                <div className="image-container">
                    <img src={props.image} />
                </div>
                <div className="info-container">
                    <h2>{props.name}</h2>
                    <pre>{props.description}</pre>
                </div>
            </div>
        </div>
    )
}

export default Profile;

// 3 komponenty dowolne