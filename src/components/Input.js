import { useState } from 'react';
import PropTypes from 'prop-types';

import './Input.css';

function Input({ name, label, type, className, placeholder, value, onChange }) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className={`Input ${className}`}>
      <label htmlFor={name} className="Input-label">
        {label}
      </label>
      <input
        type={type}
        name={name}
        className="Input-input"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

Input.propTypes = {
  value: PropTypes.string.isRequired, 
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

Input.defaultProps = {
  placeholder: '',
  className: '',
  type: 'text',
};

export default Input;
