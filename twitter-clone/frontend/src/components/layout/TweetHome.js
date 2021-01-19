import React from 'react';
import image from '../../profile-image.jpg';

const TweetHome = () => {
  return (
    <div className='TweetHome'>
      <div>Home</div>
      <form>
        <img src={image} className='profile-image' />
        <textarea type='text' placeholder="What's happening?" />
      </form>
    </div>
  );
};

export default TweetHome;
