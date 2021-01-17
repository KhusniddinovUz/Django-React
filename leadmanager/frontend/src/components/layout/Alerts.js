import React, { useEffect } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';

const Alerts = (props) => {
  console.log(props.error);
  useEffect(() => {
    if (props.error.msg.name)
      props.alert.error(`Name: ${props.error.msg.name.join()}`);
    if (props.error.msg.email)
      props.alert.error(`Email: ${props.error.msg.email.join()}`);
  });
  return <></>;
};

const mapStateToProps = (state) => ({
  error: state.errors,
});

export default connect(mapStateToProps)(withAlert()(Alerts));
