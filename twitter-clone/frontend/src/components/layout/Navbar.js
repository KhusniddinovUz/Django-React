import React from 'react';
import Nav from './Nav';
import { nav } from '../data/nav';
import { v4 } from 'uuid';
import { useSelector } from 'react-redux';

const Navbar = ({ props }) => {
  const active = useSelector((state) => state.nav.activeNav);
  console.log(active);
  return (
    <div className='Navbar'>
      <ul className='w-75 mx-auto'>
        <li className='logo'>
          <i className='fab fa-twitter' id='twitter' />
        </li>
        <br />
        {nav.map((item) => {
          let activeClass = '';
          if (active === item.name) activeClass = 'active-nav';
          return (
            <Nav
              key={v4()}
              iconClass={item.iconClass}
              name={item.name}
              props={props}
              activeClass={activeClass}
            />
          );
        })}
      </ul>
      <div className='w-75 mx-auto'>
        <button className='w-100 btn butn p-3'>Tweet</button>
      </div>
    </div>
  );
};

export default Navbar;
