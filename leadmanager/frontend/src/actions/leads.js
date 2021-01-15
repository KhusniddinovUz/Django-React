import axios from 'axios';
import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from './types';

//Get Leads
export const getLeads = () => (dispatch) => {
  axios
    .get('http://localhost:8000/api/leads')
    .then((res) => {
      const data = res.data;
      console.log(data);
      dispatch({ type: GET_LEADS, payload: res.data });
    })
    .catch((err) => console.log(err));
};

//Delete Lead
export const deleteLead = (id) => (dispatch) => {
  axios
    .delete(`http://localhost:8000/api/leads/${id}`)
    .then((res) => {
      dispatch({ type: DELETE_LEAD, payload: id });
    })
    .catch((err) => console.log(err));
};

//Add Lead
export const addLead = (user) => (dispatch) => {
  axios
    .post('http://localhost:8000/api/leads/', user)
    .then((res) => {
      dispatch({
        type: ADD_LEAD,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
