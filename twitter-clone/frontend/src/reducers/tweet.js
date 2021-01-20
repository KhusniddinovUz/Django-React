import { TWEET_ADD } from '../action/types';
const initialState = {
  tweets: [],
};

const tweet = (state = initialState, action) => {
  switch (action.type) {
    case TWEET_ADD:
      return {
        ...state,
        tweets: state.tweets.push(action.payload),
      };
    default:
      return state;
  }
};

export default tweet;
