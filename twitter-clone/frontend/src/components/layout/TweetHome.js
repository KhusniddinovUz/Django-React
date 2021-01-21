import React, { useState } from 'react';
import image from '../../profile-image.jpg';
import { useDispatch } from 'react-redux';
import { addTweet } from '../../action/tweet';

const TweetHome = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addTweet({ text }));
    setText('');
  };
  return (
    <div className='TweetHome'>
      <div>Home</div>
      <form className='p-4' onSubmit={onSubmit}>
        <div className='container d-flex justify-content-center'>
          <img src={image} className='profile-image' alt='profile' />
          <textarea
            type='text'
            placeholder="What's happening?"
            onChange={onChange}
            value={text}
          />
        </div>
        <button type='submit' className='btn butn mx-auto'>
          Tweet
        </button>
      </form>
    </div>
  );
};

export default TweetHome;
