import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route path='/register' component={Signup} />
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
