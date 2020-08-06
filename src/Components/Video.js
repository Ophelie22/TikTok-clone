import React, { useRef, useState } from 'react';
import './Video.css';

const Video = () => {
    const videoRef = useRef(null);
    const [play, setPlay] = useState(false);

    const onVideoPress = () => {
        if (play) {
            videoRef.current.pause();
            setPlay(false);
        } else {
            videoRef.current.play();
            setPlay(true);
        }
    }

    return (
        <div className="video">
            <video 
                className="video__player"
                loop
                controls={false}
                ref={videoRef}
                onClick={onVideoPress}
                src="https://v16m.tiktokcdn.com/9f2483ea9434f4735f588dda566844f8/5f2f21f5/video/tos/useast2a/tos-useast2a-pve-0068/be94a636a6574bd5adcd0eae37b19dca/?a=1233&br=3048&bt=1524&cr=0&cs=0&dr=0&ds=3&er=&l=2020080622064501019018604405512C5D&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=ajd1amZ0cjU1djMzODczM0ApZjo3ZTZoaGQ4Nzk6ZDo8N2cvc2lpcTY1bWBfLS0uMTZzczJiMGFfMzUvMS4tMmIxNTM6Yw%3D%3D&vl=&vr=">
            </video>
        </div>
    );
}
 
export default Video;