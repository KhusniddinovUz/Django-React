import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/NavComponents/Home';
import Profile from './components/NavComponents/Profile';

const Main = (props) => {
  return (
    <div className='Main'>
      <Navbar props={props} />
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/home/profile' component={Profile} />
      </Switch>
    </div>
  );
};

export default Main;
