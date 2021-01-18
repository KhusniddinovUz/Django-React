import { useSelector } from 'react-redux';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  const auth = useSelector((state) => state.auth);
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/' render={() => <div>React App</div>} />
          <Route path='/register' component={Signup} />
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
