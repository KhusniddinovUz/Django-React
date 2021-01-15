import axios from 'axios';
import { GET_LEADS } from './types';

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
