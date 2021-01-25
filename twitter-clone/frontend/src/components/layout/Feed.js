import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Tweet from './Tweet';
import { v4 } from 'uuid';
import { loadTweets, getOwnTweets } from '../../action/tweet';

const Feed = () => {
  useEffect(() => {
    dispatch(loadTweets());
    dispatch(getOwnTweets());
  }, []);
  const dispatch = useDispatch();
  const tweets = useSelector((state) => state.tweet.tweets);
  return (
    <div className='Feed container mt-4'>
      {tweets && tweets.map((tweet) => <Tweet key={v4()} tweet={tweet} />)}
    </div>
  );
};

export default Feed;
