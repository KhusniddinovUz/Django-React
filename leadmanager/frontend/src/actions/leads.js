import axios from 'axios';
import { GET_LEADS, DELETE_LEAD, ADD_LEAD, GET_ERRORS } from './types';
import { createMessage } from './messages';

//Get Leads
export const getLeads = () => (dispatch) => {
  axios
    .get('http://localhost:8000/api/leads')
    .then((res) => {
      dispatch({ type: GET_LEADS, payload: res.data });
    })
    .catch((err) => console.log(err));
};

//Delete Lead
export const deleteLead = (id) => (dispatch) => {
  axios
    .delete(`http://localhost:8000/api/leads/${id}`)
    .then((res) => {
      dispatch(createMessage({ deleteLead: 'Lead Deleted' }));
      dispatch({ type: DELETE_LEAD, payload: id });
    })
    .catch((err) => console.log(err));
};

//Add Lead
export const addLead = (user) => (dispatch) => {
  axios
    .post('http://localhost:8000/api/leads/', user)
    .then((res) => {
      dispatch(createMessage({ addLead: 'Lead Added' }));
      dispatch({
        type: ADD_LEAD,
        payload: res.data,
      });
    })
    .catch((err) => {
      const errors = {
        msg: err.response.data,
        status: err.response.status,
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors,
      });
    });
};
