import React from 'react';
import landingPageVid from '../assets/videos/landingPageVid.mp4';

//background video
export const BgVid = () => {
  return (
    <div className='bg-container'>
      <video className='bg-video' autoPlay loop muted >
        <source src={landingPageVid} type="video/mp4"/>
        Your Browser Does Not Support videos
      </video>
    </div>
  );
};
