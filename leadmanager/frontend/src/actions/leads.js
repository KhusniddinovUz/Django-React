import axios from 'axios';
import { GET_LEADS, DELETE_LEAD, ADD_LEAD, GET_ERRORS } from './types';
import { createMessage } from './messages';
import { returnErrors } from './errors';
import { tokenConfig } from './auth';

//Get Leads
export const getLeads = () => (dispatch, getState) => {
  axios
    .get('http://localhost:8000/api/leads', tokenConfig(getState))
    .then((res) => {
      dispatch({ type: GET_LEADS, payload: res.data });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

//Delete Lead
export const deleteLead = (id) => (dispatch, getState) => {
  axios
    .delete(`http://localhost:8000/api/leads/${id}`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteLead: 'Lead Deleted' }));
      dispatch({ type: DELETE_LEAD, payload: id });
    })
    .catch((err) => console.log(err));
};

//Add Lead
export const addLead = (user) => (dispatch, getState) => {
  axios
    .post('http://localhost:8000/api/leads/', user, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addLead: 'Lead Added' }));
      dispatch({
        type: ADD_LEAD,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
