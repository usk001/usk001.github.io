import React from 'react';
import VideoComponent from './VideoComponent';
import { FcLike } from "react-icons/fc";
import InstagramIcon from './InstagramIcon';
import XIcon from './XIcon';

const ProfileSection = ({ id, name, birthdate, job, hometown, hobbies, videoSrc, instagramUrl, xUrl }) => {
  const videoRef = React.useRef(null);

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
        <FcLike className="fc-like" style={{ color: '#00a6ff' }} /> {/* 追加 */}
        {instagramUrl && <a href={instagramUrl} rel="noopener noreferrer"><InstagramIcon /></a>} {/* target="_blank"もつける */}
        {xUrl && <a href={xUrl} rel="noopener noreferrer"><XIcon /></a>}
      </div>
    </div>
  );
};

export default ProfileSection;
