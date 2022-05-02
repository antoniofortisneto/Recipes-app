import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { label = '', onClick, disabled = false,
      id = '', value = '', className = '', img = '' } = this.props;
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
        {img && (<img src={ img } alt={ value } />)}
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
  disabled: PropTypes.bool,
  className: PropTypes.string,
  img: PropTypes.string,
};

Button.defaultProps = {
  id: '',
  value: '',
  className: '',
  disabled: false,
  img: '',
};
