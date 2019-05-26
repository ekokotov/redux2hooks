import React from 'react';
import PropTypes from 'prop-types';

const Alert = props => <div className={`alert alert-${props.type}`} role="alert">{props.message}</div>;

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['primary', 'success', 'danger', 'warning'])
};

Alert.defaultProps = {
  type: 'success'
};

export default Alert
