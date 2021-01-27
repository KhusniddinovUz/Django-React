import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const className = 'list-group-item';
  const active = 'active-nav';
  const onClick = (e) => {
    if (e.target.tagName === 'LI') {
      Array.from(document.getElementsByClassName(className)).forEach(
        (el) => (el.className = className)
      );
      e.target.parentElement.className = `${className} ${active}`;
    } else if (e.target.parentElement.tagName === 'LI') {
      Array.from(document.getElementsByClassName(className)).forEach(
        (el) => (el.className = className)
      );
      e.target.parentElement.parentElement.className = `${className} ${active}`;
    }
  };

  return (
    <div className='Navbar'>
      <ul className='list-group w-75 mx-auto'>
        <div className='list-group-item'>
          <i className='fab fa-twitter' id='twitter' />
        </div>
        <div onClick={onClick} className='list-group-item'>
          <li className='d-flex align-items-center'>
            <i className='fas fa-home' />
            <NavLink to='/home'>Home</NavLink>
          </li>
        </div>
        <div onClick={onClick} className='list-group-item'>
          <li className='d-flex align-items-center'>
            <i className='far fa-bell' />
            <span>Notifications</span>
          </li>
        </div>
        <div onClick={onClick} className='list-group-item'>
          <li className='d-flex align-items-center'>
            <i className='far fa-envelope' />
            <span>Messages</span>
          </li>
        </div>
        <div onClick={onClick} className='list-group-item'>
          <li className='d-flex align-items-center'>
            <i className='far fa-user' />
            <NavLink to='/home/profile'>Profile</NavLink>
          </li>
        </div>
        <div onClick={onClick} className='list-group-item'>
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
