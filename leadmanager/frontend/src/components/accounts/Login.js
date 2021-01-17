import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [state, setstate] = useState({
    username: '',
    password: '',
  });

  const onChange = (e) => {
    const newState = Object.assign({}, state, {
      [e.target.name]: e.target.value,
    });
    setstate(newState);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('submit', state);
  };
  const { username, password } = state;
  return (
    <div className='Register col-md-6 m-auto'>
      <div className='card card-body mt-5'>
        <h2 className='text-center'>Login</h2>
        <form onSubmit={onSubmit}>
          <div className='form-group mt-2'>
            <label>Username</label>
            <input
              type='text'
              className='form-control'
              name='username'
              onChange={onChange}
              value={username}
            />
          </div>
          <div className='form-group mt-2'>
            <label>Password</label>
            <input
              type='password'
              className='form-control'
              name='password'
              onChange={onChange}
              value={password}
            />
          </div>
          <div className='form-group mt-2'>
            <button type='submit' className='btn btn-primary mt-2'>
              Login
            </button>
          </div>
          <p className='mt-2'>
            Don't have an account? <Link to='/register'>Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
