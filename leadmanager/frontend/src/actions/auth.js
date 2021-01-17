import axios from 'axios';
import {
  AUTH_ERROR,
  USER_LOADED,
  USER_LOADING,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOG_OUT,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from './types';
import { returnErrors } from './errors';

//Check token & loading
export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  axios
    .get('http://localhost:8000/api/auth/user', tokenConfig(getState))
    .then((res) => {
      dispatch({ type: USER_LOADED, payload: res.data });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({ type: AUTH_ERROR });
    });
};

export const login = (username, password) => (dispatch) => {
  axios
    .post('http://localhost:8000/api/auth/login', {
      username: username,
      password: password,
    })
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({ type: LOGIN_FAIL });
    });
};

export const register = (user) => (dispatch) => {
  axios
    .post('http://localhost:8000/api/auth/register', user)
    .then((res) => {
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({ type: REGISTER_FAIL });
    });
};

export const logout = () => (dispatch, getState) => {
  axios
    .post('http://localhost:8000/api/auth/logout/', null, tokenConfig(getState))
    .then((res) => {
      dispatch({ type: LOG_OUT });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

//Setup config with token

const tokenConfig = (getState) => {
  const token = getState().auth.token;
  const config = {
    headers: {
      'Content-Type': 'applicatino/json',
    },
  };

  if (token) {
    config.headers['Authorization'] = `Token ${token}`;
  }

  return config;
};
