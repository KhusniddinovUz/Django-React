import { GET_MESSAGES, CREATE_MESSAGES } from './types';

//Create Message
export const createMessage = (msg) => {
  return {
    type: CREATE_MESSAGES,
    payload: msg,
  };
};
