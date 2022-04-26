import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/formWallet.module.css';

class Input extends Component {
  render() {
    const { type, name, label, onChange, value, placeholder, id } = this.props;
    return (
      <div className={ styles.input__container }>
        <label htmlFor={ name }>
          { label }
        </label>
        <input
          type={ type }
          name={ name }
          value={ value }
          onChange={ onChange }
          placeholder={ placeholder }
          data-testid={ id }
          min="1"
        />

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
  onChange: PropTypes.func,
};

Input.defaultProps = {
  label: '',
  value: '',
  name: '',
  placeholder: '',
  id: PropTypes.string,
  onChange: null,
};

export default Input;
