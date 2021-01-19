import { ADD_ERROR } from '../action/types';
const initialState = {
  msg: {},
};
const errors = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ERROR:
      return {
        msg: action.payload,
      };
    default:
      return state;
  }
};

export default errors;
