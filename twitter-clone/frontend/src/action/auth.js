import axios from 'axios';
import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
  USER_LOADED,
  USER_NOTLOADED,
} from '../action/types';

//LoadUser
export const loadUser = () => (dispatch, getState) => {
  const token = localStorage.getItem('twitter-token');
  const config = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };
  axios
    .get('http://localhost:8000/api/user', config)
    .then((res) => {
      dispatch({ type: USER_LOADED, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: USER_NOTLOADED });
    });
};

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
      dispatch({ type: LOGIN_FAIL, payload: err });
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
