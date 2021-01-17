import Alerts from './components/layout/Alerts';
import Header from './components/layout/Header';
import Dashboard from './components/leads/Dashboard';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Register from './components/accounts/Register';
import Login from './components/accounts/Login';

function App() {
  return (
    <Router>
      <div className='App'>
        <Alerts />
        <Header />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
