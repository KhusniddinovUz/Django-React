import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

const Header = (props) => {
  const { isAuthenticated, user } = props.auth;

  const guestLinks = (
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
  );

  const authLinks = (
    <div className='container d-flex justify-content-evenly p-1 align-items-center'>
      <span className='navbar-text mr-3'>
        <strong>{user ? `Welcome ${user.username}` : ``}</strong>
      </span>
      <button
        onClick={props.logout}
        className='ml-3 text-light btn btn-danger nav-link btn-sm'
      >
        Logout
      </button>
    </div>
  );

  return (
    <div className='Header'>
      <nav className='navbar navbar-expand-sm navbar-light bg-light'>
        <div className='container d-flex justify-content-center align-items-center'>
          <div className='collapse navbar-collapse' id='navbarTogglerDemo01'>
            <a className='navbar-brand' href=''>
              Lead Manager
            </a>
          </div>
          {isAuthenticated ? authLinks : guestLinks}
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);
