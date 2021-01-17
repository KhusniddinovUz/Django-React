import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addLead } from '../../actions/leads';

const Form = (props) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { name, email, message } = user;

  const onChange = (e) => {
    const newuser = Object.assign({}, user, {
      [e.target.name]: e.target.value,
    });
    setUser(newuser);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.addLead(user);
    setUser({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className='Form card card-body mt-4 mb-4'>
      <h2>Add Lead</h2>
      <form onSubmit={onSubmit}>
        <div className='form-group mt-2'>
          <label>Name</label>
          <input
            className='form-control'
            type='text'
            name='name'
            onChange={onChange}
            value={name}
          />
        </div>
        <div className='form-group mt-2'>
          <label>Email</label>
          <input
            className='form-control'
            type='email'
            name='email'
            onChange={onChange}
            value={email}
          />
        </div>
        <div className='form-group mt-2'>
          <label>Message</label>
          <textarea
            className='form-control'
            type='text'
            name='message'
            onChange={onChange}
            value={message}
          />
        </div>
        <div className='form-group'>
          <button type='submit' className='mt-3 btn btn-primary'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default connect(null, { addLead })(Form);
