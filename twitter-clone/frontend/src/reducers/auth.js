import { LOGIN_FAIL, LOGIN_SUCCESS } from '../action/types';

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  token: localStorage.getItem('token'),
  username: null,
  email: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    default:
      return state;
  }
};

export default auth;
