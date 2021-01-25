import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='Navbar'>
      <ul className='list-group w-75 mx-auto'>
        <div className='list-group-item'>
          <i className='fab fa-twitter' id='twitter' />
        </div>
        <div className='list-group-item'>
          <li className='active-nav d-flex align-items-center'>
            <i className='fas fa-home' />
            <NavLink to='/home'>Home</NavLink>
          </li>
        </div>
        <div className='list-group-item'>
          <li className='d-flex align-items-center'>
            <i className='far fa-bell' />
            <span>Notifications</span>
          </li>
        </div>
        <div className='list-group-item'>
          <li className='d-flex align-items-center'>
            <i className='far fa-envelope' />
            <span>Messages</span>
          </li>
        </div>
        <div className='list-group-item'>
          <li className='d-flex align-items-center'>
            <i className='far fa-user' />
            <NavLink to='/home/profile'>Profile</NavLink>
          </li>
        </div>
        <div className='list-group-item'>
          <li className='d-flex align-items-center'>
            <i className='fas fa-bars' />
            <span>More</span>
          </li>
        </div>
        <div className='mx-auto'>
          <button className='btn butn p-3'>Tweet</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
