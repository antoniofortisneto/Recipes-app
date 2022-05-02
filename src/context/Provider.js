import React, { useState } from 'react';
import PropTypes from 'prop-types';
import context from '.';
import '../App.css';

function Provider({ children }) {
  const [dataFood, setDataFood] = useState([]);
  const [isSearchClicked, setSearchClicked] = useState(false);
  const [search, setSearch] = useState('');
  const [searchType, setSearchType] = useState('name');
  // const [categoriesFood, setCategoriesFoods] = useState([]);
  const [searchCategoryFood, setSearchCategoryFood] = useState('All');
  const [searchCategoryDrink, setSearchCategoryDrink] = useState('All');
  const [isRecipeSurprise, setisRecipeSurprise] = useState(
    {
      choice: '',
      isSurprise: false,
    },
  );

  const saveSearch = (searchField, type) => {
    setSearch(searchField);
    setSearchType(type);
  };

  const saveSearchCategoryFood = (category) => {
    setSearchCategoryFood((prevFood) => (prevFood !== category
      ? category
      : 'All'));
  };

  const saveSearchCategoryDrink = (category) => {
    setSearchCategoryDrink((prevDrink) => (prevDrink !== category
      ? category
      : 'All'));
  };

  const saveIsRandomRecipe = (value, isActive) => {
    setisRecipeSurprise(({ choice: value, isSurprise: isActive }));
  };

  const contextValue = {
    dataFood,
    setDataFood,
    search,
    searchType,
    isSearchClicked,
    setSearchClicked,
    saveSearch,
    /* categoriesFood */
    /* setCategoriesFoods */
    searchCategoryFood,
    saveSearchCategoryFood,
    searchCategoryDrink,
    saveSearchCategoryDrink,
    isRecipeSurprise,
    setisRecipeSurprise,
    saveIsRandomRecipe,
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
