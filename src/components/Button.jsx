import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { label, onClick, disabled, id, value, className } = this.props;
    return (
      <button
        type="button"
        onClick={ onClick }
        disabled={ disabled }
        data-testid={ id }
        value={ value }
        className={ className }
      >
        { label }
      </button>
    );
  }
}

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
};

Button.defaultProps = {
  id: '',
  value: '',
};
