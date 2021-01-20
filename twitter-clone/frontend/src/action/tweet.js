import axios from 'axios';
import { ADD_ERROR, TWEET_ADD } from './types';
import { url } from '../url';

//Add Tweet
export const addTweet = (tweet) => (dispatch, getState) => {
  const token = getState().auth.token;
  console.log(`addTweet ${token}`);
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  };
  axios
    .post(`${url}/tweet/`, tweet, config)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: TWEET_ADD, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADD_ERROR, payload: err.response.data });
    });
};
