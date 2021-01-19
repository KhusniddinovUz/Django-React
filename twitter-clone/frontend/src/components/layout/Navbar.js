import React from 'react';

const Navbar = () => {
  return (
    <div className='Navbar'>
      <ul className='list-group'>
        <div className='list-group-item'>
          <i className='fab fa-twitter' id='twitter' />
        </div>
        <div className='list-group-item'>
          <li className=' active-nav'>
            <i className='fas fa-home' />
            Home
          </li>
        </div>
        <div className='list-group-item'>
          <li className=''>
            <i className='far fa-bell' />
            Notifications
          </li>
        </div>
        <div className='list-group-item'>
          <li className=''>
            <i className='far fa-envelope' />
            Messages
          </li>
        </div>
        <div className='list-group-item'>
          <li className=''>
            <i className='far fa-user' />
            Profile
          </li>
        </div>
        <div className='list-group-item'>
          <li className=''>
            <i className='fas fa-bars' />
            <span>More</span>
          </li>
        </div>
        <div className='list-group-item'>
          <button className='btn'>Tweet</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
