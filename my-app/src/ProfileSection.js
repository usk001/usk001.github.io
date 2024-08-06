import React from 'react';
import VideoComponent from './VideoComponent';

const ProfileSection = ({ id, name, birthdate, job, hometown, hobbies, videoSrc }) => {
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
    </div>
  );
};

export default ProfileSection;