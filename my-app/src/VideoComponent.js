import React from 'react';

const VideoComponent = React.forwardRef(({ src, className }, ref) => (
  <video
    ref={ref}
    className={className}
    autoPlay
    loop
    muted
    playsInline
  >
    <source src={src} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
));

export default VideoComponent;