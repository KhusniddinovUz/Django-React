import React from 'react';

const Trends = () => {
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
