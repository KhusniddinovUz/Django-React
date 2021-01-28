import React from 'react';

const Nav = ({ props, iconClass, name, activeClass }) => {
  const className = 'd-flex align-items-center list-group-item';
  const active = 'active-nav';
  const onClick = (e) => {
    if (e.target.tagName === 'LI') {
      Array.from(document.getElementsByClassName('list-group-item')).forEach(
        (el) => (el.className = className)
      );
      e.target.className = `${className} ${active}`;
      if (name === 'Home') {
        props.history.push(`/${name.toLowerCase()}`);
      } else {
        props.history.push(`/home/${name.toLowerCase()}`);
      }
    } else if (e.target.parentElement.tagName === 'LI') {
      Array.from(document.getElementsByClassName('list-group-item')).forEach(
        (el) => (el.className = className)
      );
      e.target.parentElement.className = `${className} ${active}`;
      if (name === 'Home') {
        props.history.push(`/${name.toLowerCase()}`);
      } else {
        props.history.push(`/home/${name.toLowerCase()}`);
      }
    }
  };

  return (
    <li
      onClick={onClick}
      className={`d-flex align-items-center list-group-item ${activeClass}`}
    >
      <i className={iconClass} />
      <span>{name}</span>
    </li>
  );
};

export default Nav;
