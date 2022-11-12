import './Gallery.scss'
import '../../App.scss'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import Context from './../../context/App.context';
import { useContext } from 'react';

const Gallery = (props) => {
    const context = useContext(Context);
    const { twitterProfile, twitterProfileState } = context;
    return (
        <div className="gallery-container">
            <div className="container gallery">
                {/* <h1>Browse chosen twitter profile</h1> */}
                <div className="cell">
                    <div className="twitter-container">
                        {twitterProfileState && <TwitterTimelineEmbed
                            isDarkMode={true}
                            sourceType="profile"
                            screenName={twitterProfile}
                            options={{ height: 500 }}
                            />}
                        <TwitterHashtagButton
                            tag={twitterProfile}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery;