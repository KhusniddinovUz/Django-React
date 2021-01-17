import axios from 'axios';
import {
  AUTH_ERROR,
  USER_LOADED,
  USER_LOADING,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
} from './types';
import { returnErrors } from './errors';

//Check token & loading
export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  const token = getState().auth.token;
  const config = {
    headers: {
      'Content-Type': 'applicatino/json',
    },
  };

  if (token) {
    config.headers['Authorization'] = `Token ${token}`;
  }

  axios
    .get('http://localhost:8000/api/auth/user', config)
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
