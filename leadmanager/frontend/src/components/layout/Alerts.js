import React, { useEffect } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';

const Alerts = (props) => {
  const { error, message, alert } = props;
  useEffect(() => {
    if (error.msg.name) alert.error(`Name: ${error.msg.name.join()}`);
    if (error.msg.email) alert.error(`Email: ${error.msg.email.join()}`);
    if (error.msg.message) alert.error(`Message: ${error.msg.message.join()}`);
    if (message.deleteLead) alert.success(message.deleteLead);
    if (message.addLead) alert.success(message.addLead);
  });

  return <></>;
};

const mapStateToProps = (state) => ({
  error: state.errors,
  message: state.messages,
});

export default connect(mapStateToProps)(withAlert()(Alerts));
