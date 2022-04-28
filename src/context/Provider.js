import React, { useState } from 'react';
import PropTypes from 'prop-types';
import context from '.';

function Provider({ children }) {
  const [isSearchClicked, setSearchClicked] = useState(false);
  const [search, setSearch] = useState('');
  const [searchType, setSearchType] = useState('name');

  const saveSearch = (searchField, type) => {
    setSearch(searchField);
    setSearchType(type);
  };

  const contextValue = {
    search,
    searchType,
    isSearchClicked,
    setSearchClicked,
    saveSearch,
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
