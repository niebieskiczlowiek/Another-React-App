import './Profile.scss'
import Context from './../../context/App.context';
import { useContext } from 'react'; 

const Profile = (props) => {
    const context = useContext(Context);
    const {picContent, userName, profileBio, banerState, banerContent } = context;

    return (
        <div className="profile-container">
                <div className="profile">
                        {banerState 
                        ? <div className="baner-container">
                                <img className="baner" src={banerContent}/>
                        </div> 
                        : null}
                        <div className="image-container">
                            {picContent 
                                ? <img className="image" src={picContent} alt="profile" />
                                : <img className="image" src="https://static.vecteezy.com/system/resources/previews/002/534/006/original/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg" alt="profile" />
                            }
                        </div>
                        <div className="info-container">
                            <div className="info">
                                <h2 class="usernameHeader">{userName}</h2>
                                <div className="userBio">
                                    <p> {profileBio} </p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
    )
}

export default Profile;

// 3 komponenty dowolne