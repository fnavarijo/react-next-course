import { useState } from 'react';
import PropTypes from 'prop-types';

import './Input.css';

function Input({ name, label, type, className, placeholder }) {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
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
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

Input.defaultProps = {
  placeholder: '',
  className: '',
  type: 'text',
};

export default Input;
