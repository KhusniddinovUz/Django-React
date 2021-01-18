import { LOGIN_FAIL, LOGIN_SUCCESS } from '../action/types';

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  token: localStorage.getItem('twitter-token'),
  username: null,
  email: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        username: action.payload.user.username,
        email: action.payload.user.email,
      };
    default:
      return state;
  }
};

export default auth;
