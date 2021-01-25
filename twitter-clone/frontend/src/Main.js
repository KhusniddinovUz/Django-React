import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/NavComponents/Home';

const Main = () => {
  return (
    <div className='Main'>
      {/* <Redirect to='/home' /> */}
      <Navbar />
      <Router>
        <Switch>
          <Route path='/home' component={Home} />
        </Switch>
      </Router>
    </div>
  );
};

export default Main;
