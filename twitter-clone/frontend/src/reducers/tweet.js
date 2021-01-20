import { TWEET_ADD } from '../action/types';
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
    default:
      return state;
  }
};

export default tweet;
