import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import OwnerTweets from './OwnerTweets';
import { getOwnTweets } from '../../action/tweet';

const Profile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOwnTweets());
  }, []);
  return (
    <div className='Profile'>
      <OwnerTweets />
    </div>
  );
};

export default Profile;
