import React, { useEffect } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import { deleteMessage } from '../../actions/messages';
import { deleteErrors } from '../../actions/errors';

const Alerts = (props) => {
  const { error, message, alert, deleteMessage, deleteErrors } = props;
  useEffect(() => {
    if (error.msg.name) {
      alert.error(`Name: ${error.msg.name.join()}`);
      deleteErrors();
    }
    if (error.msg.email) {
      alert.error(`Email: ${error.msg.email.join()}`);
      deleteErrors();
    }
    if (error.msg.message) {
      alert.error(`Message: ${error.msg.message.join()}`);
      deleteErrors();
    }
    if (error.msg.username) {
      alert.error(error.msg.username.join());
      deleteErrors();
    }
    if (error.msg.non_field_errors) {
      alert.error(error.msg.non_field_errors.join());
      deleteErrors();
    }
    if (message.deleteLead) {
      alert.success(message.deleteLead);
      deleteMessage();
    }
    if (message.addLead) {
      alert.success(message.addLead);
      deleteMessage();
    }
    if (message.passwordNotMatch) {
      alert.error(message.passwordNotMatch);
      deleteMessage();
    }
  });

  return <></>;
};

const mapStateToProps = (state) => ({
  error: state.errors,
  message: state.messages,
});

export default connect(mapStateToProps, { deleteMessage, deleteErrors })(
  withAlert()(Alerts)
);
