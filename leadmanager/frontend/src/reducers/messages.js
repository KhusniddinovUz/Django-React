import { CREATE_MESSAGES, DELETE_MESSAGES } from '../actions/types';
const initialState = {};

const messages = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_MESSAGES:
      return (state = action.payload);
    case DELETE_MESSAGES:
      return (state = {});
    default:
      return state;
  }
};

export default messages;
