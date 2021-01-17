import { GET_ERRORS, DELETE_ERRORS } from './types';
export const deleteErrors = () => {
  return {
    type: DELETE_ERRORS,
  };
};

export const returnErrors = (msg, status) => {
  return {
    type: GET_ERRORS,
    payload: { msg, status },
  };
};
