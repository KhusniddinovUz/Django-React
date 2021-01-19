import React from 'react';
import image from '../../profile-image.jpg';

const TweetHome = () => {
  return (
    <div className='TweetHome'>
      <div>Home</div>
      <form className='p-4'>
        <div className='container d-flex justify-content-center'>
          <img src={image} className='profile-image' />
          <textarea type='text' placeholder="What's happening?" />
        </div>
        <button className='btn butn mx-auto'>Tweet</button>
      </form>
    </div>
  );
};

export default TweetHome;
