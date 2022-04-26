import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import styles from '../styles/formWallet.module.css';

class Select extends Component {
  render() {
    const {
      label,
      name,
      onChange,
      value,
      id,
      // defaultOption,
      // defaultValue,
      options,
    } = this.props;
    return (
      <div className="">
        <label htmlFor={ name }>
          { label }
        </label>
        <select
          name={ name }
          data-testid={ id }
          id={ name }
          required
          onChange={ onChange }
          value={ value }
        >
          {
            options.map((option, index) => (
              <option key={ index }>{ option }</option>
            ))
          }
        </select>
      </div>

    );
  }
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  // defaultValue: PropTypes.string,
  // defaultOption: PropTypes.string,
};

Select.defaultProps = {
  // defaultValue: '',
  // defaultOption: 'Selecione',
};

export default Select;
