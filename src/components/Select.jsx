import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const {
      label = '',
      name = '',
      onChange,
      value = '',
      id = '',
      options = '',
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
            options.map(({ strArea }, index) => (
              <option
                key={ index }
                data-testid={ `${strArea}-option` }
              >
                { strArea }

              </option>
            ))
          }
        </select>
      </div>

    );
  }
}

Select.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape(),
  ),
};

Select.defaultProps = {
  label: '',
  name: '',
  id: '',
  value: '',
  options: '',
  // defaultValue: '',
  // defaultOption: 'Selecione',
};

export default Select;
