import React, { useEffect } from 'react';
import { getLastUsers } from '../../action/users';
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';

const Trends = () => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLastUsers());
  }, []);
  return (
    <div className='Trends text-center'>
      <input type='search' className='w-75 mt-3' placeholder='Search users' />
      <div className='mx-auto mt-4'>Trends for you</div>
      <div className='mx-auto mt-4' id='lastusers'>
        <span>New Users</span>
        {users &&
          users.map((user) => {
            return <div key={v4()}>@{user.username}</div>;
          })}
      </div>
    </div>
  );
};

export default Trends;
