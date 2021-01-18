import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
} from '../action/types';

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
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        username: action.payload.user.username,
        email: action.payload.user.email,
      };
    case LOGIN_FAIL:
    case SIGNUP_FAIL:
      console.log(action.payload);
    default:
      return state;
  }
};

export default auth;
