import axios from 'axios';
import { ADD_ERROR, TWEET_ADD, TWEET_LOAD } from './types';
import { url } from '../url';

//Add Tweet
export const addTweet = (tweet) => (dispatch, getState) => {
  const token = getState().auth.token;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  };
  axios
    .post(`${url}/tweet/`, tweet, config)
    .then((res) => {
      dispatch({
        type: ADD_ERROR,
        payload: { tweetAdded: 'Tweet successfully added' },
      });
      dispatch({ type: TWEET_ADD, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: ADD_ERROR, payload: err.response.data });
    });
};

//Load Tweets
export const loadTweets = () => (dispatch, getState) => {
  const token = getState().auth.token;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  };
  axios
    .get(`${url}/tweet`, config)
    .then((res) => {
      dispatch({ type: TWEET_LOAD, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: ADD_ERROR, payload: err.response.data });
    });
};
