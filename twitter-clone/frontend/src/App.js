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
import Alerts from './components/layout/Alerts';
import Main from './Main';
import Home from './components/NavComponents/Home';

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
          <Route exact path='/' component={Main} />
          <Route path='/register' component={Signup} />
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
