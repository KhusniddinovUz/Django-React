import { GET_LAST_USERS } from '../action/types';

const initialState = {
  users: [],
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_LAST_USERS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default users;
