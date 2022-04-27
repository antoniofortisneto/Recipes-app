import React, { useState } from 'react';
import PropTypes from 'prop-types';
import context from '.';

function Provider({ children }) {
  const [isSearchClicked, setSearchClicked] = useState(false);

  const contextValue = {
    isSearchClicked,
    setSearchClicked,
  };

  return (
    <context.Provider value={ contextValue }>
      {children}
    </context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.array,
}.isRequired;

export default Provider;
