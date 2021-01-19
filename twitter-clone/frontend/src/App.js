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

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, []);
  const auth = useSelector((state) => state.auth);
  return (
    <Router>
      <div className='App'>
        {!auth.isAuthenticated ? <Redirect to='/login' /> : ''}
        <Switch>
          <Route
            exact
            path='/'
            render={() => (
              <div className='Home'>
                <Navbar />
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
