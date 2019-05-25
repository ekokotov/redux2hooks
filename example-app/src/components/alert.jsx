import React from 'react';
import Props from 'prop-types';

const Alert = props => <div className={`alert alert-${props.type}`} role="alert">{props.message}</div>;

Alert.propTypes = {
  message: Props.string.isRequired,
  type: Props.oneOf(['primary', 'success', 'danger', 'warning'])
};

Alert.defaultProps = {
  type: 'success'
};

export default Alert
