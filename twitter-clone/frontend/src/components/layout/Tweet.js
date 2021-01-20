import React from 'react';

const Tweet = (props) => {
  return <div className='container'>{props.tweet.text}</div>;
};

export default Tweet;
