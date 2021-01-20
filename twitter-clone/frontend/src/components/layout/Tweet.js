import React from 'react';
import profile from '../../profile-image.jpg';
import { useSelector } from 'react-redux';

const Tweet = (props) => {
  const auth = useSelector((state) => state.auth);
  return (
    <div className='Tweet container p-2 '>
      <div className='d-flex'>
        <div>
          <img src={profile} className='profile-image' />
        </div>
        <div className='container'>
          <span className='username'>{auth.username}</span>
          <div>{props.tweet.text}</div>
        </div>
      </div>
      <div className='footer d-flex justify-content-evenly mt-3'>
        <i className='far fa-comment tweet-icon' />
        <i className='far fa-heart tweet-icon' />
        <i className='far fa-share-square tweet-icon' />
        <i className='far fa-trash-alt tweet-icon' />
      </div>
    </div>
  );
};

export default Tweet;
