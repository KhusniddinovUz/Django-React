import { GET_ERRORS, DELETE_ERRORS } from '../actions/types';
const initialState = {
  msg: {},
  status: null,
};

const errors = (state = initialState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return {
        msg: action.payload.msg,
        status: action.payload.status,
      };
    case DELETE_ERRORS:
      return (state = initialState);
    default:
      return state;
  }
};

export default errors;
