import React, { useEffect, useRef } from 'react';
import VideoComponent from './VideoComponent';
import { FcLike } from "react-icons/fc";
import InstagramIcon from './InstagramIcon';
import XIcon from './XIcon';

const ProfileSection = ({ id, name, birthdate, job, hometown, hobbies, videoSrc, instagramUrl, xUrl }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
  
    if (videoElement) {
      // 再生速度を0.7に設定
      videoElement.playbackRate = 0.7;
  
      const handleVideoClick = () => {
        if (videoElement.paused) {
          videoElement.play();
        } else {
          videoElement.pause();
        }
      };
  
      videoElement.addEventListener('click', handleVideoClick);
  
      return () => {
        videoElement.removeEventListener('click', handleVideoClick);
      };
    }
  }, []);

  return (
    <div id={id} className="profile">
      <VideoComponent ref={videoRef} src={videoSrc} className="profile-video" />
      <div className="text-overlay">
        {name}<br />
        生年月日: {birthdate}<br />
        仕事: {job}<br />
        出身: {hometown}<br />
        趣味: {hobbies}
      </div>
      <div className="social-icons">
        <FcLike className="fc-like" style={{ color: '#00a6ff' }} />
        {instagramUrl && <a href={instagramUrl} rel="noopener noreferrer"><InstagramIcon /></a>}
        {xUrl && <a href={xUrl} rel="noopener noreferrer"><XIcon /></a>}
      </div>
    </div>
  );
};

export default ProfileSection;
