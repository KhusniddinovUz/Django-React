import axios from 'axios';
import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
} from '../action/types';

// Login
export const login = (user) => (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  axios
    .post('http://localhost:8000/api/login', user, config)
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAIL, payload: err.data });
    });
};

//Register
export const register = (user) => (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  axios
    .post('http://localhost:8000/api/register', user, config)
    .then((res) => {
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: SIGNUP_FAIL, payload: err.data });
    });
};
