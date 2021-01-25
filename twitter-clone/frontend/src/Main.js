import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/NavComponents/Home';
import Profile from './components/NavComponents/Profile';

const Main = () => {
  return (
    <div className='Main'>
      <Navbar />
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/profile' component={Profile} />
      </Switch>
    </div>
  );
};

export default Main;
