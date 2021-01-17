import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../../actions/auth';
import { createMessage } from '../../actions/messages';

const Register = (props) => {
  const [state, setstate] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  });

  const onChange = (e) => {
    const newState = Object.assign({}, state, {
      [e.target.name]: e.target.value,
    });
    setstate(newState);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { password, password2 } = state;
    if (password === password2) {
      props.register({ username, email, password });
    } else {
      props.createMessage({ passwordNotMatch: 'Passwords do not match' });
    }
  };
  const { username, email, password, password2 } = state;

  if (props.isAuthenticated) {
    return <Redirect to='/' />;
  }
  return (
    <div className='Register col-md-6 m-auto'>
      <div className='card card-body mt-5'>
        <h2 className='text-center'>Register</h2>
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
            <label>Email</label>
            <input
              type='email'
              className='form-control'
              name='email'
              onChange={onChange}
              value={email}
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
            <label>Confirm Password</label>
            <input
              type='password'
              className='form-control'
              name='password2'
              onChange={onChange}
              value={password2}
            />
          </div>
          <div className='form-group mt-2'>
            <button type='submit' className='btn btn-primary mt-2'>
              Register
            </button>
          </div>
          <p className='mt-2'>
            Already have an account? <Link to='/login'>Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register, createMessage })(Register);
