import axios from 'axios';
import { AUTH_ERROR, USER_LOADED, USER_LOADING } from './types';
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
