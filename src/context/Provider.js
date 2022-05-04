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
  const [area, setArea] = useState('All');

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

  // Value = food ou drink, isActive é para informar se o botao de receita surpresa foi clicada
  const saveIsRandomRecipe = (value, isActive) => {
    setisRecipeSurprise(({ choice: value, isSurprise: isActive }));
  };

  // salva a origem da comida, ex: American
  const saveArea = (areaValue) => {
    setArea(areaValue);
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
    area,
    saveArea,
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
