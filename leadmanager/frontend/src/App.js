import Alerts from './components/layout/Alerts';
import Header from './components/layout/Header';
import Dashboard from './components/leads/Dashboard';

function App() {
  return (
    <div className='App'>
      <Alerts />
      <Header />
      <div className='container'>
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
