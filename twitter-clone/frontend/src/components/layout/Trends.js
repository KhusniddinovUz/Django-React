import React, { useEffect } from 'react';
import { getLastUsers } from '../../action/lastusers';
import { useDispatch } from 'react-redux';

const Trends = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLastUsers());
  }, []);
  return (
    <div className='Trends text-center'>
      <input type='search' className='w-75 mt-3' placeholder='Search users' />
      <div className='mx-auto mt-4'>Trends for you</div>
      <div className='mx-auto mt-4'>
        <span>New Users</span>
      </div>
    </div>
  );
};

export default Trends;
