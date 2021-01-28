import React from 'react';
import { Redirect } from 'react-router-dom';

const Nav = ({ iconClass, name }) => {
  const className = 'd-flex align-items-center list-group-item';
  const active = 'active-nav';
  const onClick = (e) => {
    if (e.target.tagName === 'LI') {
      Array.from(document.getElementsByClassName('list-group-item')).forEach(
        (el) => (el.className = className)
      );
      e.target.className = `${className} ${active}`;
      return <Redirect to={`/home/${name}`} />;
    } else if (e.target.parentElement.tagName === 'LI') {
      Array.from(document.getElementsByClassName('list-group-item')).forEach(
        (el) => (el.className = className)
      );
      e.target.parentElement.className = `${className} ${active}`;
      return <Redirect to={`/home/${name}`} />;
    }
  };

  return (
    <li onClick={onClick} className='d-flex align-items-center list-group-item'>
      <i className={iconClass} />
      <span>{name}</span>
    </li>
  );
};

export default Nav;
