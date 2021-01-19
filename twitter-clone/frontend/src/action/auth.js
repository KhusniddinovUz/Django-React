import axios from 'axios';
import { url } from '../url';
import {
  ADD_ERROR,
  LOGIN_SUCCESS,
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
    .get(`${url}/api/user`, config)
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
    .post(`${url}/api/login`, user, config)
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: ADD_ERROR, payload: err.response.data });
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
    .post(`${url}/api/register`, user, config)
    .then((res) => {
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: ADD_ERROR, payload: err.response.data });
    });
};
