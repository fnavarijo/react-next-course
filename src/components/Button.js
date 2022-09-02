import PropTypes from 'prop-types';

import './Button.css';

function Button ({ label, inverted, className, onClick }) {
  const buttonClassName = inverted ? 'Button-inverted' : '';
  
  return (
    <button className={`Button ${buttonClassName} ${className}`} onClick={onClick}>
      { label }
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  inverted: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  inverted: false,
  className: '',
  onClick: () => {},
}

export default Button;