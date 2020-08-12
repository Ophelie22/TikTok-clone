import React, { useState } from 'react';
import './VideoSidebar.css';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";

const VideoSidebar = ({ likes, shares, messages }) => {
    const [liked, setLiked] = useState(false);

    return (
        <div className="videoSidebar">
            <div className="videoSidebar__button">
                {liked ? (
                    <FavoriteIcon fontSize="large" onClick={() => setLiked(false)} />
                ) : (
                    <FavoriteBorderIcon fontSize="large" onClick={() => setLiked(true)} />
                )}
                <p>{ liked ? ++likes : likes}</p>
            </div>
            <div className="videoSidebar__button">
                <MessageIcon fontSize="large" />
                <p>{messages}</p>
            </div>
            <div className="videoSidebar__button">
                <ShareIcon fontSize="large" />
                <p>{shares}</p>
            </div>
        </div>
    );
}
 
export default VideoSidebar;