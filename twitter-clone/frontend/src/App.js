import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { loadUser } from './action/auth';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, []);
  const auth = useSelector((state) => state.auth);
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route
            exact
            path='/'
            render={() => <div>Authenticated: {`${auth.isAuthenticated}`}</div>}
          />
          <Route path='/register' component={Signup} />
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
