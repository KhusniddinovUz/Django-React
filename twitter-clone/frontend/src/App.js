import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { loadUser } from './action/auth';
import Navbar from './components/layout/Navbar';
import TweetHome from './components/layout/TweetHome';
import Alerts from './components/layout/Alerts';
import Feed from './components/layout/Feed';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, []);
  const auth = useSelector((state) => state.auth);
  return (
    <Router>
      <div className='App'>
        <Alerts />
        {!auth.isAuthenticated ? <Redirect to='/login' /> : ''}
        <Switch>
          <Route
            exact
            path='/'
            render={() => (
              <div className='Home'>
                <Navbar />
                <div className=''>
                  <TweetHome />
                  <Feed />
                </div>
              </div>
            )}
          />
          <Route path='/register' component={Signup} />
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
