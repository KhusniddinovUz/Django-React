import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../action/auth';

const Login = () => {
  const [user, setUser] = useState({ username: '', password: '' });
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const changeHandler = (e) => {
    const newuser = Object.assign({}, user, { [e.target.id]: e.target.value });
    setUser(newuser);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(user));
  };

  if (auth.isAuthenticated) {
    return <Redirect to='' />;
  }

  const { username, password } = user;

  return (
    <div className='container SignUp p-3'>
      <h1 className='mt-4 p-1 text-center'>Login page</h1>
      <form onSubmit={submitHandler}>
        <div className='form-group p-2 '>
          <label htmlFor='username'>Username</label>
          <input
            required
            type='text'
            className='form-control'
            id='username'
            placeholder='Enter Username'
            onChange={changeHandler}
            value={username}
          />
        </div>

        <div className='form-group p-2'>
          <label htmlFor='password'>Password</label>
          <input
            required
            type='password'
            className='form-control'
            id='password'
            placeholder='Password'
            onChange={changeHandler}
            value={password}
          />
        </div>
        <div className='container d-flex align-items-center mt-2'>
          <button type='submit' className='btn btn-primary'>
            Login
          </button>
          <div className='text-center w-100'>
            Don't have an account? <Link to='/register'>Signup</Link> here
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
