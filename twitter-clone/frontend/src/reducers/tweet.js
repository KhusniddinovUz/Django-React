import { TWEET_ADD, TWEET_LOAD } from '../action/types';
const initialState = {
  tweets: [],
};

const tweet = (state = initialState, action) => {
  switch (action.type) {
    case TWEET_ADD:
      const newTweets = [...state.tweets];
      newTweets.push(action.payload);
      return {
        ...state,
        tweets: newTweets,
      };
    case TWEET_LOAD:
      return {
        ...state,
        tweets: action.payload,
      };
    default:
      return state;
  }
};

export default tweet;
