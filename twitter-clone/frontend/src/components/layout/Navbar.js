import React from 'react';
import Nav from './Nav';
import { nav } from '../data/nav';
import { v4 } from 'uuid';

const Navbar = ({ props }) => {
  return (
    <div className='Navbar'>
      <ul className='list-group w-75 mx-auto'>
        <li className='list-group-item'>
          <i className='fab fa-twitter' id='twitter' />
        </li>
        {nav.map((item) => (
          <Nav
            key={v4()}
            iconClass={item.iconClass}
            name={item.name}
            props={props}
          />
        ))}
        <li className='mx-auto'>
          <button className='btn butn p-3'>Tweet</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
