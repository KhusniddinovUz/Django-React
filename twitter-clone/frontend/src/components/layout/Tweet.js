import React from 'react';
import profile from '../../profile-image.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTweet } from '../../action/tweet';

const Tweet = (props) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const onDelete = () => {
    dispatch(deleteTweet(props.tweet.id));
  };
  return (
    <div className='Tweet container p-2 '>
      <div className='d-flex'>
        <div>
          <img src={profile} className='profile-image' />
        </div>
        <div className='container'>
          <span className='username'>{props.tweet.username}</span>
          <div>{props.tweet.text}</div>
        </div>
      </div>
      <div className='footer d-flex justify-content-evenly mt-3'>
        <i className='far fa-comment tweet-icon' />
        <i className='far fa-heart tweet-icon' />
        <i className='far fa-share-square tweet-icon' />
        <i className='far fa-trash-alt tweet-icon' onClick={onDelete} />
      </div>
    </div>
  );
};

export default Tweet;
