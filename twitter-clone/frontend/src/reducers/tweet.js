import { TWEET_ADD, TWEET_LOAD, TWEET_DELETE } from '../action/types';
const initialState = {
  tweets: [],
};

const tweet = (state = initialState, action) => {
  switch (action.type) {
    case TWEET_ADD:
      const newTweets = [...state.tweets];
      newTweets.unshift(action.payload);
      return {
        ...state,
        tweets: newTweets,
      };
    case TWEET_LOAD:
      return {
        ...state,
        tweets: action.payload,
      };
    case TWEET_DELETE:
      return {
        ...state,
        tweets: state.tweets.filter((tweet) => tweet.id !== action.payload),
      };
    default:
      return state;
  }
};

export default tweet;
