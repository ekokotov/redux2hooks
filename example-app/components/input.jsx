import React from 'react';
import PropTypes from 'prop-types';
import Alert from './alert';

const FormInput = React.forwardRef((props, ref) => (
  <div className="form-group">
    <label htmlFor={props.label}>{props.label}</label>
    <input type={props.type} id={props.label} ref={ref} className="form-control"
           placeholder={props.label} required={props.required}/>
    {props.error && <Alert message={props.error} type="danger"/>}
  </div>));

FormInput.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  required: PropTypes.bool,
};

FormInput.defaultProps = {
  type: "text"
};


export default FormInput;
