import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextInputGroup = ({
  label,
  name,
  value,
  placeholder,
  type,
  onChange,
  error,
  text,
  id,
  autoComplete,
}) => {
  return (
    <div className="form-group">
      
      <input
        type={type}
        name={name}
        className={classnames('form-control', {
          'is-invalid': error,
        })}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        id={id}
        autoComplete={autoComplete}
      />
      <label htmlFor={id}>{label}</label>
      {error && <div className="invalid-feedback">{error}</div>}
      {
        <small id="passwordHelpBlock" className="form-text text-muted">
          {text}
        </small>
      }
    </div>
  );
};

TextInputGroup.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  text: PropTypes.string,
  autoComplete: PropTypes.string,
  
};

TextInputGroup.defaultProps = {
  type: 'text',
};

export default TextInputGroup;
