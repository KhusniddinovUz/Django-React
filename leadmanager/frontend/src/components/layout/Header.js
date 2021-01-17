import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='Header'>
      <nav className='navbar navbar-expand-sm navbar-light bg-light'>
        <div className='container'>
          <div className='collapse navbar-collapse' id='navbarTogglerDemo01'>
            <a className='navbar-brand' href=''>
              Lead Manager
            </a>
            <ul className='navbar-nav ml-auto mt-2 mt-lg-0'>
              <li className='nav-item'>
                <Link to='/register' className='nav-link'>
                  Register
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/login' className='nav-link'>
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
