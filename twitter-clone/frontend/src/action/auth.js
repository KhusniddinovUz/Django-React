import axios from 'axios';
import { LOGIN_FAIL, LOGIN_SUCCESS } from '../action/types';
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
    .catch((err) => console.log(err));
};
