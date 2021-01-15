import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getLeads } from '../../actions/leads';

const Leads = (props) => {
  useEffect(() => {
    props.getLeads();
  }, []);
  return (
    <div className='Leads'>
      <h2>Leads</h2>
      <table className='table table-striped'>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Message</td>
          </tr>
        </thead>
        <tbody>
          {props.leads &&
            props.leads.map((lead) => (
              <tr key={lead.id}>
                <td>{lead.id}</td>
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.message}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  leads: state.leads.leads,
});

export default connect(mapStateToProps, { getLeads })(Leads);
