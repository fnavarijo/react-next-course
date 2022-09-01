import PropTypes from 'prop-types';

import './Button.css';

function Button ({ label, inverted, className }) {
  const buttonClassName = inverted ? 'Button-inverted' : '';
  
  return (
    <button className={`Button ${buttonClassName} ${className}`}>
      { label }
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  inverted: PropTypes.bool,
  className: PropTypes.string,
}

Button.defaultProps = {
  inverted: false,
  className: '',
}

export default Button;