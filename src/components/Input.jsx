import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { type = 'text', name = '', label = '',
      onChange, value = '', placeholder = '', id = '' } = this.props;
    return (
      <div>
        <input
          type={ type }
          name={ name }
          id={ id }
          value={ value }
          onChange={ onChange }
          placeholder={ placeholder }
          data-testid={ id }
        />
        <label htmlFor={ id }>
          { label }
        </label>

      </div>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  label: '',
  value: '',
  name: '',
  placeholder: '',
  id: PropTypes.string,
};

export default Input;
