import React from 'react';
import { useSelector } from 'react-redux';
import Tweet from './Tweet';

const Feed = () => {
  const tweets = useSelector((state) => state.tweet.tweets);
  return (
    <div className='Feed container'>
      {tweets && tweets.map((tweet) => <Tweet tweet={tweet} />)}
    </div>
  );
};

export default Feed;
