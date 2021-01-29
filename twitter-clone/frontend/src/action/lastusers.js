import { GET_LAST_USERS, ADD_ERROR } from './types';

// Get last users
export const getLastUsers = () => {
  const token = localStorage.getItem('twitter-token');
  const config = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };
  axios
    .get(`${url}/api/lastusers`, config)
    .then((res) => {
      dispatch({ type: GET_LAST_USERS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: ADD_ERROR, payload: err.response.data });
    });
};
