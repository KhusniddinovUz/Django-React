import React, { useState } from 'react';

const Tweet = (props) => {
  return (
    <div className='Tweet container p-3 d-flex'>
      <img
        src={`https://ui-avatars.com/api/?name=${props.tweet.username}&background=random`}
        className='profile-image'
        alt='profile'
      />
      <div className='container'>
        <span className='username'>{props.tweet.username}</span>
        <div>{props.tweet.text}</div>
      </div>
    </div>
  );
};

export default Tweet;
